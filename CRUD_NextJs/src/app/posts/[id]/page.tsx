// src/app/posts/[id]/page.tsx
import { getPostById } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  if (!post) notFound(); // Tampilkan 404 jika post tidak ada

  return (
    <div className="prose lg:prose-xl max-w-4xl mx-auto">
      <h1>{post.title}</h1>
      <p className="lead">{post.content}</p>
      <div className="mt-8">
        <Link href="/" className="btn btn-outline no-underline">&larr; Kembali</Link>
      </div>
    </div>
  );
}