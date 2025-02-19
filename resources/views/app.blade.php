@php
    $seoDescription =
        'Berita terbaru, akurat dan terpercaya di Wartabengkulu.co. Baca di sini biar kamu gak ketinggalan informasi terbaru seputar Politik, Hukum, Ekonomi, Teknologi, dan Lainnya.';
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-K7LBDCFD');
    </script>
    <!-- End Google Tag Manager -->

    <meta name="google-site-verification"
        content="google-site-verification=YmRBy9LioZ9XCR2dDsvEgAQKpW1v7OirCN3Gj4hRaOs" />

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

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

    <meta property="description" content="{{ $seoDescription }}" head-key="description" />

    <meta property="og:type" content="website" head-key="og:type" />
    <meta property="og:title" content="Berita Bengkulu Hari Ini | wartabengkulu.co" head-key="og:title" />
    <meta property="og:description" content="{{ $seoDescription }}" head-key="og:description" />
    <meta property="og:url" content="{{ config('app.url') }}" head-key="og:url" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="{{ config('app.name') }}" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Berita Bengkulu Hari Ini | wartabengkulu.co" head-key="twitter:title" />
    <meta name="twitter:description" content="{{ $seoDescription }}" head-key="twitter:description" />
    <meta name="twitter:image" content="{{ config('app.url') . '/logo.png' }}" head-key="twitter:image" />

    <!-- Control how search engines crawl and index your pages. -->
    <meta name="robots" content="index, follow">

    <meta http-equiv="Content-Language" content="id">
</head>

<body class="font-sans antialiased">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7LBDCFD" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @inertia
</body>

</html>
