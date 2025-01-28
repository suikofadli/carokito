<template>
    <header class="max-w-5xl mx-auto py-5">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <!-- Brand -->
                <a href="/">
                    <img src="https://rbtv.disway.id/assets/logo.png" alt="" class="w-56">
                </a>
            </div>

            <!-- Actions -->
            <div class="flex gap-2">
                <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                    <!-- Search -->
                    <form class="grid w-full max-w-lg grid-cols-1 lg:max-w-xs" @submit.prevent="handleSearch">
                        <input type="search" name="search"
                            class="col-start-1 row-start-1 block w-full rounded-sm bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            placeholder="Pencarian berita..." v-model="search" />
                        <MagnifyingGlassIcon
                            class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                            aria-hidden="true" />
                    </form>
                </div>
                <Button href="/login">
                    {{ $page.props.auth.user ? 'Dashboard' : 'Masuk' }}
                </Button>
            </div>
        </div>
    </header>
    <nav class="bg-indigo-600">
        <ul class="max-w-5xl mx-auto flex gap-x-5 py-3 overflow-auto">
            <li v-for="category in $page.props.categories" :key="category.id">
                <Link :href="route('posts.category.index', category)" class="text-white font-bold capitalize">
                {{ category.name }}
                </Link>
            </li>
        </ul>
    </nav>

    <main>
        <div class="max-w-5xl mx-auto mt-5">
            <slot />
        </div>
    </main>
</template>

<script setup>
import Button from '@/Components/Core/Button.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

const search = ref('')

const handleSearch = () => {
    if (search.value) {
        router.get(route('posts.search'), { keyword: search.value })
    }
}
</script>