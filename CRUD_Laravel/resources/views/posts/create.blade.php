@extends('layouts.app')

@section('content')
<div class="max-w-xl mx-auto">
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title text-2xl mb-4">Create New Post</h2>

            <form action="{{ route('posts.store') }}" method="POST">
                @csrf

                <div class="form-control w-full mb-4">
                    <label class="label">
                        <span class="label-text">Post Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Enter title here" 
                           class="input input-bordered w-full @error('title') input-error @enderror" 
                           value="{{ old('title') }}" />
                    @error('title')
                        <label class="label">
                            <span class="label-text-alt text-error">{{ $message }}</span>
                        </label>
                    @enderror
                </div>

                <div class="form-control w-full mb-4">
                    <label class="label">
                        <span class="label-text">Content</span>
                    </label>
                    <textarea name="content" class="textarea textarea-bordered h-24 @error('content') textarea-error @enderror" 
                              placeholder="Enter your content here">{{ old('content') }}</textarea>
                    @error('content')
                        <label class="label">
                            <span class="label-text-alt text-error">{{ $message }}</span>
                        </label>
                    @enderror
                </div>

                <div class="card-actions justify-end mt-4">
                    <a href="{{ route('posts.index') }}" class="btn btn-ghost">Cancel</a>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    </div>
</div>
@endsection