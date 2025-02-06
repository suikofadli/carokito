<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Category::factory(5)->create();

        $adminRole = Role::create(['name' => 'admin']);
        $editorRole = Role::create(['name' => 'editor']);
        $authorRole = Role::create(['name' => 'author']);

        $adminUser = User::create([
            'name' => 'Admin',
            'email' => 'admin@wartabengkulu.com',
            'password' => 'password123',
        ]);
        $editorUser = User::create([
            'name' => 'Editor',
            'email' => 'editor@wartabengkulu.com',
            'password' => 'password123',
        ]);
        $authorUser = User::create([
            'name' => 'Author',
            'email' => 'author@wartabengkulu.com',
            'password' => 'password123',
        ]);

        $adminUser->roles()->attach($adminRole);
        $editorUser->roles()->attach($editorRole);
        $authorUser->roles()->attach($authorRole);

        Category::create([
            'name' => 'Politik',
            'slug' => 'politik',
        ]);
        $category1 = Category::create([
            'name' => 'Hukum',
            'slug' => 'hukum',
        ]);
        Category::create([
            'name' => 'Bisnis',
            'slug' => 'bisnis',
        ]);
        Category::create([
            'name' => 'Investasi',
            'slug' => 'investasi',
        ]);
        $category2 = Category::create([
            'name' => 'Teknologi',
            'slug' => 'teknologi',
        ]);

        Post::factory()
            ->count(25)
            ->create([
                'category_id' => $category1,
                'user_id' => $authorUser,
                'editor_id' => $editorUser,
            ]);

        Post::factory()
            ->count(25)
            ->create([
                'category_id' => $category2,
                'user_id' => $authorUser,
                'editor_id' => $editorUser,
            ]);
    }
}
