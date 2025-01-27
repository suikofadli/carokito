<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { watch } from 'vue';

const form = useForm({
    name: '',
    slug: '',
});

const submit = () => {
    form.post(route('dashboard.categories.store'));
};

watch(form, () => {
    form.slug = form.name.toLowerCase().replace(/ /g, '-');
});

defineProps({
    categories: Array,
});
</script>

<template>

    <Head title="Create Category" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Create Category
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="submit" class="max-w-xl space-y-4">
                            <div>
                                <InputLabel for="name" value="Name" />

                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autofocus
                                    autocomplete="name" />

                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div>
                                <InputLabel for="slug" value="Slug" />

                                <TextInput id="slug" type="text" class="mt-1 block w-full" v-model="form.slug" readonly
                                    autocomplete="slug" />

                                <InputError class="mt-2" :message="form.errors.slug" />
                            </div>

                            <div class="mt-4 flex items-center">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
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
