<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sedang Dalam Perbaikan</title>

    @vite(['resources/css/app.css'])
</head>

<body class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="mx-auto max-w-2xl px-4 py-8 text-center">
        <div class="rounded-lg bg-white p-8 shadow-lg">
            <img src="{{ asset('/logo.png') }}" class="mx-auto size-24" />

            <h1 class="mb-4 text-4xl font-bold text-gray-800">Kami akan segera kembali!</h1>

            <p class="mb-8 text-gray-600">
                Mohon maaf atas ketidaknyamanannya. Saat ini kami sedang melakukan pemeliharaan sistem.
                Kami akan segera kembali dalam waktu singkat!
            </p>

            <div class="flex items-center justify-center space-x-4">
                <div class="flex animate-pulse space-x-2">
                    <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                    <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                    <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
