<template>
    <BaseLayout>
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-7 h-72 relative rounded overflow-hidden group">
                <Link :href="route('posts.show', {
                    category: featuringPosts[0].category,
                    post: featuringPosts[0]
                })" class="absolute inset-0 z-10">
                </Link>
                <img :src="'/storage/' + featuringPosts[0].cover_image_url" alt=""
                    class="absolute inset-0 h-full object-cover group-hover:scale-105 transition-all duration-500">
                <div class="bg-black/70 absolute bottom-0 inset-x-0 p-2">
                    <h2 class="text-white font-bold text-lg">{{ featuringPosts[0].title }}</h2>
                </div>
            </div>
            <div class="col-span-5">
                <div class="grid grid-cols-1">
                    <div>List</div>
                    <div>List</div>
                    <div>List</div>
                    <div>List</div>
                </div>
            </div>
        </div>

        <SectionTitle>
            Berita Terkini
        </SectionTitle>

        <div class="grid grid-cols-1 divide-y">
            <PostCard v-for="post in newestPosts" :post="post" :key="post.id" />
            <p v-if="newestPosts.length === 0">Belum ada artikel terbaru.</p>
        </div>

        <div class="pt-7 flex justify-center">
            <Link :href="route('posts.newests')"
                class="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-4 inline-flex  bg-white hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-600/75 text-zinc-800 dark:text-white border border-zinc-200 hover:border-zinc-200 border-b-zinc-300/80 dark:border-zinc-600 dark:hover:border-zinc-600 shadow-sm">
            Lihat Indeks Artikel
            </Link>
        </div>

        <template #category_posts>
            <div class="grid grid-cols-2 gap-x-7 gap-y-10">
                <div v-for="category in categories" :key="category.id" class="flex items-center justify-between">
                    <SectionTitle class="!mb-0">{{ category.name }}</SectionTitle>

                    <Link :href="route('posts.category.index', category)"
                        class="text-primary hover:text-primary-400 hover:underline text-sm font-medium flex items-center gap-2">
                    Artikel Lainnya
                    <ArrowRightIcon class="size-4" />
                    </Link>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

defineProps({
    newestPosts: Array,
    featuringPosts: Array,
});

const categories = computed(() => usePage().props.categories)

</script>