<template>
    <div class="grid grid-cols-12 gap-10">
        <div class="grid grid-cols-1 col-span-7 divide-y">
            <h1 class="text-xl font-bold pb-2">
                Berita Terkini
            </h1>
            <PostCard v-for="post in newestPosts" :post="post" :key="post.id" />
            <p v-if="newestPosts.length === 0">Belum ada artikel terbaru.</p>
        </div>

        <div class="col-span-5">
            <h2 class="text-xl font-bold border-l-4 border-indigo-600 pl-3">
                Artikel Populer
            </h2>
            <template v-for="(post, index) in popularPosts" :key="post.id">
                <div class="flex items-center gap-x-3 mt-3">
                    <div
                        class="bg-gray-100 size-10 text-xl font-medium rounded-full flex items-center justify-center shrink-0">
                        {{ index + 1 }}
                    </div>
                    <PostCard :post="post" variant="simplified" />
                </div>
            </template>
            <p v-if="popularPosts.length === 0">Belum ada artikel populer.</p>
        </div>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';

defineOptions({
    layout: BaseLayout
})

defineProps({
    categories: Array,
    newestPosts: Array,
    popularPosts: Array
});
</script>