<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostByCategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostDetailController;
use App\Http\Controllers\PostPublishController;
use App\Http\Controllers\PostSearchController;
use App\Http\Controllers\PostUnpublishController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRestoreController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/dashboard/posts', function () {
    return 'List Post';
});

Route::middleware(['auth', 'can:manage-users'])->group(function () {
    Route::resource('/dashboard/users', UserController::class)
        ->names('dashboard.users');
    Route::post('/dashboard/users/{userId}/restore', UserRestoreController::class)->name('dashboard.users.restore');
});

Route::middleware(['auth'])
    ->prefix('/dashboard/posts')->group(function () {
        Route::get('/', [PostController::class, 'index'])->name('dashboard.posts.index');
        Route::post('/', [PostController::class, 'store'])->name('dashboard.posts.store');
        Route::get('/create', [PostController::class, 'create'])->name('dashboard.posts.create');
        Route::get('/{post}/edit', [PostController::class, 'edit'])
            ->middleware('can:edit,post')
            ->name('dashboard.posts.edit');
        Route::patch('/{post}', [PostController::class, 'update'])->name('dashboard.posts.update');
        Route::delete('/{post}', [PostController::class, 'delete'])->name('dashboard.posts.delete');
        Route::patch('/{post}/publish', PostPublishController::class)->name('dashboard.posts.publish');
        Route::patch('/{post}/unpublish', PostUnpublishController::class)->name('dashboard.posts.unpublish');
    });

Route::middleware(['auth', 'can:manage-categories'])
    ->prefix('/dashboard/categories')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('dashboard.categories.index');
        Route::post('/', [CategoryController::class, 'store'])->name('dashboard.categories.store');
        Route::get('/create', [CategoryController::class, 'create'])->name('dashboard.categories.create');
        Route::get('/{category}/edit', [CategoryController::class, 'edit'])->name('dashboard.categories.edit');
        Route::patch('/{category}', [CategoryController::class, 'update'])->name('dashboard.categories.update');
        Route::delete('/{category}', [CategoryController::class, 'delete'])->name('dashboard.categories.delete');
        Route::patch('/{category}/enable', [CategoryController::class, 'enable'])->name('dashboard.categories.enable');
    });

Route::get('/tentang', function () {
    return 'Tentang';
});
Route::get('/redaksi', function () {
    return 'Redaksi';
});
Route::get('/pedoman', function () {
    return 'Pedoman';
});
Route::get('/privasi-dan-kebijakan', function () {
    return 'Privasi dan Kebijakan';
});
Route::get('/info-iklan', function () {
    return 'Info Iklan';
});

Route::get('/search', PostSearchController::class)->name('posts.search');

Route::get('/{category:slug}', PostByCategoryController::class)->name('posts.category.index');
Route::get('/{category:slug}/{post:slug}', PostDetailController::class)->name('posts.show');
