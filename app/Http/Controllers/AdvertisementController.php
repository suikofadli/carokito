<?php

namespace App\Http\Controllers;

use App\Enums\AdsPosition;
use App\Http\Resources\AdvertisementResource;
use App\Models\Advertisement;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class AdvertisementController extends Controller
{
    public function index()
    {
        $advertisements = AdvertisementResource::collection(

            Advertisement::query()
                ->latest()
                ->paginate(10)
        );

        return inertia('Dashboard/Advertisement/Index', compact('advertisements'));
    }

    public function store(Request $request)
    {
        $attrs = $request->validate([
            'title' => 'string|required|min:3',
            'position' => Rule::enum(AdsPosition::class),
            'image' => 'image|required|mimes:jpeg,png,jpg,webp|max:2048',
            'target_url' => 'url:http,https|required',
            'start_date' => 'date|required',
            'end_date' => 'date|required',
        ]);

        $image_path = $request->file('image')->store('advertisements');

        Advertisement::create([
            'title' => $attrs['title'],
            'image_path' => $image_path,
            'target_url' => $attrs['target_url'],
            'position' => $attrs['position'],
            'start_date' => $attrs['start_date'],
            'end_date' => $attrs['end_date'],
        ]);

        return redirect()->route('dashboard.advertisements.index');
    }

    public function create()
    {
        $positions = collect(AdsPosition::cases())->transform(fn ($position) => [
            'value' => $position->value,
            'label' => Str::title($position->value),
        ]);

        return inertia('Dashboard/Advertisement/Create', compact('positions'));
    }

    // public function edit(Category $category)
    // {
    //     return inertia('Dashboard/Category/Edit', [
    //         'category' => $category,
    //     ]);
    // }

    // public function update(Request $request, Category $category)
    // {
    //     $attrs = $request->validate([
    //         'name' => ['required', 'string', 'max:255'],
    //         'slug' => ['required', 'string', 'max:255', Rule::unique('categories', 'slug')->ignore($category->id)],
    //     ]);

    //     $category->update($attrs);

    //     return redirect()->route('dashboard.categories.index');
    // }

    public function delete(Advertisement $advertisement)
    {
        $advertisement->delete();

        return redirect()->route('dashboard.advertisements.index');
    }
}
