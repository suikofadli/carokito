<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate sitemap';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/search'));

        Post::query()
            ->published()
            ->get()
            ->each(function ($post) use ($sitemap) {
                $sitemap->add(Url::create("/{$post->category->slug}/{$post->slug}"));
            });

        Category::query()
            ->latest()
            ->get()
            ->each(function ($category) use ($sitemap) {
                $sitemap->add(Url::create("/{$category->slug}"));
            });

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
