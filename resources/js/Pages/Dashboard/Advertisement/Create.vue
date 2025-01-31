<template>

    <Head title="Create Advertisement" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Create Advertisement
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="submit" class="max-w-xl space-y-4">
                            <div>
                                <InputLabel for="title" value="Title" />

                                <TextInput id="title" type="text" class="mt-1 block w-full" v-model="form.title"
                                    autofocus autocomplete="title" />

                                <InputError class="mt-2" :message="form.errors.title" />
                            </div>

                            <div>
                                <InputLabel for="position" value="Position" />

                                <select id="position" type="text"
                                    class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                    v-model="form.position" autofocus autocomplete="position">
                                    <option v-for="position in positions" :key="position.value" :value="position.value">
                                        {{ position.label }}
                                    </option>
                                </select>

                                <InputError class="mt-2" :message="form.errors.position" />
                            </div>

                            <div>
                                <InputLabel for="image" value="Image" />

                                <TextInput id="title" type="file" class="mt-1 block w-full shadow-none"
                                    @input="form.image = $event.target.files[0]" autofocus />

                                <InputError class=" mt-2" :message="form.errors.image" />
                            </div>

                            <div>
                                <InputLabel for="target_url" value="Target URL" />

                                <TextInput id="target_url" type="text" class="mt-1 block w-full"
                                    v-model="form.target_url" autofocus autocomplete="target_url" />

                                <InputError class="mt-2" :message="form.errors.target_url" />
                            </div>

                            <div>
                                <InputLabel for="start_date" value="Start Date" />

                                <TextInput id="start_date" type="datetime-local" class="mt-1 block w-full"
                                    v-model="form.start_date" autofocus autocomplete="start_date" />

                                <InputError class="mt-2" :message="form.errors.start_date" />
                            </div>

                            <div>
                                <InputLabel for="end_date" value="End Date" />

                                <TextInput id="end_date" type="datetime-local" class="mt-1 block w-full"
                                    v-model="form.end_date" autofocus autocomplete="end_date" />

                                <InputError class="mt-2" :message="form.errors.end_date" />
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

<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { watch } from 'vue';

const form = useForm({
    title: '',
    position: '',
    image: null,
    target_url: '',
    start_date: '',
    end_date: '',
});

const submit = () => {
    form.post(route('dashboard.advertisements.store'));
};

defineProps({
    advertisements: Array,
    positions: Array,
});
</script>