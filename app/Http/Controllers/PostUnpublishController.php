<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostUnpublishController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Post $post)
    {
        $post->update([
            'editor_id' => null,
            'is_published' => false,
            'published_at' => null,
        ]);
        $post->save();

        return redirect()->route('dashboard.posts.index');
    }
}
