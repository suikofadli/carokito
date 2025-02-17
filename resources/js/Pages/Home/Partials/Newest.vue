<template>
    <div>
        <SectionTitle>
            Berita Terkini
        </SectionTitle>

        <div class="grid grid-cols-1 gap-y-5">
            <PostCard v-for="post in posts" :post="post" :key="post.id" class="border-b" />
            <p v-if="posts.length === 0">Belum ada artikel terbaru.</p>
        </div>

        <div v-if="posts.length" class="pt-7 flex md:justify-center">
            <Link :href="route('posts.newests')"
                class="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-4 inline-flex  bg-white hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-600/75 text-zinc-800 dark:text-white border border-zinc-200 hover:border-zinc-200 border-b-zinc-300/80 dark:border-zinc-600 dark:hover:border-zinc-600 shadow-sm">
            Lihat Indeks Artikel
            </Link>
        </div>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    posts: {
        type: Array,
        required: true
    }
})


</script>