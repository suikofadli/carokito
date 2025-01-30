<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostDetailController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Category $category, Post $post)
    {
        $post->recordView();

        $post = PostResource::make($post->load(['user', 'editor']));

        return inertia('PostDetail', [
            'post' => $post,
            'category' => $category,
        ]);
    }
}
