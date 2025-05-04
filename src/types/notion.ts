// types/notion.ts
export interface NotionPage {
  id: string;
  properties: {
    Title: {
      title: [{ plain_text: string }];
    };
    Slug: {
      rich_text: [{ plain_text: string }];
    };
    Content: {
      rich_text: [{ plain_text: string }];
    };
    Description:{
      rich_text: [{ plain_text: string }];
    }
    Author?: {
      rich_text: [{ plain_text: string }];
    };
    Image?: {
      files: [{ file: { url: string } }];
    };
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  author?: string;
  image?: string;
}

export interface BlogWithSlug extends Post {
  description: string;
}