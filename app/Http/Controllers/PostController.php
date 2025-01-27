<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    public function index()
    {
        $posts = PostResource::collection(
            Post::query()
                ->latest()
                ->paginate(10),
        );

        return inertia('Dashboard/Post/Index', compact('posts'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:posts,slug'],
            'categoryId' => ['required', 'exists:categories,id'],
            'content' => ['required', 'string'],
            'coverImage' => ['nullable', 'image', 'mimes:png,jpg,jpeg,webp', 'max:2048'],
        ]);

        if ($request->hasFile('coverImage')) {
            $coverImageUrl = $request->file('coverImage')->store('images');
        }

        Post::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'category_id' => $request->categoryId,
            'content' => $request->content,
            'cover_image_url' => $coverImageUrl ?? null,
            'user_id' => Auth::id(),
        ]);

        return redirect()->route('dashboard.posts.index');
    }

    public function create()
    {
        $categories = Category::all();

        return inertia('Dashboard/Post/Create', [
            'categories' => $categories,
        ]);
    }

    public function edit(Post $post)
    {
        $categories = Category::all();

        return inertia('Dashboard/Post/Edit', [
            'post' => $post,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', Rule::unique('posts', 'slug')->ignore($post->id)],
            'categoryId' => ['required', 'exists:categories,id'],
            'content' => ['required', 'string'],
            'coverImage' => ['nullable', 'image', 'mimes:png,jpg,jpeg,webp', 'max:2048'],
        ]);

        if ($request->hasFile('coverImage')) {
            if (isset($post->cover_image_url) && Storage::exists($post->cover_image_url)) {
                Storage::delete($post->cover_image_url);
            }

            $coverImageUrl = $request->file('coverImage')->store('images');
        }

        $post->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'category_id' => $request->categoryId,
            'content' => $request->content,
            'cover_image_url' => $coverImageUrl ?? $post->cover_image_url ?? null,
            'user_id' => Auth::id(),
        ]);

        return redirect()->route('dashboard.posts.index');
    }

    public function delete(Post $post)
    {
        $post->delete();

        return redirect()->route('dashboard.posts.index');
    }
}
