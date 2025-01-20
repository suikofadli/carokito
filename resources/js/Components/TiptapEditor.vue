<template>
    <div v-if="editor" class="container border rounded-lg p-3">
        <div class="control-group border-b -mx-3 p-3">
            <div class="button-group">
                <button type="button" @click="editor.chain().focus().toggleBold().run()"
                    :disabled="!editor.can().chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }">
                    Bold
                </button>
                <button type="button" @click="editor.chain().focus().toggleItalic().run()"
                    :disabled="!editor.can().chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }">
                    Italic
                </button>
                <button type="button" @click="editor.chain().focus().toggleStrike().run()"
                    :disabled="!editor.can().chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }">
                    Strike
                </button>
                <button type="button" @click="editor.chain().focus().setParagraph().run()"
                    :class="{ 'is-active': editor.isActive('paragraph') }">
                    Paragraph
                </button>
                <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                    H1
                </button>
                <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                    H2
                </button>
                <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                    H3
                </button>
                <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'is-active': editor.isActive('bulletList') }">
                    Bullet list
                </button>
                <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
                    :class="{ 'is-active': editor.isActive('orderedList') }">
                    Ordered list
                </button>
                <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="{ 'is-active': editor.isActive('blockquote') }">
                    Blockquote
                </button>
                <button type="button" @click="editor.chain().focus().setHorizontalRule().run()">
                    Horizontal rule
                </button>
                <button type="button" @click="editor.chain().focus().undo().run()"
                    :disabled="!editor.can().chain().focus().undo().run()">
                    Undo
                </button>
                <button type="button" @click="editor.chain().focus().redo().run()"
                    :disabled="!editor.can().chain().focus().redo().run()">
                    Redo
                </button>
            </div>
        </div>

        <editor-content :editor="editor" />
    </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
    components: {
        EditorContent,
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
            ],
            content: this.modelValue,
            onUpdate: () => {
                // HTML
                this.$emit('update:modelValue', this.editor.getHTML())

                // JSON
                // this.$emit('update:modelValue', this.editor.getJSON())
            },
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>