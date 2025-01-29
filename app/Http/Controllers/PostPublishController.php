<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostPublishController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Post $post)
    {
        $post->update([
            'editor_id' => Auth::id(),
            'is_published' => true,
            'published_at' => now(),
        ]);
        $post->save();

        return redirect()->route('dashboard.posts.index');
    }
}
