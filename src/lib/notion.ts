import { Client } from "@notionhq/client";
import { NotionPage, Post, BlogWithSlug } from "@/types/notion";
import fs from "fs";
import path from "path";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";

// Initialize Notion clients
const notion = new Client({ auth: process.env.NOTION_API_KEY });
export const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

// Cache configuration
const CACHE_DIR = path.join(process.cwd(), ".cache");
const CACHE_FILE = path.join(CACHE_DIR, "blog-data.json");
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Helper function to read from cache
function readCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const stats = fs.statSync(CACHE_FILE);
      const age = Date.now() - stats.mtimeMs;

      if (age < CACHE_TIME) {
        return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
      }
    }
    return null;
  } catch (error) {
    console.error("Error reading cache:", error);
    return null;
  }
}

// Helper function to write to cache
function writeCache(data: any) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data));
  } catch (error) {
    console.error("Error writing to cache:", error);
  }
}

// Helper function to safely get property values
const getPropertyValue = (property: any, defaultValue: any = null) => {
  if (!property) return defaultValue;

  switch (property.type) {
    case "title":
      return property.title?.[0]?.plain_text || defaultValue;
    case "rich_text":
      return property.rich_text?.[0]?.plain_text || defaultValue;
    case "files":
      return property.files?.[0]?.file?.url || defaultValue;
    case "select":
      return property.select?.name || defaultValue;
    default:
      return defaultValue;
  }
};

// Fetch database with caching
async function getDatabase(): Promise<NotionPage[]> {
  try {
    const cachedData = readCache();
    if (cachedData) {
      console.log("Using cached database data");
      return cachedData;
    }

    console.log("Fetching fresh database data");
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    return response.results as NotionPage[];
  } catch (error) {
    console.error("Error fetching database:", error);
    return [];
  }
}

// Get all blogs with efficient caching
export async function getAllBlogs(): Promise<BlogWithSlug[]> {
  try {
    // Try to get from cache first
    const cachedPosts = readCache();
    if (cachedPosts) {
      return cachedPosts;
    }

    // Fetch fresh data
    const database = await getDatabase();

    const posts = database.map((page) => {
      const properties = (page as PageObjectResponse).properties;

      return {
        id: page.id,
        title: getPropertyValue(properties.Title, ""),
        slug: getPropertyValue(properties.Slug, `post-${page.id}`),
        content: getPropertyValue(properties.Content, ""),
        description: getPropertyValue(properties.Description, ""),
        author: getPropertyValue(properties.Author, "Rug Raider"),
        image: getPropertyValue(properties.Image, null),
        status: getPropertyValue(properties.status, "Draft"),
      };
    });

    // Cache the processed data
    writeCache(posts);
    return posts;
  } catch (error) {
    console.error("Error in getAllBlogs:", error);

    // Try to use cached data if available
    const cachedData = readCache();
    if (cachedData) {
      console.log("Using cached data due to error");
      return cachedData;
    }

    return [];
  }
}

// Cached function to get published pages
export const getPages = cache(async () => {
  try {
    const cachedPosts = readCache();
    if (cachedPosts) {
      // Filter for done status from cache
      const donePages = {
        results: cachedPosts.filter((post) => post.status === "Done"),
      };
      return donePages;
    }

    return await notionClient.databases.query({
      filter: {
        property: "status",
        select: {
          equals: "Done",
        },
      },
      database_id: process.env.NOTION_DATABASE_ID!,
    });
  } catch (error) {
    console.error("Error in getPages:", error);
    return { results: [] };
  }
});

// Use LRU cache for page content
const pageContentCache = new Map<
  string,
  { data: BlockObjectResponse[]; timestamp: number }
>();

// Get page content with improved caching
export const getPageContent = cache(async (pageId: string) => {
  try {
    // Check in-memory cache first
    const cachedContent = pageContentCache.get(pageId);
    if (cachedContent && Date.now() - cachedContent.timestamp < CACHE_TIME) {
      console.log(`Using cached content for page: ${pageId}`);
      return cachedContent.data;
    }

    console.log(`Fetching content for page: ${pageId}`);
    const response = await notionClient.blocks.children.list({
      block_id: pageId,
    });
    const content = response.results as BlockObjectResponse[];

    // Update in-memory cache
    pageContentCache.set(pageId, { data: content, timestamp: Date.now() });

    // Limit cache size to prevent memory issues
    if (pageContentCache.size > 100) {
      const oldestKey = [...pageContentCache.keys()][0];
      pageContentCache.delete(oldestKey);
    }

    return content;
  } catch (error) {
    console.error("Error in getPageContent:", error);
    return [];
  }
});

// Get page by slug with caching
export const getPageBySlug = cache(async (slug: string) => {
  try {
    // Try to find in cache first
    const cachedPosts = readCache();
    if (cachedPosts) {
      const matchingPost = cachedPosts.find((post) => post.slug === slug);
      if (matchingPost) {
        console.log(`Found page with slug "${slug}" in cache`);
        // Return in format compatible with PageObjectResponse
        return {
          id: matchingPost.id,
          properties: {
            Title: {
              type: "title",
              title: [{ plain_text: matchingPost.title }],
            },
            Slug: {
              type: "rich_text",
              rich_text: [{ plain_text: matchingPost.slug }],
            },
            Description: {
              type: "rich_text",
              rich_text: [{ plain_text: matchingPost.description }],
            },
            Author: {
              type: "rich_text",
              rich_text: [{ plain_text: matchingPost.author }],
            },
            Image: {
              type: "files",
              files: [{ file: { url: matchingPost.image } }],
            },
            status: { type: "select", select: { name: matchingPost.status } },
          },
        } as unknown as PageObjectResponse;
      }
    }

    // If not in cache, fetch from API
    console.log(`Fetching page with slug "${slug}" from API`);
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    return response.results[0] as PageObjectResponse | undefined;
  } catch (error) {
    console.error("Error in getPageBySlug:", error);
    return undefined;
  }
});

// Function to invalidate cache
export function invalidateCache() {
  try {
    console.log("Invalidating cache");
    if (fs.existsSync(CACHE_FILE)) {
      fs.unlinkSync(CACHE_FILE);
    }
    pageContentCache.clear();
  } catch (error) {
    console.error("Error invalidating cache:", error);
  }
}
