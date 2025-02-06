<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
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

        return inertia('Home', compact('newestPosts', 'featuringPosts'));
    }
}
