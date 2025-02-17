<script setup>
import Copyright from '@/Shared/Copyright.vue';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/20/solid';
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const openNavigation = ref(false)
const openSearch = ref(false)

const search = ref('')

const categories = computed(() => usePage().props.categories);

const handleSearch = () => {
    if (search.value) {
        router.get(route('posts.search'), { keyword: search.value })
    }
}
</script>

<template>
    <!-- Avoid mismatch hydration SSR of Teleport -->
    <div id="sidenav"></div>

    <div class="sticky top-0 bg-white z-40">
        <header class="max-w-2xl lg:max-w-6xl mx-auto py-2 lg:py-3 relative">
            <button class="absolute left-4 top-5 lg:hidden" @click="openNavigation = !openNavigation">
                <Bars3Icon class="size-5" />
            </button>

            <Teleport to="#sidenav">
                <div v-show="openNavigation" class="fixed inset-0 bg-black/50 z-50">
                    <div class="fixed h-full w-full max-w-[275px] left-0 bg-white overflow-auto">
                        <div class="flex items-center justify-between border-b p-4 sticky top-0 left-0 bg-white">
                            <div class="font-bold">Menu</div>
                            <button class="p-1" @click="openNavigation = false">
                                <XMarkIcon class="size-6" />
                            </button>
                        </div>

                        <nav class="p-4 border-b">
                            <ul class="grid gap-y-5">
                                <li v-for="category in categories" :key="category.id">
                                    <Link :href="route('posts.category.index', category)" class="capitalize py-2 pr-2"
                                        @click="openNavigation = false">
                                    {{ category.name }}
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <nav class="p-4 border-b">
                            <ul class="grid gap-y-5">
                                <li>
                                    <a class="flex items-center gap-3"
                                        href="https://www.instagram.com/wartabengkulu.id/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="size-5 text-gray-500 lucide lucide-instagram">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-3" href="https://www.facebook.com/share/15iuzXfuaY/"
                                        target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="size-5 text-gray-500 lucide lucide-facebook">
                                            <path
                                                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-3" href="https://www.youtube.com/@wartabengkulu4357"
                                        target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="size-5 text-gray-500 lucide lucide-instagram">
                                            <path
                                                d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                            <path d="m10 15 5-3-5-3z" />
                                        </svg>
                                        Youtube
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-3"
                                        href="https://www.tiktok.com/@wartabengkulu?_t=ZS-8tnd7nbZ4Aq&_r=1"
                                        target="_blank">
                                        <svg fill="currentColor" class="size-5 text-gray-500" width="20px" height="20px"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
                                            <path
                                                d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                                        </svg>
                                        Tiktok
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <Copyright />
                    </div>
                </div>
            </Teleport>


            <button class="absolute right-4 top-5 lg:hidden" @click="openSearch = !openSearch">
                <MagnifyingGlassIcon class="size-5" />
            </button>

            <div class="flex flex-col gap-3 md:flex-row items-center justify-between">
                <div class="flex items-center">
                    <!-- Brand -->
                    <Link href="/" class="flex items-center">
                    <img src="/logo.png" alt="" class="w-10">
                    <span class="font-bold text-red-700 text-xl">
                        Warta Bengkulu
                    </span>
                    </Link>
                </div>

                <!-- Actions -->
                <div class="flex items-center">
                    <div :class="[
                        'gap-2 w-full lg:flex md:w-auto',
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

                    <nav class="p-4 hidden lg:block">
                        <ul class="flex gap-5">
                            <li>
                                <a class="flex items-center gap-3" href="https://www.instagram.com/wartabengkulu.id/"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-instagram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                    <span class="sr-only">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-3" href="https://www.facebook.com/share/15iuzXfuaY/"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <span class="sr-only">Facebook</span>
                            </li>
                            <li>
                                <a class="flex items-center gap-3" href="https://www.youtube.com/@wartabengkulu4357"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-youtube">
                                        <path
                                            d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                        <path d="m10 15 5-3-5-3z" />
                                    </svg>
                                    <span class="sr-only">Youtube</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-3"
                                    href="https://www.tiktok.com/@wartabengkulu?_t=ZS-8tnd7nbZ4Aq&_r=1" target="_blank">
                                    <svg fill="currentColor" class="size-5 text-gray-500" width="20px" height="20px"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
                                        <path
                                            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                                    </svg>
                                    <span class="sr-only">Tiktok</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <nav class="bg-primary pl-5 md:px-0">
            <ul class="max-w-2xl lg:max-w-6xl mx-auto flex gap-x-5 py-3 overflow-auto">
                <li v-for="category in categories" :key="category.id" class="flex shrink-0 grow-0">
                    <Link :href="route('posts.category.index', category)"
                        class="text-white text-sm font-bold capitalize">
                    {{ category.name }}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
</template>