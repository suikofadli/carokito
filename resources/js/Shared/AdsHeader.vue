<template>
    <div v-if="ads.header">
        <div class="max-w-2xl lg:max-w-6xl mx-auto bg-gray-100 p-2 lg:rounded my-5">
            <a :href="ads.header.target_url" target="_blank">
                <img :src="ads.header.image_path" :alt="ads.header.title"
                    class="w-full max-h-[250px] object-cover rounded">
            </a>
        </div>
    </div>
</template>


<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const pageProps = usePage().props;

const ads = computed(() => pageProps.advertisement)
</script>