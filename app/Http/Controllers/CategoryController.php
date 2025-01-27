<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryResource::collection(
            Category::query()
                ->latest()
                ->paginate(10)
        );

        return inertia('Dashboard/Category/Index', compact('categories'));
    }

    public function store(Request $request)
    {
        $attrs = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:categories,slug'],
        ]);

        Category::create($attrs);

        return redirect()->route('dashboard.categories.index');
    }

    public function create()
    {
        return inertia('Dashboard/Category/Create');
    }

    public function edit(Category $category)
    {
        return inertia('Dashboard/Category/Edit', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $attrs = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', Rule::unique('categories', 'slug')->ignore($category->id)],
        ]);

        $category->update($attrs);

        return redirect()->route('dashboard.categories.index');
    }

    public function delete(Category $category)
    {
        $category->record_status = false;
        $category->save();

        return redirect()->route('dashboard.categories.index');
    }

    public function enable(Category $category)
    {
        $category->record_status = true;
        $category->save();

        return redirect()->route('dashboard.categories.index');
    }
}
