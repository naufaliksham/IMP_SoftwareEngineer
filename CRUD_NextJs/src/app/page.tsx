import { getPosts } from '@/lib/data';
import { Post } from '@/types';
import Link from 'next/link';
import { handleDeletePost } from '@/lib/actions';

function DeleteButton({ id }: { id: string }) {
  const deleteAction = handleDeletePost.bind(null, id);
  return (
    <form action={deleteAction}>
      <button type="submit" className="btn btn-error btn-sm">Hapus</button>
    </form>
  );
}

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Semua Postingan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.content.substring(0, 80)}...</p>
              <div className="card-actions justify-end mt-4 space-x-2">
                <Link href={`/posts/${post.id}`} className="btn btn-secondary btn-sm">Lihat</Link>
                <Link href={`/posts/edit/${post.id}`} className="btn btn-accent btn-sm">Edit</Link>
                <DeleteButton id={post.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}