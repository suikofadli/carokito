<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $newestPosts = PostResource::collection(
            Post::query()
                ->with('category')
                ->latest()
                ->limit(10)
                ->get()
        );

        // Get popular posts in the 30 days left
        $popularPosts = PostResource::collection(
            Post::query()
                ->popular()
                ->limit(5)
                ->with('category')
                ->get()
        );

        $categories = Category::all();

        return inertia('Home', [
            'newestPosts' => $newestPosts,
            'categories' => $categories,
            'popularPosts' => $popularPosts,
        ]);
    }
}
