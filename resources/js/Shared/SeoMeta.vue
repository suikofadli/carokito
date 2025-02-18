<template>

    <Head :title="post.title">
        <meta property="description" :content="seoDescription" head-key="description" />

        <script type="application/ld+json" v-text="jsonLd"></script>

        <meta property="og:title" :content="seoTitle" head-key="og:title" />
        <meta property="og:description" :content="seoDescription" head-key="og:description" />
        <meta property="og:image" :content="seoImageUrl" head-key="og:image" />
        <meta property="og:url" :content="seoUrl" head-key="og:url" />
        <meta property="og:type" content="article" head-key="og:type" />

        <meta name="twitter:title" :content="seoTitle" head-key="twitter:title" />
        <meta name="twitter:description" :content="seoDescription" head-key="twitter:description" />
        <meta name="twitter:image" :content="seoImageUrl" head-key="twitter:image" />
        <!-- <meta name="twitter:site" :content="@">
        <meta name="twitter:creator" content="@AuthorTwitterHandle"> -->

        <!-- The canonical tag prevents duplicate content issues by specifying the preferred version of a page. -->
        <link rel="canonical" :href="seoUrl">

        <meta name="googlebot" content="index, follow">
        <meta name="googlebot-news" content="index, follow">
        <meta name="yahoobot" content="index, follow">
        <meta property="article:published_time" :content="seoPublishedAt">
    </Head>


</template>

<script setup>
import { getAppUrl, getSeoTitle } from '@/utils';
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const { post } = defineProps({
    post: {
        type: Object,
        required: true
    }
})

const appUrl = computed(() => getAppUrl())
const seoImageUrl = computed(() => appUrl.value + post.cover_image_url)
const seoUrl = computed(() => appUrl.value + usePage().url)
const seoTitle = computed(() => getSeoTitle(post.title))
const seoDescription = computed(() => post.seo.description || post.title)
const seoPublishedAt = computed(() => post.seo.published_at)
const seoDateModifiedAt = computed(() => post.seo.updated_at)

const jsonLd = computed(() => JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "image": [seoImageUrl.value],
    "datePublished": seoPublishedAt.value,
    "dateModified": seoDateModifiedAt.value,
    "author": { "@type": "Person", "name": post.author.name }
}))
</script>