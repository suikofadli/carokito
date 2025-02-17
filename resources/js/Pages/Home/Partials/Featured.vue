<template>
    <div class="grid md:grid-cols-12 gap-5 mb-7 relative">
        <SectionTitle class="absolute top-0 left-0 z-20 bg-zinc-800 !text-base text-white p-2">
            Headline
        </SectionTitle>

        <div
            :class="['col-span-12 md:col-span-5 h-96 relative rounded overflow-hidden group', { '!col-span-12': posts.length === 1 }]">
            <Link :href="route('posts.show', {
                category: firstPost.category,
                post: firstPost
            })" class="absolute inset-0 z-10">
            </Link>
            <img :src="firstPost.cover_image_url" alt=""
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
            <div class="bg-black/70 absolute bottom-0 inset-x-0 px-2 py-3">
                <h2 class="text-white font-bold text-lg">{{ firstPost.title }}</h2>

                <div class="flex gap-2 mt-2 text-sm text-white">
                    <Link :href="route('posts.category.index', firstPost.category)"
                        class="font-medium underline z-20 hover:text-primary">
                    {{ firstPost.category.name }}
                    </Link>
                    &middot;
                    <div>
                        {{ firstPost.created_at_formatted }}
                    </div>
                </div>
            </div>
        </div>

        <div v-if="posts.length > 1" class="col-span-12 md:col-span-7 overflow-y-auto h-96">
            <div class="grid grid-cols-1 gap-y-3">
                <PostCard class="border-b" v-for="post in otherPosts" :key="post.id" show-image variant="simplified"
                    :post="post" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const { posts } = defineProps({
    posts: {
        type: Array,
        required: true
    }
})

const firstPost = computed(() => posts[0])
const otherPosts = computed(() => posts.length > 1 ? posts.slice(1) : [])
</script>