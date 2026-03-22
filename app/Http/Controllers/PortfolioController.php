<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $skills = [
            'C++', 'C#', 'HTML', 'CSS', 'JavaScript',
            'PHP', 'Laravel', 'Express.js', 'MySQL',
        ];

        $projects = [
            [
                'icon'        => '🛒',
                'name'        => 'E-Commerce Website',
                'description' => 'Full-featured online store with product listing, cart, and order management.',
                'tech'        => 'Laravel + MySQL',
            ],
            [
                'icon'        => '🌐',
                'name'        => 'Static Website',
                'description' => 'Clean and responsive static website built with modern web technologies.',
                'tech'        => 'HTML + CSS + JS',
            ],
            [
                'icon'        => '⚙️',
                'name'        => 'Dynamic Website',
                'description' => 'Data-driven dynamic website with backend integration and database support.',
                'tech'        => 'PHP + MySQL',
            ],
        ];

        $education = [
            [
                'degree' => 'Bachelor of Information Technology',
                'school' => 'University of Cambodia',
                'year'   => '2023 – Present',
            ],
            [
                'degree' => 'High School Diploma',
                'school' => 'Hun Sen High School',
                'year'   => '2020 – 2023',
            ],
        ];

        $email = 'sereyrathana996@gmail.com';

        return view('portfolio', compact('skills', 'projects', 'education', 'email'));
    }
}
