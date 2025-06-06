<?php

use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewestController;
use App\Http\Controllers\PostByCategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostDetailController;
use App\Http\Controllers\PostFeaturingController;
use App\Http\Controllers\PostPublishController;
use App\Http\Controllers\PostSearchController;
use App\Http\Controllers\PostUnfeaturingController;
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

Route::middleware(['auth', 'can:manage-users'])->group(function () {
    Route::resource('/dashboard/users', UserController::class)
        ->names('dashboard.users');
    Route::post('/dashboard/users/{userId}/restore', UserRestoreController::class)->name('dashboard.users.restore');
});

Route::middleware(['auth', 'can:manage-advertisements'])->group(function () {
    Route::resource('/dashboard/advertisements', AdvertisementController::class)
        ->names('dashboard.advertisements');
});

Route::middleware(['auth'])->group(function () {
    Route::resource('/dashboard/posts', PostController::class)
        ->names('dashboard.posts');

    Route::patch('/dashboard/{post}/publish', PostPublishController::class)->name('dashboard.posts.publish');
    Route::patch('/dashboard/{post}/unpublish', PostUnpublishController::class)->name('dashboard.posts.unpublish');
    Route::patch('/dashboard/{post}/featuring', PostFeaturingController::class)->name('dashboard.posts.featuring');
    Route::patch('/dashboard/{post}/unfeaturing', PostUnfeaturingController::class)->name('dashboard.posts.unfeaturing');
});

Route::middleware(['auth', 'can:manage-categories'])
    ->prefix('/dashboard/categories')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('dashboard.categories.index');
        Route::post('/', [CategoryController::class, 'store'])->name('dashboard.categories.store');
        Route::get('/create', [CategoryController::class, 'create'])->name('dashboard.categories.create');
        Route::get('/{category}/edit', [CategoryController::class, 'edit'])->name('dashboard.categories.edit');
        Route::patch('/{category}', [CategoryController::class, 'update'])->name('dashboard.categories.update');
        Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('dashboard.categories.delete');
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

Route::get('/terkini', NewestController::class)->name('posts.newests');

Route::get('/{category:slug}', PostByCategoryController::class)->name('posts.category.index');
Route::get('/{category:slug}/{post:slug}', PostDetailController::class)->name('posts.show');
