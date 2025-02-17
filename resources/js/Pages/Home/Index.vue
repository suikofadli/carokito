<template>
    <BaseLayout>

        <Featured v-if="featuringPosts.length > 0" :posts="featuringPosts" />

        <Newest :posts="newestPosts" />

        <template #category_posts>
            <Categorized :postsByCategory="postsByCategory" />
        </template>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/Layouts/BaseLayout/Index.vue';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Categorized from './Partials/Categorized.vue';
import Featured from './Partials/Featured.vue';
import Newest from './Partials/Newest.vue';

defineProps({
    newestPosts: Array,
    featuringPosts: Array,
    postsByCategory: Array,
});

const categories = computed(() => usePage().props.categories)

</script>