<template>
    <div class="flex gap-x-16 gap-y-10">
        <template v-for="postByCategory in postsByCategory" :key="postByCategory.category.id">
            <div v-if="postByCategory.posts.length > 0" class="w-1/2">
                <div class="flex items-center justify-between mb-5">
                    <SectionTitle class="!mb-0">{{ postByCategory.category.name }}</SectionTitle>

                    <Link :href="route('posts.category.index', postByCategory.category)"
                        class="hover:text-primary-400 hover:underline text-sm font-medium flex items-center gap-2">
                    Artikel Lainnya
                    <ArrowRightIcon class="size-4" />
                    </Link>
                </div>

                <div class="grid grid-cols-1 gap-y-5">
                    <PostCard v-for="post in postByCategory.posts" :post="post" variant="simplified" :key="post.id"
                        class="border-b" />
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import { Link } from '@inertiajs/vue3';

defineProps({
    postsByCategory: Array,
})
</script>