// src/app/posts/edit/[id]/page.tsx
import PostForm from '@/components/PostForm';
import { handleUpdatePost } from '@/lib/actions';
import { getPostById } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  if (!post) notFound();

  // Kita perlu `bind` ID post ke Server Action
  const updateAction = handleUpdatePost.bind(null, post.id);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Edit Post</h1>
      <PostForm action={updateAction} initialData={post} />
    </div>
  );
}