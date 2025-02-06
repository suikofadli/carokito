<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class NewestController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $posts = PostResource::collection(
            Post::query()
                ->published()
                ->paginate(10)
        );

        return inertia('Newest', compact('posts'));
    }
}
