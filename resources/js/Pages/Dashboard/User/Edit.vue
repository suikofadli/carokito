<template>

    <Head title="Create User" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Edit User
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
                                <InputLabel for="email" value="Email" />

                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email"
                                    autocomplete="email" />

                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div>
                                <InputLabel value="Roles" class="mb-1" />
                                <div class="space-y-2">
                                    <div v-for="role in roles" :key="role.id" class="flex items-center gap-x-1.5">
                                        <input :id="role.id" type="radio" name="roleId" :value="role.id"
                                            v-model="form.roleId" />
                                        <InputLabel class="capitalize" :for="role.id" :value="role.name" />
                                    </div>
                                </div>

                                <InputError class="mt-2" :message="form.errors.roleId" />
                            </div>


                            <div class="mt-4 flex items-center">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Update
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

const { user } = defineProps({
    user: Object,
    roles: Array,
})

const form = useForm({
    name: user.name,
    email: user.email,
    roleId: user.roles[0].id,
});

const submit = () => {
    form.patch(route('dashboard.users.update', user));
};
</script>