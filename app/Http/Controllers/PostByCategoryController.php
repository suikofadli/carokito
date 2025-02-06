<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Category;
use Illuminate\Http\Request;

class PostByCategoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Category $category)
    {
        $posts = PostResource::collection(
            $category
                ->posts()
                ->published()
                ->paginate(10)
        );

        return inertia('PostByCategory', [
            'category' => $category,
            'posts' => $posts,
        ]);
    }
}
