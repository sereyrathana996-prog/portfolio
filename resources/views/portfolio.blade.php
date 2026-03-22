@extends('layouts.app')

@section('content')

<nav>
    <div class="logo">SR.</div>
    <div class="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
    </div>
</nav>

{{-- Hero / About --}}
<div class="hero" id="about">
    <div class="avatar">
        <img src="{{ asset('images/profile.jpg') }}" 
         alt="Serey Rathana"
         style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
    </div>
    <h1>Cyber Ax</h1>
    <div class="title">Full-Stack Developer</div>
    <p>Passionate developer with experience in web development, building dynamic and static websites, APIs, and e-commerce solutions.</p>
    <div class="hero-buttons">
        <a href="mailto:sereyrathana996@gmail.com" class="btn">Get in touch</a>
        <a href="#" class="btn-github" target="_blank">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
        </a>
    </div>
</div>

{{-- Skills --}}
<section id="skills">
    <div class="section-title">Skills</div>
    <div class="skills-grid">
        @foreach($skills as $skill)
            <div class="skill-tag">{{ $skill }}</div>
        @endforeach
    </div>
</section>

{{-- Projects --}}
<section id="projects">
    <div class="section-title">Projects</div>
    <div class="projects-grid">
        @foreach($projects as $project)
            <div class="project-card">
                <div class="project-icon">{{ $project['icon'] }}</div>
                <h3>{{ $project['name'] }}</h3>
                <p>{{ $project['description'] }}</p>
                <span class="project-badge">{{ $project['tech'] }}</span>
            </div>
        @endforeach
    </div>
</section>

{{-- Education --}}
<section id="education">
    <div class="section-title">Education</div>
    <div class="education-grid">
        @foreach($education as $edu)
            <div class="education-card">
                <div class="edu-icon">🎓</div>
                <div class="edu-info">
                    <h3>{{ $edu['degree'] }}</h3>
                    <p>{{ $edu['school'] }}</p>
                </div>
                <span class="edu-year">{{ $edu['year'] }}</span>
            </div>
        @endforeach
    </div>
</section>

{{-- Contact --}}
<section id="contact" class="contact-section">
    <div class="section-title">Contact</div>
    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
    <a href="mailto:{{ $email }}" class="email-link">{{ $email }}</a>
</section>

<footer>
    &copy; {{ date('Y') }} Serey Rathana. All rights reserved.
</footer>

@endsection
