<?php

namespace App\Http\Middleware;

use App\Enums\AdsPosition;
use App\Http\Resources\PostResource;
use App\Models\Advertisement;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'can' => $request->user() ? [
                    'manageUsers' => $request->user()->can('manage-users'),
                    'manageCategories' => $request->user()->can('manage-categories'),
                    'manageAds' => $request->user()->can('manage-advertisements'),
                ] : [],
            ],
            'advertisement' => [
                'header' => Advertisement::query()
                    ->where('position', AdsPosition::HEADER)
                    ->inRandomOrder()
                    ->first(),
            ],
            'categories' => Category::all(),
            'popularPosts' => PostResource::collection(
                Post::query()
                    ->published()
                    ->latest()
                    ->limit(5)
                    ->with('category')
                    ->get()
            ),
        ];
    }
}
