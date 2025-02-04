<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostSearchController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $posts = PostResource::collection(
            Post::query()
                ->where('title', 'like', '%'.$request->input('keyword').'%')
                ->paginate(10)
        );

        return inertia('Search', [
            'keyword' => $request->input('keyword'),
            'posts' => $posts,
        ]);
    }
}
