<template>
    <div>
        <div v-for="post in posts.data" :key="post.id">
            <Link :href="route('posts.show', { category, post })">
            <h2>{{ post.title }}</h2>
            </Link>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    category: Object,
    posts: Array
})
</script>