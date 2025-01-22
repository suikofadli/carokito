<script setup>
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue';

defineProps({
    href: {
        type: String,
        required: false
    }
})

const styles = computed(() => "inline-flex items-center rounded-sm bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")
</script>

<template>
    <Link v-if="href" :href="href" :class="styles">
    <slot />
    </Link>

    <button v-else :class="styles">
        <slot />
    </button>
</template>
