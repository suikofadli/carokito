<template>
    <BaseLayout>
        <div class="grid grid-cols-2 gap-7 mt-5">
            <div class="grid grid-cols-1 divide-y">
                <article v-for="post in newestPosts" :key="post.id"
                    class="relative group flex gap-3 justify-between py-3">
                    <Link :href="route('posts.show', {
                        category: post.category.slug,
                        post: post.slug
                    })" class="absolute inset-0 z-10">
                    </Link>

                    <div>
                        <div class="font-bold text-xl group-hover:text-indigo-600">{{ post.title }}</div>

                        <div class="flex gap-2 mt-2">
                            <Link :href="route('posts.category.index', post.category)"
                                class="font-medium underline z-20 hover:text-indigo-600">
                            {{ post.category.name }}
                            </Link>
                            &middot;
                            <div>
                                {{ post.created_at_formatted }}
                            </div>
                        </div>
                    </div>

                    <figure class="h-28 aspect-video self-start">
                        <img :src="'/storage/' + post.cover_image_url" :alt="post.title"
                            class="h-full w-full object-cover rounded-sm" />
                    </figure>
                </article>
            </div>
        </div>
    </BaseLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import BaseLayout from '@/Layouts/BaseLayout.vue';

defineProps({
    categories: Array,
    newestPosts: Array,
    popularPosts: Array
});
</script>