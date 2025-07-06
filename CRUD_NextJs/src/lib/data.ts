import { Post } from "@/types";

let posts: Post[] = [
  { id: '1', title: 'PT INFORMATIKA MEDIA PRATAMA', content: 'Saya mendaftar sebagai karyawan baru.' },
  { id: '2', title: 'Database Sementara', content: 'Lokasi: src/lib/data.ts' },
  { id: '3', title: 'Akan Hilang Jika Refresh Halaman Website', content: 'Konten ini akan hilang jika halaman di-refresh.' },
];

export const getPosts = async (): Promise<Post[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return posts;
};

export const getPostById = async (id: string): Promise<Post | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return posts.find(p => p.id === id);
};

export const createPost = (newPost: Omit<Post, 'id'>): Post => {
  const post: Post = { ...newPost, id: Date.now().toString() };
  posts.push(post);
  return post;
};

export const updatePost = (id: string, updatedData: Partial<Post>): Post | null => {
  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) return null;
  posts[postIndex] = { ...posts[postIndex], ...updatedData };
  return posts[postIndex];
};

export const deletePost = (id: string): boolean => {
  const initialLength = posts.length;
  posts = posts.filter(p => p.id !== id);
  return posts.length < initialLength;
};