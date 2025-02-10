<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name' => 'Politik',
            'slug' => 'politik',
        ]);
        Category::create([
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
        Category::create([
            'name' => 'Teknologi',
            'slug' => 'teknologi',
        ]);
    }
}
