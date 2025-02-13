<template>

    <Head>
        <meta property="description" :content="seoDescription" head-key="description" />

        <meta property="og:type" content="website" head-key="og:type" />
        <meta property="og:title" :content="seoTitle" head-key="og:title" />
        <meta property="og:description" :content="seoDescription" head-key="og:description" />
        <meta property="og:url" :content="getAppUrl()" head-key="og:url" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" :content="getAppName()" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" :content="seoTitle" head-key="twitter:title" />
        <meta name="twitter:description" :content="seoDescription" head-key="twitter:description" />
        <meta name="twitter:image" :content="getAppUrl() + '/logo.png'" head-key="twitter:image" />

        <!-- Control how search engines crawl and index your pages. -->
        <meta name="robots" content="index, follow">

        <meta http-equiv="Content-Language" content="id">
    </Head>

    <Header />

    <div v-if="ads.header">
        <div class="max-w-2xl lg:max-w-6xl mx-auto bg-gray-100 p-2 lg:rounded my-5">
            <a :href="ads.header.target_url" target="_blank">
                <img :src="'/storage/' + ads.header.image_path" :alt="ads.header.title"
                    class="w-full max-h-[250px] object-cover rounded">
            </a>
        </div>
    </div>

    <main class="px-5 lg:p-0">
        <div class="max-w-2xl lg:max-w-6xl mx-auto my-5 mb-10">
            <section class="grid lg:grid-cols-12 gap-10">
                <div class="grid lg:col-span-8 w-full">
                    <slot />
                </div>

                <div class="lg:col-span-4 hidden lg:block">
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

    <footer class="py-3 lg:py-4 border-t text-center lg:text-end px-5">
        <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }}. All Right Reserved.</p>
    </footer>
</template>

<script setup>
import PopularPost from '@/Shared/PopularPost.vue';
import { usePage, Head } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import Header from './Header.vue';
import { getAppName, getAppUrl, getSeoTitle } from '@/utils';

const pageProps = usePage().props;

const ads = computed(() => pageProps.advertisement)
const popularPosts = computed(() => pageProps.popularPosts)

const seoTitle = computed(() => getSeoTitle())
const seoDescription = computed(() => "Berita terbaru, akurat dan terpercaya di Wartabengkulu.co. Baca di sini biar kamu gak ketinggalan informasi terbaru seputar Politik, Hukum, Ekonomi, Teknologi, dan Lainnya.")
</script>