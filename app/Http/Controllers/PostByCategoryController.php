<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class PostByCategoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Category $category)
    {
        return inertia('PostByCategory', [
            'category' => $category,
            'posts' => $category->posts()->latest()->paginate(10),
        ]);
    }
}
