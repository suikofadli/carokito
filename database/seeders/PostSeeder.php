<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::get()->pluck('id')->toArray();
        $adminUser = User::with(['roles' => function ($query) {
            $query->where('name', Role::ADMIN);
        }])->first();
        $editorUser = User::with(['roles' => function ($query) {
            $query->where('name', Role::EDITOR);
        }])->first();
        $authorUser = User::with(['roles' => function ($query) {
            $query->where('name', Role::AUTHOR);
        }])->first();

        $imageUrls = [
            'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jkn1h1fd2w8j1thhbqsfm8zm.jpg',
            'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jkn3y0yjs059t803r3mr666q.jpg',
            'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jkmzqd1f1mfcjp5ewycttymw.jpg',
        ];

        Post::factory()
            ->count(25)
            ->sequence(fn (Sequence $sequence) => [
                'category_id' => Arr::random($categories),
                'user_id' => Arr::random([$editorUser->id, $adminUser->id, $authorUser->id]),
                'editor_id' => $editorUser,
                'cover_image_url' => Arr::random($imageUrls),
            ])
            ->create();
    }
}
