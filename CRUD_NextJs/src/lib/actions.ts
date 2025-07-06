'use server';

import { z } from 'zod';
import { createPost, deletePost, updatePost } from './data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const PostSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter."),
  content: z.string().min(10, "Konten minimal 10 karakter."),
});

export type State = {
  errors?: { title?: string[]; content?: string[]; };
  message?: string | null;
};

export async function handleCreatePost(prevState: State, formData: FormData) {
  const validatedFields = PostSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors, message: 'Isian tidak valid.' };
  }
  try {
    createPost(validatedFields.data);
  } catch (e) {
    return { message: 'Gagal membuat post.' };
  }
  revalidatePath('/');
  redirect('/');
}

export async function handleUpdatePost(id: string, prevState: State, formData: FormData) {
  const validatedFields = PostSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors, message: 'Isian tidak valid.' };
  }
  try {
    updatePost(id, validatedFields.data);
  } catch (e) {
    return { message: 'Gagal memperbarui post.' };
  }
  revalidatePath('/');
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}

export async function handleDeletePost(id: string) {
  try {
    deletePost(id);
    revalidatePath('/');
    return { message: 'Post berhasil dihapus.' };
  } catch (e) {
    return { message: 'Gagal menghapus post.' };
  }
}