<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

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
            'author' => UserResource::make($this->whenLoaded('user')),
            'editor' => UserResource::make($this->whenLoaded('editor')),
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'title' => $this->title,
            'slug' => $this->slug,
            'views' => $this->whenCounted('views'),
            'cover_image_url' => $this->cover_image_url,
            'content' => $this->content,
            'created_at' => $this->created_at->locale('id')->isoFormat('dddd, D MMMM Y - HH.mm [WIB]'),
            'created_at_formatted' => $this->created_at->diffForHumans(),
            'minutes_to_read' => $this->reading_time,
            'is_published' => $this->is_published,
            'published_at' => Carbon::parse($this->published_at)->format('d F Y - H:i').' WIB',
            'can' => [
                'edit' => $request->user() ? $request->user()->can('edit', $this->resource) : false,
                'delete' => $request->user() ? $request->user()->can('delete', $this->resource) : false,
                'publish' => $request->user() ? $request->user()->can('publish', $this->resource) : false,
                'unpublish' => $request->user() ? $request->user()->can('unpublish', $this->resource) : false,
            ],
        ];
    }
}
