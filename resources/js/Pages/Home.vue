<template>
    <div>
        <h2 class="text-xl font-bold border-l-4 border-primary  pl-3 mb-3">
            Berita Terkini
        </h2>

        <PostCard v-for="post in newestPosts" :post="post" :key="post.id" />
        <p v-if="newestPosts.length === 0">Belum ada artikel terbaru.</p>

        <div class="pt-7 flex justify-center">
            <Link :href="route('posts.newests')"
                class="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-4 inline-flex  bg-white hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-600/75 text-zinc-800 dark:text-white border border-zinc-200 hover:border-zinc-200 border-b-zinc-300/80 dark:border-zinc-600 dark:hover:border-zinc-600 shadow-sm">
            Indeks
            </Link>
        </div>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import { Link } from '@inertiajs/vue3';

defineOptions({
    layout: BaseLayout
})

defineProps({
    newestPosts: Array,
});
</script>