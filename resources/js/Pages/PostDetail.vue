<template>
    <div>
        Post Detail

        <div>
            {{ post }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    post: Object
})
</script>