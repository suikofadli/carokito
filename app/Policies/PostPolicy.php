<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

class PostPolicy
{
    public function edit(User $user, Post $post)
    {
        return ! $post->is_published && (Gate::allows('manage-posts') || $post->user_id === $user->id);
    }

    public function delete(User $user, Post $post)
    {
        return ! $post->is_published && (Gate::allows('manage-posts') || $post->user_id === $user->id);
    }

    public function publish(User $user, Post $post)
    {
        return Gate::allows('manage-posts') && ! $post->is_published;
    }

    public function unpublish(User $user, Post $post)
    {
        return $user->hasRole('admin') && $post->is_published;
    }

    public function featuring(User $user, Post $post)
    {
        return Gate::allows('manage-posts');
    }

    public function unfeaturing(User $user, Post $post)
    {
        return Gate::allows('manage-posts');
    }
}
