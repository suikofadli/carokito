<template>
    <div>

        <Head>
            <title>{{ post.title }}</title>
            <meta name="description" :content="post.title" />
        </Head>

        <Breadcrumb :pages="breadcrumbPages" class="mb-4" />

        <article class="prose-sm md:prose-lg">
            <header>
                <h1 class="capitalize md:text-4xl mb-2.5">{{ post.title }}</h1>
                <div class="flex flex-col gap-1">
                    <div class="text-gray-400 text-sm">
                        Reporter: {{ post.author.name }}
                        <span v-if="post.editor">
                            &dash;
                            Editor: {{ post.editor.name }}
                        </span>
                    </div>
                    <div class="my-0 text-sm text-gray-500">
                        {{ post.created_at }}
                        &middot;
                        waktu baca {{ post.minutes_to_read }} menit
                    </div>
                </div>
            </header>

            <main class="mt-6">
                <figure v-if="!!post.cover_image_url">
                    <img :src="'/storage/' + post.cover_image_url" :alt="post.title">
                </figure>

                <div v-html="post.content"></div>
            </main>
        </article>
    </div>
</template>

<script setup>
import Breadcrumb from '@/Components/Core/Breadcrumb.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';

defineOptions({
    layout: BaseLayout
})

const { category } = defineProps({
    post: Object,
    category: Object
})

const breadcrumbPages = computed(() => [
    { name: category.name, href: `/${category.slug}`, current: false }
])
</script>
