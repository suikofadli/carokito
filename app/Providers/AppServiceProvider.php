<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        JsonResource::withoutWrapping();

        Gate::define('manage-users', function (User $user) {
            return $user->hasRole('admin');
        });

        Gate::define('manage-categories', function (User $user) {
            return $user->hasRole('admin');
        });

        Gate::define('manage-posts', function (User $user) {
            return $user->hasRole('admin') || $user->hasRole('editor');
        });
    }
}
