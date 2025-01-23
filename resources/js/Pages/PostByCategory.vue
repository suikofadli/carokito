<script setup>
import BaseLayout from '@/Layouts/BaseLayout.vue';

defineOptions({
    layout: BaseLayout
})

defineProps({
    category: Object,
    posts: Array
})
</script>


<template>
    <div v-for="post in posts.data" :key="post.id">
        <Link :href="route('posts.show', { category, post })">
        <h2>{{ post.title }}</h2>
        </Link>
    </div>
</template>
