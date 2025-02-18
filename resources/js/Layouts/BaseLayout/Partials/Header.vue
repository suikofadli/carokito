<template>
    <div class="sticky top-0 bg-white z-40">
        <header class="max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto py-2 lg:py-3 relative">
            <div class="md:hidden">
                <MobileMenu />
            </div>

            <button class="absolute right-4 top-5 md:hidden" @click="openSearch = !openSearch">
                <MagnifyingGlassIcon class="size-5" />
            </button>

            <div class="flex flex-col gap-3 md:flex-row items-center justify-between lg:px-5">
                <div class="flex items-center">
                    <BrandLink />
                </div>

                <!-- Actions -->
                <div class="flex items-center">
                    <div :class="[
                        'gap-2 w-full md:flex md:w-auto',
                        openSearch ? 'block' : 'hidden'
                    ]">
                        <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                            <!-- Search -->
                            <form class="grid w-full mx-2 grid-cols-1 lg:max-w-xs" @submit.prevent="handleSearch">
                                <input type="search" name="search"
                                    class="col-start-1 row-start-1 block w-full rounded-sm bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                    placeholder="Pencarian berita..." v-model="search" />
                                <MagnifyingGlassIcon
                                    class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                                    aria-hidden="true" />
                            </form>
                        </div>
                    </div>

                    <nav class="p-4 hidden md:block">
                        <SocialLinks class="gap-5" :show-label="false" />
                    </nav>
                </div>
            </div>
        </header>

        <nav class="bg-primary pl-5">
            <ul
                class="max-w-2xl lg:max-w-6xl mx-auto flex gap-x-5 py-3 md:flex-wrap overflow-auto md:overflow-visible gap-y-3">
                <template v-for="(category, index) in categories" :key="category.id">
                    <li :class="{
                        'flex shrink-0 grow-0 flex-row': true,
                        'mr-5': index === categories.length - 1
                    }">
                        <Link :href="route('posts.category.index', category)"
                            class="text-white text-sm font-bold capitalize">
                        {{ category.name }}
                        </Link>
                    </li>
                </template>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import BrandLink from '@/Shared/BrandLink.vue';
import SocialLinks from '@/Shared/SocialLinks.vue';

const openSearch = ref(false)

const search = ref('')

const categories = computed(() => usePage().props.categories);

const handleSearch = () => {
    if (search.value) {
        router.get(route('posts.search'), { keyword: search.value })
    }
}
</script>