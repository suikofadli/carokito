<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
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
                ->published()
                ->unfeaturing()
                ->limit(50)
                ->get()
        );

        $featuringPosts = PostResource::collection(
            Post::query()
                ->published()
                ->featuring()
                ->get()
        );

        $categories = Category::query()
            ->with('posts')
            ->get();

        $postsByCategory = [];

        $categories->each(function ($category) use (&$postsByCategory) {
            $postsByCategory[$category->name] = [
                'category' => CategoryResource::make($category),
                'posts' => PostResource::collection(
                    $category
                        ->posts()
                        ->published()
                        ->limit(5)
                        ->get()
                ),
            ];
        });

        return inertia('Home/Index', compact('newestPosts', 'featuringPosts', 'postsByCategory'));
    }
}
