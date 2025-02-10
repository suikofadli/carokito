<?php

namespace Database\Seeders;

use App\Enums\Role as EnumsRole;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => EnumsRole::ADMIN]);
        $editorRole = Role::create(['name' => EnumsRole::EDITOR]);
        $authorRole = Role::create(['name' => EnumsRole::AUTHOR]);

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
    }
}
