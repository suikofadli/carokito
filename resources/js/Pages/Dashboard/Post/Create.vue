<template>

    <Head title="Create Category" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Write a Post
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="submit" class="space-y-4 max-w-2xl" enctype="multipart/form-data">
                            <div>
                                <InputLabel for="title" value="Title" />

                                <TextInput id="title" type="text" class="mt-1 block w-full" v-model="form.title"
                                    autofocus autocomplete="title" />

                                <InputError class="mt-2" :message="form.errors.title" />
                            </div>

                            <div>
                                <InputLabel for="slug" value="Slug" />

                                <TextInput id="slug" type="text" class="mt-1 block w-full" v-model="form.slug" autofocus
                                    readonly autocomplete="slug" />

                                <InputError class="mt-2" :message="form.errors.slug" />
                            </div>

                            <div>
                                <Combobox as="div" v-model="form.category" @update:modelValue="query = ''">
                                    <ComboboxLabel class="block text-sm/6 font-medium text-gray-900">
                                        Category
                                    </ComboboxLabel>
                                    <div class="relative">
                                        <ComboboxInput
                                            class="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            @change="query = $event.target.value" @blur="query = ''"
                                            :display-value="(category) => category?.name" />
                                        <ComboboxButton
                                            class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                            <ChevronUpDownIcon class="size-5 text-gray-400" aria-hidden="true" />
                                        </ComboboxButton>

                                        <ComboboxOptions v-if="filteredCategories.length > 0"
                                            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            <ComboboxOption v-for="category in filteredCategories" :key="category.id"
                                                :value="category" as="template" v-slot="{ active, selected }">
                                                <li
                                                    :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white outline-none' : 'text-gray-900']">
                                                    <span :class="['block truncate', selected && 'font-semibold']">
                                                        {{ category.name }}
                                                    </span>

                                                    <span v-if="selected"
                                                        :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                                                        <CheckIcon class="size-5" aria-hidden="true" />
                                                    </span>
                                                </li>
                                            </ComboboxOption>
                                        </ComboboxOptions>
                                    </div>
                                </Combobox>

                                <InputError class="mt-2" :message="form.errors.slug" />
                            </div>


                            <div>
                                <InputLabel for="content" value="Content" />

                                <article class="prose">
                                    <Editor @update-content="form.content = $event" />
                                </article>

                                <InputError class="mt-2" :message="form.errors.content" />
                            </div>

                            <div>
                                <InputLabel for="coverImage" value="Image Cover" />

                                <TextInput id="title" type="file" class="mt-1 block w-full"
                                    @input="form.coverImage = $event.target.files[0]" autofocus />

                                <InputError class=" mt-2" :message="form.errors.coverImage" />
                            </div>

                            <div class="mt-4 flex items-center">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                    type="submit">
                                    Save
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router, useForm } from '@inertiajs/vue3';

import { computed, ref, watch } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/vue'
import Editor from '@/Components/Editor.vue';
import { generateSlug } from '@/utils';

const { categories } = defineProps({
    categories: Array,
});


const query = ref('')
const filteredCategories = computed(() =>
    query.value === ''
        ? categories
        : categories.filter((category) => {
            return category.name.toLowerCase().includes(query.value.toLowerCase())
        }),
)

const form = useForm({
    title: '',
    slug: '',
    category: null,
    content: null,
    coverImage: null
});

const submit = () => {
    const { title, slug, category, content, coverImage } = form
    router.post(route('dashboard.posts.store'), {
        title,
        slug,
        categoryId: category.id,
        content,
        coverImage
    });
};

watch(form, () => {
    form.slug = generateSlug(form.title)
});

</script>
