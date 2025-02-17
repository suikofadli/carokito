<template>
    <div>
        <button class="absolute left-4 top-5" @click="openNavigation = !openNavigation">
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
                        <SocialLinks />
                    </nav>

                    <Copyright />
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import Copyright from '@/Shared/Copyright.vue';
import SocialLinks from '@/Shared/SocialLinks.vue';
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