import { Metadata } from "next";
import { BlogLayout } from "@/components/shared/blog-layout";
import { getAllBlogs, getPageBySlug, getPageContent, notionClient } from "@/lib/notion";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('');
const dompurify = DOMPurify(window);

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogs = await getAllBlogs();
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for does not exist.'
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: blog.image ? [blog.image] : [],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: Props) {
  const blogs = await getAllBlogs();
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const post = await getPageBySlug(params.slug);
  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const contents = await notionRenderer.render(...content);

  const sanitizedContents = dompurify.sanitize(contents);

  return (
    <BlogLayout blog={blog}>
      <div className="prose prose-zinc dark:prose-invert text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white">
        <div dangerouslySetInnerHTML={{ __html: sanitizedContents }} />
      </div>
    </BlogLayout>
  );
}