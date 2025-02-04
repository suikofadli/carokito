<template>
    <Header />

    <div v-if="ads.header">
        <div class="max-w-6xl mx-auto py-5">
            <a :href="ads.header.target_url" target="_blank">
                <img :src="'/storage/' + ads.header.image_path" :alt="ads.header.title"
                    class="w-full max-h-[250px] object-cover rounded">
            </a>
        </div>
    </div>

    <main>
        <div class="max-w-6xl mx-auto my-5 mb-10">
            <div class="grid grid-cols-12 gap-10">
                <div class="grid grid-cols-1 col-span-7 divide-y">
                    <slot />
                </div>

                <div class="col-span-5">
                    <div class="bg-gray-50 px-2 rounded border sticky top-32">
                        <h2
                            class="text-xl font-bold border-l-4 -mx-2 border-primary pl-5 border-b border-b-gray-200 py-2">
                            Artikel Populer
                        </h2>
                        <div class="py-1">
                            <template v-for="(post, index) in popularPosts" :key="post.id">
                                <div class="flex items-center gap-x-3">
                                    <div
                                        class="bg-gray-100 size-10 text-xl font-medium rounded-full flex items-center justify-center shrink-0">
                                        {{ index + 1 }}
                                    </div>
                                    <PostCard :post="post" variant="simplified" />
                                </div>
                            </template>
                        </div>
                    </div>
                    <p v-if="popularPosts.length === 0">Belum ada artikel populer.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Button from '@/Components/Core/Button.vue';
import PostCard from '@/Components/PostCard.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import Header from './Header.vue';

const search = ref('')

const pageProps = usePage().props;

const ads = computed(() => pageProps.advertisement)
const popularPosts = computed(() => pageProps.popularPosts)
</script>