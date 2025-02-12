<template>
    <div :class="[
        'relative group flex gap-5',
        variant === 'default' ? 'pb-5' : 'pb-3'
    ]">
        <Link :href="route('posts.show', {
            category: post.category.slug,
            post: post.slug
        })" class="absolute inset-0 z-10">
        </Link>

        <figure v-if="post.cover_image_url && variant === 'simplified' && showImage"
            class="h-16 aspect-square self-start">
            <img :src="'/storage/' + post.cover_image_url" :alt="post.title"
                class="h-full w-full object-cover rounded-sm text-xs" loading="lazy" />
        </figure>

        <figure v-if="post.cover_image_url && variant === 'default'" class="h-16 md:h-28 aspect-video self-start">
            <img :src="'/storage/' + post.cover_image_url" :alt="post.title"
                class="h-full w-full object-cover rounded-sm text-xs" loading="lazy" />
        </figure>

        <div>
            <h2 :class="{
                'group-hover:text-primary': true,
                'text-base md:text-xl font-medium': variant === 'default',
                'text-base md:text-lg font-normal': variant === 'simplified',
                '!text-lg': size === 'sm'
            }">
                {{ post.title }}
            </h2>

            <div
                :class="['flex gap-2 mt-2 text-sm md:text-base', { 'text-sm': variant === 'simplified' || size === 'sm' }]">
                <Link :href="route('posts.category.index', post.category)"
                    class="font-medium underline z-20 hover:text-primary">
                {{ post.category.name }}
                </Link>
                &middot;
                <div>
                    {{ post.created_at_formatted }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    variant: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'default'
    },
    showImage: Boolean,
    post: {
        type: Object,
        required: true
    }
})
</script>