@extends('layouts.app')

@section('content')
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-4xl font-bold">List Posts</h1>
        <a href="{{ route('posts.create') }}" class="btn btn-primary">Create New Post</a>
    </div>

    <div class="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table class="table table-zebra">
            <thead class="text-base">
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Content</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                @php $number = 1; @endphp
                @forelse ($posts as $post)
                    <tr>
                        <th>{{ $number }}</th>
                        <td>{{ $post->title }}</td>
                        <td>{{ Str::limit($post->content, 50) }}</td>
                        <td class="flex justify-center gap-2">
                            <a href="{{ route('posts.edit', $post) }}" class="btn btn-sm btn-accent">Edit</a>
                            
                            <form action="{{ route('posts.destroy', $post) }}" method="POST" onsubmit="return confirm('Apakah Anda yakin ingin menghapus post ini?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-error">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @php $number++; @endphp
                @empty
                    <tr>
                        <td colspan="4" class="text-center p-8">Belum ada postingan.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection