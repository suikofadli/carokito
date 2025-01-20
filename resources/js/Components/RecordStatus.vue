<script setup>
defineProps({
    status: Number,
});
</script>

<template>
    <div v-if="status == 1" class="text-green-400">Active</div>
    <div v-else class="text-red-400">Inactive</div>
</template>
