import { notFound } from "next/navigation";
import { blogs } from "../../data/blogs";
import BlogContent from "../../components/BlogContent";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  return <BlogContent blog={blog} />;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}