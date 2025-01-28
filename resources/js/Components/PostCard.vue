<template>
    <div class="relative group flex gap-3 justify-between py-3">
        <Link :href="route('posts.show', {
            category: post.category.slug,
            post: post.slug
        })" class="absolute inset-0 z-10">
        </Link>

        <div>
            <div :class="{
                'group-hover:text-indigo-600': true,
                'text-xl font-bold': variant === 'default',
                'text-lg font-normal': variant === 'simplified'
            }">{{ post.title }}</div>

            <div class="flex gap-2 mt-2" v-if="variant === 'default'">
                <Link :href="route('posts.category.index', post.category)"
                    class="font-medium underline z-20 hover:text-indigo-600">
                {{ post.category.name }}
                </Link>
                &middot;
                <div>
                    {{ post.created_at_formatted }}
                </div>
            </div>
        </div>

        <figure v-if="post.cover_image_url && variant === 'default'" class="h-28 aspect-video self-start">
            <img :src="'/storage/' + post.cover_image_url" :alt="post.title"
                class="h-full w-full object-cover rounded-sm" />
        </figure>
    </div>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'default'
    },
    post: {
        type: Object,
        required: true
    }
})
</script>