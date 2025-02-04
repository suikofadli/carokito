<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2">
            <li>
                <Link href="/" class="text-sm font-medium text-primary hover:text-primary-400">
                Beranda
                </Link>
            </li>
            <li v-for="page in pages" :key="page.name">
                <div class="flex items-center">
                    <svg class="size-5 shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20"
                        aria-hidden="true">
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>

                    <Link :href="page.href" class="ml-2 text-sm font-medium text-primary hover:text-primary-400"
                        :aria-current="page.current ? 'page' : undefined">
                    {{ page.name }}
                    </Link>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    pages: Array
})
</script>
