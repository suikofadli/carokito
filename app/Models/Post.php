<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $guarded = [];

    protected function readingTime(): Attribute
    {
        return Attribute::make(
            get: fn (mixed $value, array $attributes) => ceil(str_word_count(strip_tags($attributes['content'])) / 200)
        );
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class)->withTrashed();
    }

    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'editor_id')->withTrashed();
    }

    public function views(): HasMany
    {
        return $this->hasMany(PostView::class);
    }

    public function recordView()
    {
        $ip = request()->ip();

        $viewed = $this
            ->views()
            ->where('ip_address', $ip)
            ->where('created_at', '>=', now()->subHours(24))
            ->exists();

        if (! $viewed) {
            $this
                ->views()
                ->create(['ip_address' => $ip]);
        }
    }

    public function scopePopular(Builder $query)
    {
        $query
            ->published()
            ->withCount('views')
            ->orderByDesc('views_count')
            ->where('views_count', '>', 0);
    }

    public function scopePublished(Builder $query)
    {
        $query->where('is_published', true);
    }
}
