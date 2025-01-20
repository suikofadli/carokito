<template>
    <nav>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <Link :href="route('posts.category.index', category.slug)">
                {{ category.name }}
                </Link>
            </li>
        </ul>
    </nav>

    <div>
        <div>Post Terbaru</div>
        <pre>
            {{ newestPosts }}
        </pre>

        <div>Post Populer</div>
        <pre>
            {{ popularPosts }}
        </pre>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    categories: Array,
    newestPosts: Array,
    popularPosts: Array
});
</script>