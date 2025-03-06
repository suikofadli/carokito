<template>

    <Head>
        <meta property="description" :content="seoDescription" head-key="description" />
        <meta name="keywords" content="berita bengkulu hari ini, berita bengkulu, berita terkini bengkulu, portal berita bengkulu" head-key="keywords" />

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
</template>

<script setup>
import { getAppName, getAppUrl, getSeoTitle } from '@/utils';
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';

const seoTitle = computed(() => getSeoTitle())
const seoDescription = computed(() => "Berita terbaru, akurat dan terpercaya di Wartabengkulu.co. Baca di sini biar kamu gak ketinggalan informasi terbaru seputar Politik, Hukum, Ekonomi, Teknologi, dan Lainnya.")
</script>