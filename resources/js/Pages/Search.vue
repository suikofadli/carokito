<template>
    <div>
        <SectionTitle>
            Pencarian dengan kata kunci: <em>'{{ keyword }}'</em>
        </SectionTitle>


        <div class="grid grid-cols-1 gap-y-5">
            <PostCard v-for="(post, index) in posts.data" :post="post" :key="post.id" class="border-b" />
        </div>
        <PostPagination v-if="posts.meta.last_page > 1" :meta="posts.meta" />

        <p v-if="posts.meta.total === 0">Tidak dapat menemukan artikel dengan kata kunci diatas.</p>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';

defineOptions({
    layout: BaseLayout
})

defineProps({
    keyword: String,
    posts: {
        type: Object,
        required: true
    }
})
</script>