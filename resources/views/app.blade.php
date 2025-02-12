<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700,800,900" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">

    <!-- OG Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Berita Terkini, Berita Hari Ini Indonesia dan Dunia | tempo.co" />
    <meta property="og:description"
        content="Berita terbaru, akurat dan terpercaya di Tempo.co. Baca di sini biar kamu gak ketinggalan informasi terbaru seputar Politik, Hukum, Ekonomi, Teknologi, dan Lainnya." />
    <meta property="og:url" content="https://www.tempo.co/">
    <meta property="og:locale" content="id">
    <meta property="og:site_name" content="tempo.co">


    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
