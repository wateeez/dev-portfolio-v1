<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Alex Developer - Full-Stack Developer & UI/UX Designer creating digital experiences that matter">
    <meta name="keywords" content="web developer, full-stack developer, UI/UX designer, JavaScript, PHP, Laravel, React">
    <meta name="author" content="Alex Developer">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Alex Developer - Full-Stack Developer">
    <meta property="og:description" content="Full-Stack Developer & UI/UX Designer creating digital experiences that matter">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://alexdeveloper.com">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Alex Developer - Full-Stack Developer">
    <meta name="twitter:description" content="Full-Stack Developer & UI/UX Designer creating digital experiences that matter">
    <meta name="twitter:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face">
    
    <title>Alex Developer - Full-Stack Developer & UI/UX Designer</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- CSS Libraries -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <style>
        :root {
            --primary-color: #3b82f6;
            --primary-dark: #2563eb;
            --secondary-color: #6366f1;
            --accent-color: #06b6d4;
            --text-dark: #1f2937;
            --text-light: #6b7280;
            --bg-light: #f9fafb;
            --bg-white: #ffffff;
            --border-color: #e5e7eb;
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
        }
        
        [data-theme="dark"] {
            --text-dark: #f9fafb;
            --text-light: #d1d5db;
            --bg-light: #111827;
            --bg-white: #1f2937;
            --border-color: #374151;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background-color: var(--bg-white);
            transition: all 0.3s ease;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            z-index: 1000;
            transition: all 0.3s ease;
        }
        
        [data-theme="dark"] .navbar {
            background: rgba(31, 41, 55, 0.9);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-color);
            text-decoration: none;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-menu a {
            color: var(--text-dark);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .nav-menu a:hover {
            color: var(--primary-color);
        }
        
        .nav-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .theme-toggle {
            background: none;
            border: 1px solid var(--border-color);
            color: var(--text-dark);
            padding: 0.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
            background-color: var(--bg-light);
        }
        
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--text-dark);
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            opacity: 0;
            animation: fadeInUp 1s ease 0.5s forwards;
        }
        
        .hero .tagline {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            opacity: 0;
            animation: fadeInUp 1s ease 0.7s forwards;
        }
        
        .hero .description {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            opacity: 0;
            animation: fadeInUp 1s ease 0.9s forwards;
        }
        
        .hero-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 1.1s forwards;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }
        
        .btn-outline {
            background-color: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .btn-outline:hover {
            background-color: white;
            color: var(--text-dark);
        }
        
        /* Sections */
        .section {
            padding: 5rem 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        
        .section-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: var(--text-light);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* About Section */
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            margin-top: 3rem;
        }
        
        .about-content h3 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }
        
        .about-content p {
            margin-bottom: 1rem;
            color: var(--text-light);
            line-height: 1.7;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .skill-item {
            background: var(--bg-light);
            padding: 1.5rem;
            border-radius: 0.5rem;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .skill-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }
        
        .skill-item i {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .skill-item h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }
        
        /* Portfolio Section */
        .portfolio {
            background-color: var(--bg-light);
        }
        
        .portfolio-filters {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
        }
        
        .filter-btn {
            padding: 0.5rem 1.5rem;
            background: white;
            border: 1px solid var(--border-color);
            border-radius: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-dark);
        }
        
        .filter-btn.active,
        .filter-btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
        
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }
        
        .portfolio-item {
            background: white;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(50px);
        }
        
        .portfolio-item.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .portfolio-item:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-xl);
        }
        
        .portfolio-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .portfolio-content {
            padding: 1.5rem;
        }
        
        .portfolio-content h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }
        
        .portfolio-content p {
            color: var(--text-light);
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
        
        .portfolio-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .tag {
            background: var(--bg-light);
            color: var(--text-light);
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.8rem;
        }
        
        .portfolio-links {
            display: flex;
            gap: 0.5rem;
        }
        
        .portfolio-links a {
            flex: 1;
            text-align: center;
            padding: 0.5rem;
            text-decoration: none;
            border-radius: 0.25rem;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .portfolio-links .btn-primary {
            background: var(--primary-color);
            color: white;
        }
        
        .portfolio-links .btn-outline {
            border: 1px solid var(--border-color);
            color: var(--text-dark);
        }
        
        /* Services Section */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .service-item {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            text-align: center;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }
        
        .service-item:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-xl);
        }
        
        .service-item i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .service-item h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        
        /* Contact Section */
        .contact {
            background: var(--bg-light);
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            margin-top: 3rem;
        }
        
        .contact-info {
            space-y: 2rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .contact-item i {
            font-size: 1.5rem;
            color: var(--primary-color);
            width: 2rem;
        }
        
        .contact-form {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-md);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--text-dark);
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: 0.25rem;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: white;
            color: var(--text-dark);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }
        
        /* Footer */
        .footer {
            background: var(--text-dark);
            color: white;
            padding: 3rem 0 1rem;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--primary-color);
        }
        
        .footer-section a {
            color: #d1d5db;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
            color: white;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-links a {
            width: 40px;
            height: 40px;
            background: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #374151;
            color: #9ca3af;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .fade-in-up.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Loading Spinner */
        .spinner {
            border: 2px solid #f3f3f3;
            border-top: 2px solid var(--primary-color);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
            margin-right: 0.5rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--bg-white);
                border-top: 1px solid var(--border-color);
                flex-direction: column;
                padding: 1rem;
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .mobile-menu-toggle {
                display: block;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .about-grid,
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .portfolio-grid {
                grid-template-columns: 1fr;
            }
            
            .hero-actions {
                flex-direction: column;
                align-items: center;
            }
            
            .btn {
                width: 100%;
                max-width: 300px;
                justify-content: center;
            }
        }
        
        @media (max-width: 480px) {
            .container {
                padding: 0 0.5rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero .tagline {
                font-size: 1.2rem;
            }
            
            .section {
                padding: 3rem 0;
            }
            
            .section-title {
                font-size: 2rem;
            }
        }
        
        /* Dark theme adjustments */
        [data-theme="dark"] .portfolio-item,
        [data-theme="dark"] .service-item,
        [data-theme="dark"] .contact-form {
            background: var(--bg-white);
            border: 1px solid var(--border-color);
        }
        
        [data-theme="dark"] .form-group input,
        [data-theme="dark"] .form-group textarea {
            background: var(--bg-light);
            border-color: var(--border-color);
            color: var(--text-dark);
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-container">
                <a href="#" class="logo">Alex Developer</a>
                
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="#home" class="nav-link">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                    <li><a href="#services" class="nav-link">Services</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                
                <div class="nav-actions">
                    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
                        <i class="fas fa-moon" id="theme-icon"></i>
                    </button>
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle mobile menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Hi, I'm <span style="color: #06b6d4;">Alex</span></h1>
            <p class="tagline">Full-Stack Developer & UI/UX Designer</p>
            <p class="description">Creating digital experiences that matter and drive business growth</p>
            <div class="hero-actions">
                <a href="#portfolio" class="btn btn-primary">
                    <i class="fas fa-briefcase"></i>
                    View My Work
                </a>
                <a href="#contact" class="btn btn-outline">
                    <i class="fas fa-envelope"></i>
                    Contact Me
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
        <div class="container">
            <h2 class="section-title fade-in-up">About Me</h2>
            <p class="section-subtitle fade-in-up">Passionate about creating digital solutions that make a difference</p>
            
            <div class="about-grid">
                <div class="about-content fade-in-up">
                    <h3>My Story</h3>
                    <p>With over 5 years of experience in full-stack development, I specialize in creating scalable web applications and intuitive user experiences. My journey started with a computer science degree and has evolved through working with startups and enterprises.</p>
                    <p>I believe in clean code, user-centered design, and continuous learning. When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers.</p>
                    <p>My mission is to bridge the gap between complex technical solutions and elegant user experiences, creating products that users love and businesses depend on.</p>
                </div>
                
                <div class="skills-grid fade-in-up">
                    <div class="skill-item">
                        <i class="fab fa-js-square"></i>
                        <h4>JavaScript</h4>
                        <p>ES6+, TypeScript</p>
                    </div>
                    <div class="skill-item">
                        <i class="fab fa-react"></i>
                        <h4>Frontend</h4>
                        <p>React, Vue.js, HTML/CSS</p>
                    </div>
                    <div class="skill-item">
                        <i class="fas fa-server"></i>
                        <h4>Backend</h4>
                        <p>Node.js, PHP, Laravel</p>
                    </div>
                    <div class="skill-item">
                        <i class="fas fa-database"></i>
                        <h4>Database</h4>
                        <p>MySQL, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="section portfolio" id="portfolio">
        <div class="container">
            <h2 class="section-title fade-in-up">Portfolio</h2>
            <p class="section-subtitle fade-in-up">A showcase of my recent work and projects</p>
            
            <div class="portfolio-filters fade-in-up">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="fullstack">Full-Stack</button>
                <button class="filter-btn" data-filter="frontend">Frontend</button>
                <button class="filter-btn" data-filter="backend">Backend</button>
                <button class="filter-btn" data-filter="mobile">Mobile</button>
            </div>
            
            <div class="portfolio-grid" id="portfolio-grid">
                <!-- Portfolio items will be loaded via AJAX from Laravel backend -->
                <div class="portfolio-item show" data-category="fullstack">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop" alt="E-Commerce Platform" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3>E-Commerce Platform</h3>
                        <p>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.</p>
                        <div class="portfolio-tags">
                            <span class="tag">Laravel</span>
                            <span class="tag">MySQL</span>
                            <span class="tag">jQuery</span>
                            <span class="tag">Stripe</span>
                        </div>
                        <div class="portfolio-links">
                            <a href="#" class="btn-primary">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                            <a href="#" class="btn-outline">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-item show" data-category="frontend">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop" alt="Dashboard UI" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3>Analytics Dashboard</h3>
                        <p>Modern dashboard with data visualization and real-time updates for business intelligence.</p>
                        <div class="portfolio-tags">
                            <span class="tag">HTML/CSS</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">Chart.js</span>
                            <span class="tag">API</span>
                        </div>
                        <div class="portfolio-links">
                            <a href="#" class="btn-primary">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                            <a href="#" class="btn-outline">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-item show" data-category="backend">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop" alt="API Development" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3>REST API System</h3>
                        <p>Scalable REST API with authentication, rate limiting, and comprehensive documentation.</p>
                        <div class="portfolio-tags">
                            <span class="tag">Laravel</span>
                            <span class="tag">JWT</span>
                            <span class="tag">MySQL</span>
                            <span class="tag">Redis</span>
                        </div>
                        <div class="portfolio-links">
                            <a href="#" class="btn-primary">
                                <i class="fas fa-external-link-alt"></i>
                                Documentation
                            </a>
                            <a href="#" class="btn-outline">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-item show" data-category="mobile">
                    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop" alt="Mobile App" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3>Mobile Banking App</h3>
                        <p>Secure mobile banking application with biometric authentication and real-time transactions.</p>
                        <div class="portfolio-tags">
                            <span class="tag">React Native</span>
                            <span class="tag">Laravel API</span>
                            <span class="tag">MySQL</span>
                            <span class="tag">Security</span>
                        </div>
                        <div class="portfolio-links">
                            <a href="#" class="btn-primary">
                                <i class="fas fa-mobile-alt"></i>
                                App Store
                            </a>
                            <a href="#" class="btn-outline">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-item show" data-category="fullstack">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop" alt="CMS Platform" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3>Content Management System</h3>
                        <p>Custom CMS with drag-and-drop page builder, user management, and SEO optimization.</p>
                        <div class="portfolio-tags">
                            <span class="tag">Laravel</span>
                            <span class="tag">MySQL</span>
                            <span class="tag">jQuery</span>
                            <span class="tag">Bootstrap</span>
                        </div>
                        <div class="portfolio-links">
                            <a href="#" class="btn-primary">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                            <a href="#" class="btn-outline">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-item show" data-category="frontend">
                    <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop" alt="Web Application" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3>SaaS Landing Page</h3>
                        <p>Modern, responsive landing page with animations, contact forms, and conversion optimization.</p>
                        <div class="portfolio-tags">
                            <span class="tag">HTML5</span>
                            <span class="tag">CSS3</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">jQuery</span>
                        </div>
                        <div class="portfolio-links">
                            <a href="#" class="btn-primary">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                            <a href="#" class="btn-outline">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section" id="services">
        <div class="container">
            <h2 class="section-title fade-in-up">Services</h2>
            <p class="section-subtitle fade-in-up">What I can help you build</p>
            
            <div class="services-grid">
                <div class="service-item fade-in-up">
                    <i class="fas fa-code"></i>
                    <h3>Web Development</h3>
                    <p>Custom web applications built with modern technologies like Laravel, MySQL, and responsive frontend frameworks.</p>
                </div>
                
                <div class="service-item fade-in-up">
                    <i class="fas fa-palette"></i>
                    <h3>UI/UX Design</h3>
                    <p>User-centered design solutions that combine aesthetics with functionality and usability principles.</p>
                </div>
                
                <div class="service-item fade-in-up">
                    <i class="fas fa-server"></i>
                    <h3>Backend Development</h3>
                    <p>Scalable server-side solutions with Laravel, MySQL databases, APIs, and cloud infrastructure.</p>
                </div>
                
                <div class="service-item fade-in-up">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Mobile Development</h3>
                    <p>Cross-platform mobile applications with native performance and seamless user experiences.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact" id="contact">
        <div class="container">
            <h2 class="section-title fade-in-up">Get In Touch</h2>
            <p class="section-subtitle fade-in-up">Let's discuss your next project</p>
            
            <div class="contact-grid">
                <div class="contact-info fade-in-up">
                    <h3 style="margin-bottom: 2rem; color: var(--text-dark);">Contact Information</h3>
                    
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:alex@developer.com">alex@developer.com</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                    
                    <div class="social-links">
                        <a href="https://linkedin.com/in/alexdeveloper" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/alexdeveloper" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/alexdeveloper" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <div class="contact-form fade-in-up">
                    <h3 style="margin-bottom: 2rem; color: var(--text-dark);">Send Message</h3>
                    
                    <form id="contact-form" action="/api/contact" method="POST">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" required placeholder="Tell me about your project..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <span id="submit-text">
                                <i class="fas fa-paper-plane"></i>
                                Send Message
                            </span>
                            <span id="submit-loading" style="display: none;">
                                <div class="spinner"></div>
                                Sending...
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Alex Developer</h3>
                    <p>Creating digital experiences that drive results and delight users. Let's build something amazing together.</p>
                    <div class="social-links">
                        <a href="https://linkedin.com/in/alexdeveloper" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/alexdeveloper" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="mailto:alex@developer.com" aria-label="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul style="list-style: none;">
                        <li style="margin-bottom: 0.5rem;"><a href="#home" class="nav-link">Home</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#about" class="nav-link">About</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#portfolio" class="nav-link">Portfolio</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#services" class="nav-link">Services</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#contact" class="nav-link">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Services</h3>
                    <ul style="list-style: none;">
                        <li style="margin-bottom: 0.5rem;">Web Development</li>
                        <li style="margin-bottom: 0.5rem;">UI/UX Design</li>
                        <li style="margin-bottom: 0.5rem;">Backend Development</li>
                        <li style="margin-bottom: 0.5rem;">Mobile Development</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Alex Developer. All rights reserved. Built with HTML, CSS, jQuery & Laravel</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript Libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    
    <!-- Custom JavaScript -->
    <script>
        $(document).ready(function() {
            // Initialize AOS (Animate On Scroll)
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
            
            // Mobile menu toggle
            $('#mobile-menu-toggle').click(function() {
                $('#nav-menu').toggleClass('active');
                const icon = $(this).find('i');
                icon.toggleClass('fa-bars fa-times');
            });
            
            // Smooth scrolling for navigation links
            $('.nav-link').click(function(e) {
                e.preventDefault();
                const target = $(this.getAttribute('href'));
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                }
                $('#nav-menu').removeClass('active');
                $('#mobile-menu-toggle i').removeClass('fa-times').addClass('fa-bars');
            });
            
            // Navbar background on scroll
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass('scrolled');
                } else {
                    $('.navbar').removeClass('scrolled');
                }
                
                // Animate elements on scroll
                $('.fade-in-up').each(function() {
                    const elementTop = $(this).offset().top;
                    const windowBottom = $(window).scrollTop() + $(window).height();
                    
                    if (windowBottom > elementTop + 50) {
                        $(this).addClass('animate');
                    }
                });
            });
            
            // Dark mode toggle
            const themeToggle = $('#theme-toggle');
            const themeIcon = $('#theme-icon');
            const body = $('body');
            
            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme') || 'light';
            if (savedTheme === 'dark') {
                body.attr('data-theme', 'dark');
                themeIcon.removeClass('fa-moon').addClass('fa-sun');
            }
            
            themeToggle.click(function() {
                const currentTheme = body.attr('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                body.attr('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                if (newTheme === 'dark') {
                    themeIcon.removeClass('fa-moon').addClass('fa-sun');
                } else {
                    themeIcon.removeClass('fa-sun').addClass('fa-moon');
                }
            });
            
            // Portfolio filtering
            $('.filter-btn').click(function() {
                const filter = $(this).data('filter');
                
                // Update active button
                $('.filter-btn').removeClass('active');
                $(this).addClass('active');
                
                // Filter portfolio items
                $('.portfolio-item').removeClass('show');
                
                setTimeout(() => {
                    if (filter === 'all') {
                        $('.portfolio-item').addClass('show');
                    } else {
                        $(`.portfolio-item[data-category="${filter}"]`).addClass('show');
                    }
                }, 300);
            });
            
            // Contact form submission
            $('#contact-form').submit(function(e) {
                e.preventDefault();
                
                const form = $(this);
                const submitBtn = form.find('button[type="submit"]');
                const submitText = $('#submit-text');
                const submitLoading = $('#submit-loading');
                
                // Show loading state
                submitText.hide();
                submitLoading.show();
                submitBtn.prop('disabled', true);
                
                // Prepare form data
                const formData = {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    subject: $('#subject').val(),
                    message: $('#message').val(),
                    _token: $('meta[name="csrf-token"]').attr('content') // Laravel CSRF token
                };
                
                // AJAX request to Laravel backend
                $.ajax({
                    url: '/api/contact',
                    method: 'POST',
                    data: formData,
                    dataType: 'json',
                    success: function(response) {
                        // Show success message
                        showNotification('Message sent successfully!', 'success');
                        form[0].reset();
                    },
                    error: function(xhr, status, error) {
                        // Show error message
                        let errorMessage = 'Something went wrong. Please try again.';
                        if (xhr.responseJSON && xhr.responseJSON.message) {
                            errorMessage = xhr.responseJSON.message;
                        }
                        showNotification(errorMessage, 'error');
                    },
                    complete: function() {
                        // Reset button state
                        submitText.show();
                        submitLoading.hide();
                        submitBtn.prop('disabled', false);
                    }
                });
            });
            
            // Notification system
            function showNotification(message, type = 'info') {
                const notification = $(`
                    <div class="notification notification-${type}" style="
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
                        color: white;
                        padding: 1rem 1.5rem;
                        border-radius: 0.5rem;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                        z-index: 9999;
                        opacity: 0;
                        transform: translateX(100%);
                        transition: all 0.3s ease;
                    ">
                        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}" style="margin-right: 0.5rem;"></i>
                        ${message}
                    </div>
                `);
                
                $('body').append(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.css({
                        opacity: 1,
                        transform: 'translateX(0)'
                    });
                }, 100);
                
                // Remove after 5 seconds
                setTimeout(() => {
                    notification.css({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    });
                    setTimeout(() => notification.remove(), 300);
                }, 5000);
            }
            
            // Load portfolio items from Laravel API (optional)
            function loadPortfolio() {
                $.ajax({
                    url: '/api/portfolio',
                    method: 'GET',
                    dataType: 'json',
                    success: function(response) {
                        // Update portfolio grid with data from Laravel backend
                        // This would replace the static HTML with dynamic content
                        console.log('Portfolio data loaded:', response);
                    },
                    error: function(xhr, status, error) {
                        console.error('Error loading portfolio:', error);
                    }
                });
            }
            
            // Uncomment to load portfolio from API
            // loadPortfolio();
            
            // Lazy loading for images
            const images = $('img[loading="lazy"]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.each(function() {
                imageObserver.observe(this);
            });
            
            // Typing animation for hero section
            function typeWriter(element, text, speed = 100) {
                let i = 0;
                element.innerHTML = '';
                
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    }
                }
                type();
            }
            
            // Initialize typing animation after page load
            setTimeout(() => {
                const heroTitle = $('.hero h1 span')[0];
                if (heroTitle) {
                    typeWriter(heroTitle, 'Alex', 150);
                }
            }, 2000);
        });
        
        // Google Analytics (replace with your tracking ID)
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
    </script>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
    
    <!-- Meta tags for CSRF token (Laravel) -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
</body>
</html>
                            