// src/app/posts/create/page.tsx
import PostForm from '@/components/PostForm';
import { handleCreatePost } from '@/lib/actions';

export default function CreatePostPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Buat Post Baru</h1>
      <PostForm action={handleCreatePost} />
    </div>
  );
}