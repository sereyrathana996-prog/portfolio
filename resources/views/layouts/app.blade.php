<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serey Rathana - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0f0f0f; color: #e0e0e0; font-family: 'Segoe UI', sans-serif; }
        :root { --accent: #7c5cbf; --accent2: #a07be0; }

        nav {
            display: flex; justify-content: space-between; align-items: center;
            padding: 1.2rem 2rem; border-bottom: 0.5px solid #2a2a2a;
            background: #0f0f0f; position: sticky; top: 0; z-index: 10;
        }
        .logo { font-size: 18px; font-weight: 500; color: var(--accent2); }
        .nav-links { display: flex; gap: 1.5rem; }
        .nav-links a { font-size: 13px; color: #888; text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--accent2); }

        .hero { padding: 4rem 2rem 3rem; text-align: center; border-bottom: 0.5px solid #1e1e1e; }
        .avatar {
            width: 72px; height: 72px; border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 1.2rem;
            border: 2px solid #7c5cbf;
        }
        .hero h1 { font-size: 28px; font-weight: 500; color: #f0f0f0; margin-bottom: 0.5rem; }
        .hero .title { font-size: 14px; color: var(--accent2); margin-bottom: 1rem; }
        .hero p { font-size: 14px; color: #888; max-width: 480px; margin: 0 auto 1.5rem; line-height: 1.7; }

        .hero-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn {
            display: inline-block; padding: 0.5rem 1.4rem;
            border: 0.5px solid var(--accent); border-radius: 8px;
            color: var(--accent2); font-size: 13px; text-decoration: none; transition: background 0.2s;
        }
        .btn:hover { background: #1e1530; }
        .btn-github {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 0.5rem 1.4rem; border: 0.5px solid #333; border-radius: 8px;
            color: #888; font-size: 13px; text-decoration: none; transition: all 0.2s;
        }
        .btn-github:hover { border-color: var(--accent); color: var(--accent2); background: #1e1530; }

        section { padding: 2.5rem 2rem; border-bottom: 0.5px solid #1e1e1e; max-width: 860px; margin: 0 auto; }
        .section-title {
            font-size: 13px; font-weight: 500; color: var(--accent2);
            text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.5rem;
        }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 8px; }
        .skill-tag {
            background: #1a1a1a; border: 0.5px solid #2e2e2e; border-radius: 8px;
            padding: 0.5rem 0.75rem; font-size: 13px; color: #ccc; text-align: center;
            transition: all 0.2s;
        }
        .skill-tag:hover { border-color: var(--accent); color: var(--accent2); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
        .project-card {
            background: #161616; border: 0.5px solid #2a2a2a; border-radius: 12px;
            padding: 1.2rem; transition: border-color 0.2s;
        }
        .project-card:hover { border-color: var(--accent); }
        .project-icon {
            width: 36px; height: 36px; border-radius: 8px;
            background: #1e1530; display: flex; align-items: center;
            justify-content: center; margin-bottom: 0.75rem; font-size: 16px;
        }
        .project-card h3 { font-size: 14px; font-weight: 500; color: #f0f0f0; margin-bottom: 0.4rem; }
        .project-card p { font-size: 12px; color: #777; line-height: 1.6; }
        .project-badge {
            display: inline-block; margin-top: 0.75rem; padding: 2px 8px;
            background: #1e1530; border-radius: 4px; font-size: 11px; color: var(--accent2);
        }

        .education-grid { display: flex; flex-direction: column; gap: 12px; }
        .education-card {
            background: #161616; border: 0.5px solid #2a2a2a; border-radius: 12px;
            padding: 1.2rem; display: flex; gap: 1rem; align-items: flex-start;
            transition: border-color 0.2s;
        }
        .education-card:hover { border-color: var(--accent); }
        .edu-icon {
            width: 40px; height: 40px; border-radius: 8px;
            background: #1e1530; display: flex; align-items: center;
            justify-content: center; font-size: 18px; flex-shrink: 0;
        }
        .edu-info h3 { font-size: 14px; font-weight: 500; color: #f0f0f0; margin-bottom: 0.3rem; }
        .edu-info p { font-size: 12px; color: #777; }
        .edu-year {
            margin-left: auto; font-size: 11px; color: var(--accent2);
            background: #1e1530; padding: 2px 8px; border-radius: 4px; white-space: nowrap;
        }

        .contact-section { text-align: center; }
        .contact-section p { font-size: 14px; color: #888; margin-bottom: 1rem; }
        .email-link { color: var(--accent2); font-size: 14px; text-decoration: none; }
        .email-link:hover { text-decoration: underline; }

        footer { padding: 1.5rem 2rem; text-align: center; font-size: 12px; color: #444; border-top: 0.5px solid #1e1e1e; }
    </style>
</head>
<body>
    @yield('content')
</body>
</html>
