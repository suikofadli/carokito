<script setup>
import { ref, watch } from 'vue';
import Editor from './TiptapEditor.vue'

const { initialContent } = defineProps({
    initialContent: String
})

const emit = defineEmits(['updateContent'])

const content = ref(initialContent);

watch(content, () => {
    emit('updateContent', content.value)
})
</script>

<template>
    <editor v-model="content" />
</template>
