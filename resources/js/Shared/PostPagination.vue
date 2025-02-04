<template>
    <div>
        <div class="font-medium mb-2.5 mt-7">Halaman</div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <template v-for="(link, index) in meta.links" :key="index">
                <a v-if="link.label === 'pagination.previous'" :href="link.url"
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span class="sr-only">Previous</span>
                    <ChevronLeftIcon class="size-5" aria-hidden="true" />
                </a>

                <a v-else-if="link.label === 'pagination.next'" :href="link.url"
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span class="sr-only">Next</span>
                    <ChevronRightIcon class="size-5" aria-hidden="true" />
                </a>

                <!-- 
                        Current: "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", 
                         Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                <a v-else :href="link.url" aria-current="page" :class="{
                    'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0': true,
                    'bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary': link.active
                }">
                    {{ link.label }}
                </a>
            </template>
        </nav>
    </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';

defineProps({
    meta: {
        type: Object,
        required: true
    }
})
</script>