<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

defineProps({
    posts: Array,
});

const handleDelete = (post) => {
    const confirm = window.confirm('Are you sure you want to delete this post?');

    if (confirm) {
        router.delete(route('dashboard.posts.delete', post));
    }
}

</script>

<template>

    <Head title="Posts" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Posts
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <div class="max-w-sm sm:flex-auto">
                                <TextInput placeholder="Search post..." id="name" type="text" class="mt-1 block w-full"
                                    autofocus />
                            </div>
                            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <Link :href="route('dashboard.posts.create')">
                                <PrimaryButton>Write a Post</PrimaryButton>
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
                                                    Slug
                                                </th>

                                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span class="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="post in posts.data" :key="post.id">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {{ post.title }}
                                                </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {{ post.slug }}
                                                </td>
                                                <td
                                                    class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <Link :href="route('dashboard.posts.edit', post.id)"
                                                        class="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                    <span class="sr-only">{{ post.name }}</span>
                                                    </Link>

                                                    <button href="#" class="text-red-600 hover:text-red-900"
                                                        @click="handleDelete(post)">
                                                        Delete
                                                        <span class="sr-only">{{ post.name }}</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <nav class="flex items-center justify-between border-gray-200 bg-white mt-5 border-t pt-5"
                            aria-label="Pagination">
                            <div class="hidden sm:block">
                                <p class="text-sm text-gray-700">
                                    Showing
                                    <span class="font-medium">{{ posts.from }}</span>
                                    to
                                    <span class="font-medium">{{ posts.to }}</span>
                                    of
                                    <span class="font-medium">{{ posts.total }}</span>
                                    results
                                </p>
                            </div>
                            <div class="flex flex-1 justify-between sm:justify-end">
                                <a v-show="posts.prev_page_url" :href="posts.prev_page_url"
                                    class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
                                    Previous
                                </a>
                                <a v-show="posts.next_page_url" :href="posts.next_page_url"
                                    class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
                                    Next
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
