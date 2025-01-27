<template>
    <div v-if="editor" class="container border rounded-lg p-3">
        <div class="border-b pb-2 flex flex-wrap gap-x-5 gap-y-2">
            <button type="button" @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                <bold-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                <italic-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                <strikethrough-icon class="size-4" />
            </button>

            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                <h1-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                <h2-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                <h3-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }">
                <list-bullet-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }">
                <numbered-list-icon class="size-4" />
            </button>
            <button type="button" @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
                <link-icon class="size-4" />
            </button>
            <button @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
                <link-slash-icon class="size-4" />
            </button>
            <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-message-square-quote size-4">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 12a2 2 0 0 0 2-2V8H8" />
                    <path d="M14 12a2 2 0 0 0 2-2V8h-2" />
                </svg>
            </button>
            <button type="button" @click="editor.chain().focus().setHorizontalRule().run()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-between-horizontal-start size-4">
                    <rect width="13" height="7" x="8" y="3" rx="1" />
                    <path d="m2 9 3 3-3 3" />
                    <rect width="13" height="7" x="8" y="14" rx="1" />
                </svg>
            </button>
        </div>

        <div class="bg-gray-50 rounded min-h-16 px-2 -mt-1">
            <editor-content :editor="editor" />
        </div>
    </div>
</template>

<script setup>
import { BoldIcon, ItalicIcon, LinkIcon, LinkSlashIcon, StrikethroughIcon, H1Icon, H2Icon, H3Icon, ListBulletIcon, NumberedListIcon } from '@heroicons/vue/20/solid';
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import Link from '@tiptap/extension-link'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: '<p>Tulis Detail Artikel Disini...</p>',
    },
})

const emit = defineEmits(['update:modelValue'])

const editor = ref(null)

const setLink = () => {
    const previousUrl = editor.value.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
        return
    }

    // empty
    if (url === '') {
        editor
            .value
            .chain()
            .focus()
            .extendMarkRange('link')
            .unsetLink()
            .run()

        return
    }

    // update link
    editor
        .value
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
}

watch(() => props.modelValue, (value) => {
    // HTML
    const isSame = editor.value.getHTML() === value

    // JSON
    // const isSame = JSON.stringify(editor.value.getJSON()) === JSON.stringify(value)

    if (isSame) {
        return
    }

    editor.value.commands.setContent(value, false)
})

onMounted(() => {
    editor.value = new Editor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                defaultProtocol: 'https',
            }),
        ],
        content: props.modelValue,
        onUpdate: () => {
            // HTML
            emit('update:modelValue', editor.value.getHTML())

            // JSON
            // emit('update:modelValue', editor.value.getJSON())
        },
    })
})

onBeforeUnmount(() => {
    editor.value.destroy()
})
</script>