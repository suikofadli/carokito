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
            'is_featured' => $this->is_featured,
            'published_at' => Carbon::parse($this->published_at)->format('d F Y - H:i').' WIB',
            'can' => $request->user() ? [
                'edit' => $request->user()->can('edit', $this->resource),
                'delete' => $request->user()->can('delete', $this->resource),
                'publish' => $request->user()->can('publish', $this->resource),
                'unpublish' => $request->user()->can('unpublish', $this->resource),
                'featuring' => $request->user()->can('featuring', $this->resource),
                'unfeaturing' => $request->user()->can('featuring', $this->resource),
            ] : null,
        ];
    }
}
