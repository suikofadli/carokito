<template>
    <Header />

    <div v-if="ads.header">
        <div class="max-w-6xl mx-auto bg-gray-100 p-2 rounded my-5">
            <a :href="ads.header.target_url" target="_blank">
                <img :src="'/storage/' + ads.header.image_path" :alt="ads.header.title"
                    class="w-full max-h-[250px] object-cover rounded">
            </a>
        </div>
    </div>

    <main>
        <div class="max-w-6xl mx-auto my-5 mb-10">
            <section class="grid grid-cols-12 gap-10">
                <div class="grid grid-cols-1 col-span-8">
                    <slot />
                </div>

                <div class="col-span-4">
                    <div class="sticky top-32">
                        <PopularPost :posts="popularPosts" />

                        <div class="grid grid-cols-2 gap-2">
                            <div v-for="ad in ads.sidebar" :key="ad.id" class="p-2 bg-gray-100 rounded mt-2.5">
                                <a :href="ad.target_url" target="_blank">
                                    <img class="h-[150px] w-full rounded object-cover"
                                        :src="'/storage/' + ad.image_path" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section v-if="$slots.category_posts" class="border-t mt-10 pt-5">
                <slot name="category_posts" />
            </section>
        </div>
    </main>
</template>

<script setup>
import PopularPost from '@/Shared/PopularPost.vue';
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import Header from './Header.vue';

const search = ref('')

const pageProps = usePage().props;

const ads = computed(() => pageProps.advertisement)
const popularPosts = computed(() => pageProps.popularPosts)
</script>