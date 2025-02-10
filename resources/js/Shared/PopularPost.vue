<template>
    <div class="bg-gray-50 px-2 rounded border">
        <SectionTitle class="-mx-2 pl-4 border-b border-b-gray-200 py-2 !text-lg !mb-0">
            Artikel Populer
        </SectionTitle>
        <div class="py-2">
            <template v-for="(post, index) in posts" :key="post.id">
                <div class="flex items-center gap-x-3">
                    <div
                        class="bg-gray-100 size-10 text-xl font-medium rounded-full flex items-center justify-center shrink-0">
                        {{ index + 1 }}
                    </div>
                    <PostCard :post="post" variant="simplified" />
                </div>
            </template>

            <p v-if="posts.length === 0">Belum ada artikel populer.</p>
        </div>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';

defineProps({
    posts: Array
})
</script>