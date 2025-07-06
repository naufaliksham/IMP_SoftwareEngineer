<!DOCTYPE html>
<html lang="en" data-theme="winter">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMP - Posts</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-base-200 min-h-screen" data-theme="coffee">

    <div class="navbar bg-base-100 shadow-lg">
        <div class="container mx-auto">
            <a href="{{ route('posts.index') }}" class="btn btn-ghost text-xl">IMP - Posts Website</a>
        </div>
    </div>

    <main class="container mx-auto p-4 sm:p-6 lg:p-8">
        @yield('content')
    </main>

</body>
</html>