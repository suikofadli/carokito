<template>
    <div class="grid lg:grid-cols-3 gap-10">
        <template v-for="(postByCategory, index) in filteredPostsByCategory" :key="postByCategory.category.id">
            <div class="grid gap-4">
                <div class="h-auto max-w-full">
                    <div class="flex items-center justify-between mb-5">
                        <SectionTitle class="!mb-0">{{ postByCategory.category.name }}</SectionTitle>

                        <Link :href="route('posts.category.index', postByCategory.category)"
                            class="hover:text-primary-400 hover:underline text-sm font-medium flex items-center gap-2">
                        Artikel Lainnya
                        <ArrowRightIcon class="size-4" />
                        </Link>
                    </div>
                    <div class="grid grid-cols-1 gap-y-5">
                        <template v-for="(post, index) in postByCategory.posts" :key="post.id">
                            <PostCard :post="post" variant="simplified" size="sm"
                                :show-image="postByCategory.posts.length > 1 && index === 0"
                                :class="{ 'border-b': index !== postByCategory.posts.length - 1 }" />
                        </template>
                    </div>
                </div>
            </div>

            <hr v-if="index < filteredPostsByCategory.length - 1" class="-mx-5 lg:hidden" />
        </template>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const { postsByCategory } = defineProps({
    postsByCategory: Array,
})

const filteredPostsByCategory = computed(() => {
    return postsByCategory.filter((postByCategory) => {
        return postByCategory.posts.length > 0;
    })
});
</script>