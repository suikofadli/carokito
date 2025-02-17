<template>

    <DefaultSeoMeta />

    <Header />

    <AdsHeader />

    <main class="px-5 lg:p-0">
        <div class="max-w-2xl lg:max-w-6xl mx-auto my-5 mb-10">
            <section class="grid lg:grid-cols-12 gap-10">
                <div class="grid lg:col-span-8 w-full">
                    <slot />
                </div>

                <div class="lg:col-span-4 hidden lg:block">
                    <div class="sticky top-32">
                        <PopularPost :posts="popularPosts" />

                        <AdsSidebar />
                    </div>

                </div>
            </section>

            <section class="block lg:hidden mt-7">
                <PopularPost :posts="popularPosts" />

                <div class="grid grid-cols-2 gap-5">
                    <div v-for="ad in ads.sidebar" :key="ad.id" class="p-2 bg-gray-100 mt-2.5">
                        <a :href="ad.target_url" target="_blank">
                            <img class="h-[150px] w-full rounded object-cover" :src="'/storage/' + ad.image_path" />
                        </a>
                    </div>
                </div>
            </section>

            <section v-if="$slots.category_posts" class="border-t mt-10 pt-5">
                <slot name="category_posts" />
            </section>
        </div>
    </main>

    <Copyright class="py-3 lg:py-4 border-t text-center lg:text-end px-5" />
</template>

<script setup>
import PopularPost from '@/Shared/PopularPost.vue';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import DefaultSeoMeta from './DefaultSeoMeta.vue';
import Header from './Header.vue';
import AdsHeader from '@/Shared/AdsHeader.vue';
import AdsSidebar from '@/Shared/AdsSidebar.vue';
import Copyright from '@/Shared/Copyright.vue';

const pageProps = usePage().props;

const ads = computed(() => pageProps.advertisement)
const popularPosts = computed(() => pageProps.popularPosts)
</script>