<?php

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug');
            $table->string('title');
            $table->text('content');
            $table->string('cover_image_url')->nullable();
            $table->foreignIdFor(Category::class)->constrained();
            $table->foreignIdFor(User::class)->constrained();
            $table->boolean('is_published')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->foreignId('editor_id')->nullable()->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
