<?php

namespace App\Models;

use App\Enums\AdsPosition;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Advertisement extends Model
{
    protected $fillable = [
        'title',
        'image_path',
        'target_url',
        'position',
        'start_date',
        'end_date',
        'is_active',
    ];

    protected $casts = [
        'position' => AdsPosition::class,
    ];

    public function adClicks(): HasMany
    {
        return $this->hasMany(AdClick::class);
    }
}
