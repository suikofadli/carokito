<template>

    <Head title="Advertisements" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Advertisements
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <div class="max-w-sm sm:flex-auto">
                                <TextInput placeholder="Search advertisement..." id="name" type="text"
                                    class="mt-1 block w-full" autofocus />
                            </div>
                            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <Link :href="route('dashboard.advertisements.create')">
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
                                                    Title
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Position
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Target URL
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Start Date
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    End Date
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Status
                                                </th>
                                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="advertisement in advertisements.data" :key="advertisement.id">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {{ advertisement.title }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {{ advertisement.position }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {{ advertisement.target_url }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {{ advertisement.start_date }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {{ advertisement.end_date }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <RecordStatus :status="advertisement.is_active" />
                                                </td>
                                                <td
                                                    class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <Link :href="route(
                                                        'dashboard.advertisements.edit',
                                                        advertisement.id,
                                                    )
                                                        " class="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                    <span class="sr-only">,
                                                        {{
                                                            advertisement.title
                                                        }}</span>
                                                    </Link>

                                                    <button class="text-red-600 hover:text-red-900"
                                                        @click="handleDelete(advertisement)">
                                                        Delete
                                                        <span class="sr-only">,
                                                            {{
                                                                advertisement.title
                                                            }}</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <Pagination v-if="advertisements.meta.last_page > 1" :meta="advertisements.meta" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import Pagination from '@/Components/Core/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import RecordStatus from '@/Components/RecordStatus.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

defineProps({
    advertisements: Array,
});

const handleDelete = (advertisement) => {
    const confirm = window.confirm('Are you sure you want to delete this advertisement?');

    if (confirm) {
        router.delete(route('dashboard.advertisements.destroy', advertisement));
    }
}
</script>