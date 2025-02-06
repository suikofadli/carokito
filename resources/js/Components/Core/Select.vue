<template>
    <select v-model="model"
        class="border border-gray-300 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        <slot />
    </select>
</template>

<script setup>
const model = defineModel({
    type: String,
    required: true,
})
</script>