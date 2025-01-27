<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'title' => $this->title,
            'slug' => $this->slug,
            'cover_image_url' => $this->cover_image_url,
            'content' => $this->content,
            'created_at' => $this->created_at->locale('id')->isoFormat('dddd, D MMMM Y - HH.mm [WIB]'),
            'created_at_formatted' => $this->created_at->diffForHumans(),
            'minutes_to_read' => $this->reading_time,
        ];
    }
}
