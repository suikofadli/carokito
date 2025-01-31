<?php

namespace App\Enums;

enum AdsPosition: string
{
    case HEADER = 'header';
    case FOOTER = 'footer';
    case SIDEBAR = 'sidebar';

    public function label(): string
    {
        return match ($this) {
            AdsPosition::HEADER => 'Header',
            AdsPosition::FOOTER => 'Footer',
            AdsPosition::SIDEBAR => 'Sidebar',
        };
    }
}
