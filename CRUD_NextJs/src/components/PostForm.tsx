'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { Post } from '@/types';
import type { State } from '@/lib/actions';

interface PostFormProps {
  action: (prevState: State, formData: FormData) => Promise<State>;
  initialData?: Post | null;
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? 'Menyimpan...' : text}
    </button>
  );
}

const PostForm = ({ action, initialData }: PostFormProps) => {
  const [state, dispatch] = useFormState(action, { message: null, errors: {} });

  return (
    <form action={dispatch} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="title" className="label"><span className="label-text">Judul</span></label>
        <input id="title" name="title" defaultValue={initialData?.title} className="input input-bordered w-full" />
        {state.errors?.title && <p className="text-red-500 text-sm mt-1">{state.errors.title[0]}</p>}
      </div>
      <div>
        <label htmlFor="content" className="label"><span className="label-text">Konten</span></label>
        <textarea id="content" name="content" defaultValue={initialData?.content} className="textarea textarea-bordered w-full" rows={5}></textarea>
        {state.errors?.content && <p className="text-red-500 text-sm mt-1">{state.errors.content[0]}</p>}
      </div>
      {state.message && <p className="text-red-500 text-sm">{state.message}</p>}
      <div className="text-right">
        <SubmitButton text={initialData ? 'Perbarui' : 'Simpan'} />
      </div>
    </form>
  );
};

export default PostForm;