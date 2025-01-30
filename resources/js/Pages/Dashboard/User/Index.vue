<template>

    <Head title="Users" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Users
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <div class="max-w-sm sm:flex-auto">
                                <TextInput placeholder="Search user..." id="name" type="text" class="mt-1 block w-full"
                                    autofocus />
                            </div>
                            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <Link :href="route('dashboard.users.create')">
                                <PrimaryButton>Add New</PrimaryButton>
                                </Link>
                            </div>
                        </div>

                        <div class="mt-8 flow-root">
                            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                    Email
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Roles
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Status
                                                </th>
                                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span class="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="user in users.data" :key="user.id">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {{ user.name }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {{ user.email }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                                                    {{ user.roles.map(role => role.name).join(',') }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <span v-if="user.deleted_at"
                                                        class="text-red-500 font-bold">Deleted</span>
                                                    <span v-else class="text-green-500">Active</span>
                                                </td>
                                                <td
                                                    class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <template v-if="!user.deleted_at">
                                                        <Link :href="route('dashboard.users.edit', user.id)"
                                                            class="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                        <span class="sr-only">{{ user.name }}</span>
                                                        </Link>

                                                        <button href="#" class="text-red-600 hover:text-red-900"
                                                            @click="handleDelete(user)">
                                                            Delete
                                                            <span class="sr-only">{{ user.name }}</span>
                                                        </button>
                                                    </template>
                                                    <template v-else>
                                                        <button href="#" class="text-green-600 hover:text-green-900"
                                                            @click="handleRestore(user)">
                                                            Restore
                                                            <span class="sr-only">{{ user.name }}</span>
                                                        </button>
                                                    </template>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <Pagination v-if="users.meta.last_page > 1" :meta="users.meta" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import Pagination from '@/Components/Core/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

defineProps({
    users: Array,
});

const handleDelete = (user) => {
    const confirm = window.confirm('Are you sure you want to delete this user?');

    if (confirm) {
        router.delete(route('dashboard.users.destroy', user));
    }
}

const handleRestore = (user) => {
    const confirm = window.confirm('Are you sure you want to restore this user?');

    if (confirm) {
        router.post(route('dashboard.users.restore', user));
    }
}
</script>
