<template>
    <div class="grid grid-cols-2 gap-2">
        <div v-for="ad in ads.sidebar" :key="ad.id" class="p-2 bg-gray-100 rounded mt-2.5">
            <a :href="ad.target_url" target="_blank">
                <img class="h-[150px] w-full rounded object-cover" :src="ad.image_path" />
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