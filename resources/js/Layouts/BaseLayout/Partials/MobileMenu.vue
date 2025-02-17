<template>
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
                            <a class="flex items-center gap-3" href="https://www.instagram.com/wartabengkulu.id/"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-instagram">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center gap-3" href="https://www.youtube.com/@wartabengkulu4357"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-instagram">
                                    <path
                                        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <path d="m10 15 5-3-5-3z" />
                                </svg>
                                Youtube
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
                                Tiktok
                            </a>
                        </li>
                    </ul>
                </nav>

                <Copyright />
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import Copyright from '@/Shared/Copyright.vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/20/solid';
import { Link, usePage } from '@inertiajs/vue3';
import { computed, onMounted, ref, watch } from 'vue';

const openNavigation = ref(false)

const categories = computed(() => usePage().props.categories);

onMounted(() => {
    watch(openNavigation, () => {
        if (openNavigation.value) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    })
})
</script>