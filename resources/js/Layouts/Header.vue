<template>
    <div class="sticky top-0 bg-white z-40">
        <header class="max-w-6xl mx-auto py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <!-- Brand -->
                    <a href="/" class="flex items-center">
                        <img src="/logo.png" alt="" class="w-10">
                        <span class="font-bold text-red-700 text-xl">
                            Warta Bengkulu
                        </span>
                    </a>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                    <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <!-- Search -->
                        <form class="grid w-full max-w-lg grid-cols-1 lg:max-w-xs" @submit.prevent="handleSearch">
                            <input type="search" name="search"
                                class="col-start-1 row-start-1 block w-full rounded-sm bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                placeholder="Pencarian berita..." v-model="search" />
                            <MagnifyingGlassIcon
                                class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                                aria-hidden="true" />
                        </form>
                    </div>
                </div>
            </div>
        </header>
        <nav class="bg-primary">
            <ul class="max-w-6xl mx-auto flex gap-x-5 py-3 overflow-auto">
                <li v-for="category in categories" :key="category.id">
                    <Link :href="route('posts.category.index', category)" class="text-white font-bold capitalize">
                    {{ category.name }}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const search = ref('')

const categories = computed(() => usePage().props.categories);

const handleSearch = () => {
    if (search.value) {
        router.get(route('posts.search'), { keyword: search.value })
    }
}
</script>