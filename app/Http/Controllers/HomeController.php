<?php

namespace App\Http\Controllers;

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
        $newestPosts = Post::query()
            ->latest()
            ->limit(10)
            ->get();

        // Get popular posts in the 30 days left
        $popularPosts = Post::query()
            ->orderBy('view_count', 'desc')
            ->limit(5)
            ->get();

        $categories = Category::all();

        return inertia('Home', [
            'categories' => $categories,
            'newestPosts' => $newestPosts,
            'popularPosts' => $popularPosts,
        ]);
    }
}
