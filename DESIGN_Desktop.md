<!-- Design System -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>RD Workx - Professional Document Template</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-container": "#8b92a1",
                        "on-primary-container": "#8691b0",
                        "tertiary-container": "#242b37",
                        "outline-variant": "#c6c6ce",
                        "on-background": "#191c1e",
                        "surface-dim": "#d8dadd",
                        "surface-container-high": "#e6e8eb",
                        "on-secondary-container": "#286c6e",
                        "on-primary": "#ffffff",
                        "surface-container-highest": "#e0e3e6",
                        "primary-container": "#1f2a44",
                        "inverse-on-surface": "#eff1f4",
                        "on-primary-fixed": "#0f1b34",
                        "inverse-primary": "#bbc6e7",
                        "secondary-container": "#a9ebed",
                        "on-surface-variant": "#45464d",
                        "on-tertiary-fixed": "#151c27",
                        "tertiary-fixed": "#dce2f3",
                        "primary-fixed": "#d9e2ff",
                        "on-error-container": "#93000a",
                        "on-secondary-fixed": "#002021",
                        "on-tertiary": "#ffffff",
                        "background": "#f7f9fc",
                        "primary": "#09152e",
                        "surface-tint": "#535e7b",
                        "secondary-fixed": "#aceef0",
                        "surface-variant": "#e0e3e6",
                        "surface-container-lowest": "#ffffff",
                        "on-primary-fixed-variant": "#3b4662",
                        "secondary-fixed-dim": "#90d2d4",
                        "primary-fixed-dim": "#bbc6e7",
                        "surface-bright": "#f7f9fc",
                        "on-secondary-fixed-variant": "#004f51",
                        "tertiary-fixed-dim": "#c0c7d6",
                        "on-tertiary-fixed-variant": "#404754",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f2f4f7",
                        "error-container": "#ffdad6",
                        "on-secondary": "#ffffff",
                        "surface-container": "#eceef1",
                        "secondary": "#22686a",
                        "surface": "#f7f9fc",
                        "on-surface": "#191c1e",
                        "on-error": "#ffffff",
                        "tertiary": "#0f1722",
                        "inverse-surface": "#2d3133",
                        "outline": "#76777e"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "container-max": "1280px",
                        "unit-md": "1rem",
                        "margin-mobile": "1rem",
                        "unit-lg": "2rem",
                        "unit-xs": "0.25rem",
                        "gutter": "1.5rem",
                        "unit-sm": "0.5rem",
                        "unit-xl": "4rem",
                        "margin-desktop": "2.5rem"
                    },
                    "fontFamily": {
                        "display-xl": ["Inter"],
                        "headline-lg": ["Inter"],
                        "headline-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "body-md": ["Inter"],
                        "serif": ["Libre Baskerville", "serif"]
                    },
                    "fontSize": {
                        "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        @media print {
            .no-print { display: none !important; }
            body { background-color: white !important; }
            .print-shadow { box-shadow: none !important; border: 1px solid #c6c6ce !important; }
        }
    </style>
</head>
<body class="bg-surface-container-low font-body-md text-on-surface antialiased">
<!-- Top Navigation Bar (Shared Component) -->
<header class="no-print bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop py-unit-md max-w-container-max mx-auto top-0 z-50">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</div>
<nav class="hidden md:flex gap-unit-md items-center">
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Solutions</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Methodology</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Case Studies</a>
<a class="text-secondary font-bold border-b-2 border-secondary pb-1" href="#">Resources</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Contact</a>
</nav>
<button class="bg-primary text-on-primary px-unit-md py-unit-sm rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">Get Started</button>
</header>
<main class="max-w-[1000px] mx-auto py-unit-xl px-margin-mobile md:px-margin-desktop">
<!-- Toolbar for UI Interaction -->
<div class="no-print flex justify-between items-center mb-unit-lg bg-surface-container-highest p-unit-sm rounded-xl border border-outline-variant">
<div class="flex gap-unit-sm">
<button class="p-unit-sm hover:bg-surface-container-high rounded flex items-center gap-unit-xs text-on-surface-variant">
<span class="material-symbols-outlined">download</span>
<span class="font-label-md">Download PDF</span>
</button>
<button class="p-unit-sm hover:bg-surface-container-high rounded flex items-center gap-unit-xs text-on-surface-variant" onclick="window.print()">
<span class="material-symbols-outlined">print</span>
<span class="font-label-md">Print</span>
</button>
</div>
<div class="flex gap-unit-sm">
<span class="px-unit-sm py-unit-xs bg-secondary-container text-on-secondary-container rounded font-label-sm">DRAFT VERSION 2.4</span>
</div>
</div>
<!-- Document Container -->
<div class="bg-surface-container-lowest print-shadow shadow-xl min-h-[1200px] flex flex-col p-unit-xl md:p-[80px] relative overflow-hidden">
<!-- Isometric Accent Pattern (Subtle Watermark) -->
<div class="absolute top-0 right-0 opacity-5 pointer-events-none w-1/2 h-1/2" data-alt="A subtle, high-end isometric pattern of interconnected geometric cubes and architectural lines. The visual style is minimalist and professional, rendered in a translucent light teal and gray tone to match a corporate light-mode aesthetic. The composition suggests structural depth and precision, serving as a sophisticated watermark for an enterprise software brand." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrfl46FKLIwwH0kajEu1jWcqazyFijftO7Uf71CTYH-sK8o-s0_rAqNreiPT7Fo0o6Wjjid9F8mC5czgImAL3_qHy4g6q4jgbj-FI8ta6HIRSr0n9MmX6DKiJXFgQLfsbxDiJPv0dg4mNbBYDaA0RBvJqf-sJ2G7FMJ9rXwpBbSoUT8otb1Wctk16J4Y0qW5-ID2hG0kg2UUOVDEUQzOm1KsNz4ym8BQVND57eC__E27ibj-iRbjoezcqlZhSELeUHaqHnhphOPa8');">
</div>
<!-- Letterhead Header -->
<header class="relative z-10 flex justify-between items-start mb-unit-xl">
<div class="space-y-unit-sm">
<div class="h-1 w-16 bg-secondary"></div>
<p class="font-label-sm text-on-secondary-container uppercase tracking-widest">Confidential Report</p>
<h1 class="font-display-xl text-display-xl text-primary max-w-2xl">Architectural Efficiency Audit: Enterprise Systems 2024</h1>
</div>
<div class="text-right">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight mb-unit-sm">RD Workx</div>
<div class="text-on-surface-variant font-label-sm leading-relaxed">
                        Stationsplein 45<br/>
                        3013 AK Rotterdam<br/>
                        The Netherlands<br/>
                        RD Workx.io
                    </div>
</div>
</header>
<!-- Metadata Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-unit-xl border-y border-outline-variant py-unit-lg">
<div class="space-y-unit-xs">
<span class="font-label-sm text-outline uppercase">Prepared For</span>
<p class="font-body-md font-bold text-on-surface">Global Logistics Group</p>
<p class="font-label-md text-on-surface-variant">Director of Infrastructure</p>
</div>
<div class="space-y-unit-xs">
<span class="font-label-sm text-outline uppercase">Report ID</span>
<p class="font-body-md font-bold text-on-surface">SMA-2024-0812</p>
<p class="font-label-md text-on-surface-variant">Auth: K. Van Den Berg</p>
</div>
<div class="space-y-unit-xs">
<span class="font-label-sm text-outline uppercase">Date Issued</span>
<p class="font-body-md font-bold text-on-surface">October 14, 2024</p>
<p class="font-label-md text-on-surface-variant">Revised: Oct 18, 2024</p>
</div>
<div class="space-y-unit-xs">
<span class="font-label-sm text-outline uppercase">Classification</span>
<div class="flex items-center gap-unit-xs">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<p class="font-body-md font-bold text-on-surface">Internal Only</p>
</div>
<p class="font-label-md text-on-surface-variant">Enterprise Tier 1</p>
</div>
</section>
<!-- Body Content -->
<article class="flex-grow space-y-unit-lg">
<div class="max-w-prose">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-md">Executive Summary</h2>
<p class="font-serif text-body-lg leading-relaxed text-on-surface mb-unit-md">
                        This document outlines the strategic architectural improvements identified during the Q3 precision audit. By leveraging the <strong>RD Workx Core Framework</strong>, organizations can expect a significant reduction in operational friction. Our "Slimmer werken" methodology focuses on three primary pillars: structural stability, data-driven automation, and architectural precision.
                    </p>
<p class="font-serif text-body-lg leading-relaxed text-on-surface">
                        The findings suggest that current legacy systems are operating at 64% efficiency compared to our optimized benchmarks. Implementing the proposed phased transition will mitigate risk while maximizing ROI across all departmental touchpoints.
                    </p>
</div>
<!-- Structured Data Highlight -->
<div class="bg-surface-container-low p-unit-lg border-l-4 border-secondary rounded-lg">
<h3 class="font-label-md text-on-secondary-container uppercase mb-unit-sm">Key Performance Indicators</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-unit-md">
<div class="bg-surface-container-lowest p-unit-md border border-outline-variant rounded">
<span class="block font-display-xl text-primary">22%</span>
<span class="font-label-sm text-on-surface-variant uppercase">Latency Reduction</span>
</div>
<div class="bg-surface-container-lowest p-unit-md border border-outline-variant rounded">
<span class="block font-display-xl text-primary">1.4x</span>
<span class="font-label-sm text-on-surface-variant uppercase">Throughput Gain</span>
</div>
<div class="bg-surface-container-lowest p-unit-md border border-outline-variant rounded">
<span class="block font-display-xl text-primary">€12k</span>
<span class="font-label-sm text-on-surface-variant uppercase">Monthly Savings</span>
</div>
</div>
</div>
<!-- Descriptive Image/Diagram Placeholder -->
<figure class="my-unit-xl">
<img alt="Architectural Diagram" class="w-full h-80 object-cover rounded-xl border border-outline-variant" data-alt="A clean, professional data visualization dashboard shown on a high-resolution display in a bright, modern office setting. The screen displays sophisticated architectural diagrams and efficiency metrics using a palette of teal, navy, and soft gray. Soft, natural morning light fills the room, creating a serene and productive corporate atmosphere that emphasizes clarity and high-end enterprise software precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALYSFv313j1DqDBZUZxcAwKx7Ej-dYbmRAYvjurcgYwjDR3CgFSaKWpwKhNsUe_uRd2KilBBvIHq_TTbaDZgqr4HK5ut9n4n1NUnM3BFfi9cO-PjN2da4lO_bbKJl8EWXpOTkVWmMHFhz5-i2NX0p4mKxduhVUdqQ94Xw3NUrcNN9-eQ0qaRO5Z3RSmacMg0Ih7LnNgUolunRvVPFT1dF3fa94Msm9FOONGYwDDvlCFnqakJDIv98HJXPp4f-kyOHaWq1tqjRcSws"/>
<figcaption class="mt-unit-sm font-label-sm text-on-surface-variant italic text-center">Fig 1.1: Projected infrastructure optimization path using RD Workx Methodology.</figcaption>
</figure>
<div class="max-w-prose">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-md">Next Steps &amp; Deployment</h2>
<p class="font-serif text-body-lg leading-relaxed text-on-surface">
                        Phase One of the architectural overhaul is scheduled to commence in November. This will involve a "shadow deployment" phase where RD Workx systems run concurrently with existing architecture to ensure zero downtime and data integrity.
                    </p>
</div>
</article>
<!-- Document Footer -->
<footer class="mt-unit-xl pt-unit-lg border-t border-outline-variant flex justify-between items-end">
<div class="space-y-unit-sm">
<div class="flex items-center gap-unit-md">
<div class="w-12 h-12 bg-surface-container-high border border-outline-variant rounded flex items-center justify-center">
<span class="material-symbols-outlined text-primary">qr_code_2</span>
</div>
<div>
<p class="font-label-sm text-on-surface-variant uppercase">Digital Verification</p>
<p class="font-label-md font-bold text-on-surface">verify.RD Workx.io/812-XG</p>
</div>
</div>
</div>
<div class="text-right">
<p class="font-label-sm text-on-surface-variant">RD Workx Document Template • Page 01 of 12</p>
<p class="font-label-sm text-outline">© 2024 RD Workx Global Architecture</p>
</div>
</footer>
</div>
</main>
<!-- Global Footer (Shared Component) -->
<footer class="no-print w-full px-margin-desktop py-unit-lg flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto gap-unit-md bg-surface-container-low border-t border-outline-variant">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</div>
<div class="flex gap-unit-md">
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Security</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Architecture</a>
</div>
<div class="text-on-surface-variant text-label-sm">
            © 2024 RD Workx. Slimmer werken door architectonische precisie.
        </div>
</footer>
</body></html>

<!-- RD Workx - Document Template -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-container": "#8b92a1",
                    "on-primary-container": "#8691b0",
                    "tertiary-container": "#242b37",
                    "outline-variant": "#c6c6ce",
                    "on-background": "#191c1e",
                    "surface-dim": "#d8dadd",
                    "surface-container-high": "#e6e8eb",
                    "on-secondary-container": "#286c6e",
                    "on-primary": "#ffffff",
                    "surface-container-highest": "#e0e3e6",
                    "primary-container": "#1f2a44",
                    "inverse-on-surface": "#eff1f4",
                    "on-primary-fixed": "#0f1b34",
                    "inverse-primary": "#bbc6e7",
                    "secondary-container": "#a9ebed",
                    "on-surface-variant": "#45464d",
                    "on-tertiary-fixed": "#151c27",
                    "tertiary-fixed": "#dce2f3",
                    "primary-fixed": "#d9e2ff",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed": "#002021",
                    "on-tertiary": "#ffffff",
                    "background": "#f7f9fc",
                    "primary": "#09152e",
                    "surface-tint": "#535e7b",
                    "secondary-fixed": "#aceef0",
                    "surface-variant": "#e0e3e6",
                    "surface-container-lowest": "#ffffff",
                    "on-primary-fixed-variant": "#3b4662",
                    "secondary-fixed-dim": "#90d2d4",
                    "primary-fixed-dim": "#bbc6e7",
                    "surface-bright": "#f7f9fc",
                    "on-secondary-fixed-variant": "#004f51",
                    "tertiary-fixed-dim": "#c0c7d6",
                    "on-tertiary-fixed-variant": "#404754",
                    "error": "#ba1a1a",
                    "surface-container-low": "#f2f4f7",
                    "error-container": "#ffdad6",
                    "on-secondary": "#ffffff",
                    "surface-container": "#eceef1",
                    "secondary": "#22686a",
                    "surface": "#f7f9fc",
                    "on-surface": "#191c1e",
                    "on-error": "#ffffff",
                    "tertiary": "#0f1722",
                    "inverse-surface": "#2d3133",
                    "outline": "#76777e"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1280px",
                    "unit-md": "1rem",
                    "margin-mobile": "1rem",
                    "unit-lg": "2rem",
                    "unit-xs": "0.25rem",
                    "gutter": "1.5rem",
                    "unit-sm": "0.5rem",
                    "unit-xl": "4rem",
                    "margin-desktop": "2.5rem"
            },
            "fontFamily": {
                    "display-xl": ["Inter"],
                    "headline-lg": ["Inter"],
                    "headline-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "label-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "body-md": ["Inter"]
            },
            "fontSize": {
                    "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .slide-canvas {
            aspect-ratio: 16 / 9;
            box-shadow: 0 20px 40px rgba(9, 21, 46, 0.08);
        }
        .isometric-bg {
            background-image: linear-gradient(30deg, transparent 49%, rgba(43, 111, 113, 0.05) 50%, rgba(43, 111, 113, 0.05) 51%, transparent 52%);
            background-size: 40px 40px;
        }
    </style>
</head>
<body class="bg-surface-container-low min-h-screen flex items-center justify-center p-unit-md md:p-unit-xl">
<!-- Slide Container (Mimicking a 16:9 Presentation Tool) -->
<main class="slide-canvas bg-surface-container-lowest w-full max-w-container-max mx-auto overflow-hidden relative border border-outline-variant flex flex-col">
<!-- TopNavBar - Rendered as Slide Header -->
<header class="bg-surface dark:bg-surface-container border-b border-outline-variant dark:border-on-surface-variant flex justify-between items-center w-full px-margin-desktop py-unit-md z-10">
<div class="flex items-center gap-unit-sm">
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">RD Workx</span>
<div class="h-unit-md w-[2px] bg-outline-variant mx-unit-sm"></div>
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Quarterly Strategy</span>
</div>
<nav class="hidden md:flex items-center gap-unit-md">
<a class="text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary dark:border-secondary-fixed pb-1 font-label-md text-label-md transition-all" href="#">Solutions</a>
<a class="text-on-surface-variant dark:text-on-tertiary-container font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200 font-label-md text-label-md" href="#">Methodology</a>
<a class="text-on-surface-variant dark:text-on-tertiary-container font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200 font-label-md text-label-md" href="#">Case Studies</a>
</nav>
<button class="bg-primary text-on-primary px-unit-md py-unit-xs rounded font-label-md text-label-md hover:opacity-80 transition-all">
                Get Started
            </button>
</header>
<!-- Main Slide Content Canvas -->
<section class="flex-grow relative flex px-margin-desktop py-unit-xl isometric-bg">
<!-- Left Side: Content & Bullets -->
<div class="w-full md:w-1/2 flex flex-col justify-center z-20">
<div class="mb-unit-lg">
<span class="inline-block bg-secondary-container text-on-secondary-container px-unit-sm py-unit-xs rounded-full font-label-sm text-label-sm mb-unit-md">
                        ARCHITECTURAL PRECISION
                    </span>
<h1 class="font-display-xl text-display-xl text-primary leading-tight">
                        Slimmer werken door precisie.
                    </h1>
</div>
<div class="space-y-unit-md">
<div class="flex items-start gap-unit-md group">
<div class="mt-1 w-unit-md h-unit-md rounded-full bg-secondary flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-on-secondary text-[14px]">check</span>
</div>
<div>
<h3 class="font-headline-md text-[18px] text-primary mb-1">Structural Scalability</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Systems designed to grow alongside your enterprise demands without increasing complexity overhead.</p>
</div>
</div>
<div class="flex items-start gap-unit-md group">
<div class="mt-1 w-unit-md h-unit-md rounded-full bg-secondary flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-on-secondary text-[14px]">check</span>
</div>
<div>
<h3 class="font-headline-md text-[18px] text-primary mb-1">Pragmatic Efficiency</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Focusing on high-impact interactions that minimize time-to-task completion for every user.</p>
</div>
</div>
<div class="flex items-start gap-unit-md group">
<div class="mt-1 w-unit-md h-unit-md rounded-full bg-secondary flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-on-secondary text-[14px]">check</span>
</div>
<div>
<h3 class="font-headline-md text-[18px] text-primary mb-1">Modern Reliability</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Leveraging enterprise-grade stability with a cutting-edge aesthetic that inspires confidence.</p>
</div>
</div>
</div>
</div>
<!-- Right Side: Central Isometric Graphic -->
<div class="hidden md:flex w-1/2 items-center justify-center relative">
<!-- Isometric Visual Element -->
<div class="relative w-full h-full flex items-center justify-center">
<!-- Geometric Backdrop -->
<div class="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
<!-- Main Isometric Asset -->
<div class="relative z-10 w-[420px] h-[320px] bg-white border border-outline-variant rounded-xl shadow-lg flex flex-col p-unit-md overflow-hidden transform rotate-[-4deg]">
<div class="flex items-center justify-between mb-unit-md border-b border-surface-variant pb-unit-sm">
<div class="flex gap-1">
<div class="w-3 h-3 rounded-full bg-red-400"></div>
<div class="w-3 h-3 rounded-full bg-amber-400"></div>
<div class="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<span class="font-label-sm text-label-sm text-on-tertiary-container">RD Workx Dashboard</span>
</div>
<img alt="Professional data dashboard" class="w-full h-full object-cover rounded opacity-90" data-alt="A clean, professional business dashboard interface displayed on a high-resolution screen. The layout features elegant data visualizations and charts in a sophisticated teal and navy color palette. The aesthetic is corporate and modern, utilizing soft ambient shadows and crisp geometric lines to convey architectural precision and organized efficiency. The lighting is bright and airy, reflecting a high-end enterprise software environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaqR0QdPjntAc9iIE_ipdcTR52Vl7tZhmX1S9g4tFhkFBfmGz-fVmoCsFX-hvmOKkSYQCenLQ3mkSOmU81KixKLBky7zl34wVEs3ro_Evwh-xJhzYmKdW0W8G4leM8u2FekEVsqrXgD5EfoQMG_jgsUp451ST6ykQ7V8iyga1wmMO-KhOFAOcp5FPxpo85bXr-wTk1E4EzXf17dJkVpLaZb14Y3Tu3t9gjmztlR0bblaWPKtTHKVdVXK5q1KpnXHvqR4uI68sGcrI"/>
</div>
<!-- Secondary Overlapping "Block" -->
<div class="absolute z-20 top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-secondary border border-secondary-fixed rounded-xl shadow-2xl flex items-center justify-center rotate-6">
<div class="text-center text-on-secondary p-unit-md">
<span class="material-symbols-outlined text-[48px] mb-unit-sm" data-weight="fill">architecture</span>
<div class="font-label-md text-label-md font-bold">CORE STRUCTURE</div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer - Navigation/Info bar -->
<footer class="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant w-full px-margin-desktop py-unit-sm flex flex-col md:flex-row justify-between items-center gap-unit-md">
<div class="flex items-center gap-unit-lg">
<span class="font-headline-md text-[18px] font-bold text-primary dark:text-primary-fixed">RD Workx</span>
<p class="font-label-sm text-label-sm text-on-surface-variant">© 2024 RD Workx. Slimmer werken door architectonische precisie.</p>
</div>
<div class="flex gap-unit-md">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Architecture</a>
</div>
<!-- Slide Numbering (Presentation specific) -->
<div class="font-label-md text-label-md text-secondary font-semibold">
                04 / 12
            </div>
</footer>
<!-- Decorative Isometric Corner Accent -->
<div class="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
<svg class="w-full h-full fill-primary" viewbox="0 0 100 100">
<path d="M0,0 L100,0 L100,100 Z"></path>
</svg>
</div>
</main>
</body></html>

<!-- RD Workx - Presentation Template -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-container": "#8b92a1",
                    "on-primary-container": "#8691b0",
                    "tertiary-container": "#242b37",
                    "outline-variant": "#c6c6ce",
                    "on-background": "#191c1e",
                    "surface-dim": "#d8dadd",
                    "surface-container-high": "#e6e8eb",
                    "on-secondary-container": "#286c6e",
                    "on-primary": "#ffffff",
                    "surface-container-highest": "#e0e3e6",
                    "primary-container": "#1f2a44",
                    "inverse-on-surface": "#eff1f4",
                    "on-primary-fixed": "#0f1b34",
                    "inverse-primary": "#bbc6e7",
                    "secondary-container": "#a9ebed",
                    "on-surface-variant": "#45464d",
                    "on-tertiary-fixed": "#151c27",
                    "tertiary-fixed": "#dce2f3",
                    "primary-fixed": "#d9e2ff",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed": "#002021",
                    "on-tertiary": "#ffffff",
                    "background": "#f7f9fc",
                    "primary": "#09152e",
                    "surface-tint": "#535e7b",
                    "secondary-fixed": "#aceef0",
                    "surface-variant": "#e0e3e6",
                    "surface-container-lowest": "#ffffff",
                    "on-primary-fixed-variant": "#3b4662",
                    "secondary-fixed-dim": "#90d2d4",
                    "primary-fixed-dim": "#bbc6e7",
                    "surface-bright": "#f7f9fc",
                    "on-secondary-fixed-variant": "#004f51",
                    "tertiary-fixed-dim": "#c0c7d6",
                    "on-tertiary-fixed-variant": "#404754",
                    "error": "#ba1a1a",
                    "surface-container-low": "#f2f4f7",
                    "error-container": "#ffdad6",
                    "on-secondary": "#ffffff",
                    "surface-container": "#eceef1",
                    "secondary": "#22686a",
                    "surface": "#f7f9fc",
                    "on-surface": "#191c1e",
                    "on-error": "#ffffff",
                    "tertiary": "#0f1722",
                    "inverse-surface": "#2d3133",
                    "outline": "#76777e"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1280px",
                    "unit-md": "1rem",
                    "margin-mobile": "1rem",
                    "unit-lg": "2rem",
                    "unit-xs": "0.25rem",
                    "gutter": "1.5rem",
                    "unit-sm": "0.5rem",
                    "unit-xl": "4rem",
                    "margin-desktop": "2.5rem"
            },
            "fontFamily": {
                    "display-xl": ["Inter"],
                    "headline-lg": ["Inter"],
                    "headline-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "label-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "body-md": ["Inter"]
            },
            "fontSize": {
                    "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
            }
          }
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .isometric-bg {
            background-image: radial-gradient(circle at 2px 2px, #c6c6ce 1px, transparent 0);
            background-size: 32px 32px;
            opacity: 0.1;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md">
<!-- TopNavBar -->
<nav class="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
<div class="flex justify-between items-center w-full px-margin-desktop py-unit-md max-w-container-max mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</div>
<div class="hidden md:flex items-center gap-unit-lg">
<a class="text-secondary font-bold border-b-2 border-secondary pb-1 transition-colors duration-200" href="#">Solutions</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Methodology</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Case Studies</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Resources</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200" href="#">Contact</a>
</div>
<button class="bg-primary text-on-primary px-unit-md py-unit-sm rounded-lg font-label-md hover:opacity-80 active:scale-95 transition-all">
                Get Started
            </button>
</div>
</nav>
<main class="pt-[72px]">
<!-- Hero Section -->
<section class="relative overflow-hidden py-unit-xl bg-surface-container-low">
<div class="isometric-bg absolute inset-0"></div>
<div class="relative max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-center">
<div>
<span class="inline-block px-unit-sm py-unit-xs bg-secondary-container text-on-secondary-container rounded font-label-sm mb-unit-md">SOFTWARE SOLUTIONS</span>
<h1 class="font-display-xl text-display-xl text-primary mb-unit-md">Architectural precision for modern enterprises.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-unit-lg max-w-xl">
                        RD Workx provides a robust ecosystem designed to streamline complex workflows. Our solutions bridge the gap between high-level architectural stability and daily operational efficiency.
                    </p>
<div class="flex gap-unit-md">
<button class="bg-secondary text-on-secondary px-unit-lg py-unit-md rounded-lg font-label-md hover:opacity-90 transition-all shadow-sm">
                            Explore Modules
                        </button>
<button class="border border-primary text-primary px-unit-lg py-unit-md rounded-lg font-label-md hover:bg-surface-container transition-all">
                            View Documentation
                        </button>
</div>
</div>
<div class="relative">
<div class="bg-white p-unit-sm rounded-xl shadow-[0_20px_40px_rgba(9,21,46,0.06)] border border-outline-variant">
<img alt="RD Workx Dashboard" class="rounded-lg w-full h-auto" data-alt="A high-resolution dashboard interface showing complex data analytics and architectural diagrams. The UI is clean, using a palette of white, teal, and deep navy with crisp typography and subtle shadows. The lighting is bright and professional, mimicking a modern corporate office environment with high-key illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Grg6ZVyOv7iUp4LXNk39to_jfNjyApuk9z7xP5FUCikMFY-6JKfmAteUkSdEqAO47SVRC48Iny-dpm1mhmTMJCi3z7fievN38HQ1WOixttBv-kTKIQagv_B0op_dIJR0Z79vP5--Miz5WPYWyK2jHPSOMo7QKx6KhjQjd-IYmbLvY1tPLMPBw8S_5IaBiqdpVhtCfFOcuc4FudeIKA6cTAqiYzo5zlCkJufI1sLnmEABzwXZjUvthl3ZhE_lyrlHCViL5Fo7WFE"/>
</div>
<!-- Decorative element -->
<div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary opacity-10 rounded-full blur-3xl"></div>
</div>
</div>
</section>
<!-- Reliability & Core Pillars (Bento Grid) -->
<section class="py-unit-xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="mb-unit-xl text-center">
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-sm">Engineered for Stability</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Our platform is built on three core pillars that ensure your enterprise remains agile without compromising on reliability.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Reliability Card -->
<div class="md:col-span-8 bg-white border border-outline-variant p-unit-lg rounded-xl flex flex-col justify-between hover:border-secondary transition-colors group">
<div>
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
<span class="font-label-md text-secondary">RELIABILITY</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-sm">Enterprise-Grade Uptime</h3>
<p class="font-body-md text-on-surface-variant mb-unit-lg max-w-lg">Zero-downtime deployments and distributed node architecture ensure that RD Workx remains available 24/7, even during high-load peaks.</p>
</div>
<div class="grid grid-cols-3 gap-unit-md">
<div class="p-unit-sm bg-surface-container-low rounded border border-outline-variant/30">
<div class="font-headline-md text-secondary">99.9%</div>
<div class="font-label-sm text-on-surface-variant">SLA Guaranteed</div>
</div>
<div class="p-unit-sm bg-surface-container-low rounded border border-outline-variant/30">
<div class="font-headline-md text-secondary">&lt;10ms</div>
<div class="font-label-sm text-on-surface-variant">Latent Response</div>
</div>
<div class="p-unit-sm bg-surface-container-low rounded border border-outline-variant/30">
<div class="font-headline-md text-secondary">ISO</div>
<div class="font-label-sm text-on-surface-variant">27001 Certified</div>
</div>
</div>
</div>
<!-- Daily Usage Card -->
<div class="md:col-span-4 bg-primary text-on-primary p-unit-lg rounded-xl flex flex-col justify-between relative overflow-hidden">
<div class="absolute top-0 right-0 p-unit-md opacity-20">
<span class="material-symbols-outlined text-[80px]">bolt</span>
</div>
<div class="relative z-10">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="material-symbols-outlined text-secondary-fixed">schedule</span>
<span class="font-label-md text-secondary-fixed">DAILY USAGE</span>
</div>
<h3 class="font-headline-md text-headline-md mb-unit-sm text-white">Slimmer Werken</h3>
<p class="font-body-md text-on-primary-fixed-variant">Intelligent automation reduces manual tasks by 40%, allowing teams to focus on high-value architecture.</p>
</div>
<button class="mt-unit-lg flex items-center gap-unit-sm font-label-md text-white hover:gap-unit-md transition-all">
                            See how it works <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<!-- Scalability Card -->
<div class="md:col-span-4 bg-surface-container-low border border-outline-variant p-unit-lg rounded-xl">
<div class="flex items-center gap-unit-sm mb-unit-md text-on-surface-variant">
<span class="material-symbols-outlined">expand</span>
<span class="font-label-md">SCALABILITY</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-sm">Fluid Growth</h3>
<p class="font-body-md text-on-surface-variant">From 10 to 10,000 users, RD Workx scales horizontally without the need for manual configuration.</p>
</div>
<!-- Visual Accent Card -->
<div class="md:col-span-8 bg-white border border-outline-variant rounded-xl overflow-hidden relative">
<img alt="RD Workx Infrastructure" class="absolute inset-0 w-full h-full object-cover opacity-80" data-alt="Close up of high-tech server racks in a data center, glowing with soft blue and teal status lights. The image has a very shallow depth of field, focusing on the precision of the hardware. The color scheme is dominated by cool tones and deep blacks, emphasizing the technical reliability and structural power of the software infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4VYUnQH3GpBpzdLHTYPeKR8ut5P1swizTTgsVple71HiMAXA_U5NIAcEcgc-EsWiD1xC8K9sx9zoasK13yxngXZ2U_0YgRZoxickukj3Aq3PTnOxZro1mj0_yKndb1-JC-GL34BDugIjBjDWU-_H7xKq_A2G1gEUG4a8jENkBx0bRumbri69MYEQEzjObX4ie9Z1U6Dbj4PbO5B5oxbNY1pE-6vghURhrLFLHeYNvysLDhSQ18dvAqTz3W_Y5S6diYD5yHl-SLUM"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-unit-lg">
<h4 class="text-white font-headline-md mb-unit-xs">Precision Infrastructure</h4>
<p class="text-white/70 font-body-md">Managed hosting with dedicated architectural oversight.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Daily Workflows Section -->
<section class="py-unit-xl bg-surface-container-low">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row items-center gap-unit-xl">
<div class="md:w-1/2 space-y-unit-md">
<h2 class="font-headline-lg text-headline-lg text-primary">Designed for the workday of the future.</h2>
<div class="space-y-unit-lg">
<div class="flex gap-unit-md">
<div class="bg-white p-unit-sm rounded-lg shadow-sm h-fit">
<span class="material-symbols-outlined text-secondary">auto_awesome</span>
</div>
<div>
<h4 class="font-headline-md text-primary mb-unit-xs">Contextual Intelligence</h4>
<p class="font-body-md text-on-surface-variant">The system learns your team's workflow and surface the most relevant architectural data before you even ask for it.</p>
</div>
</div>
<div class="flex gap-unit-md">
<div class="bg-white p-unit-sm rounded-lg shadow-sm h-fit">
<span class="material-symbols-outlined text-secondary">sync</span>
</div>
<div>
<h4 class="font-headline-md text-primary mb-unit-xs">Real-time Collaboration</h4>
<p class="font-body-md text-on-surface-variant">Synchronous editing and multi-tenant views allow your architects and developers to stay aligned in one single source of truth.</p>
</div>
</div>
<div class="flex gap-unit-md">
<div class="bg-white p-unit-sm rounded-lg shadow-sm h-fit">
<span class="material-symbols-outlined text-secondary">layers</span>
</div>
<div>
<h4 class="font-headline-md text-primary mb-unit-xs">Modular Architecture</h4>
<p class="font-body-md text-on-surface-variant">Plug-and-play components mean you only pay for what you use, maintaining a lean and efficient digital footprint.</p>
</div>
</div>
</div>
</div>
<div class="md:w-1/2">
<div class="relative p-unit-md bg-white rounded-2xl border border-outline-variant shadow-lg">
<img alt="Collaboration" class="rounded-xl w-full h-auto" data-alt="A collaborative team of professionals in a bright, modern glass-walled conference room. They are working with digital diagrams on a large screen and laptops. The lighting is natural and airy, with teal accents in the interior design. The atmosphere is focused, pragmatic, and highly professional, reflecting a high-end corporate culture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAygsVSLBbyif3TzRJ-Ie-BB3Ok5hQPqX2y_3C6xyJmYFB6jeTRz4DAaHLKbIuLGGmgHMjJXYIqsG998Zr3IF5CInvOjGCyZ0uJm7FR9nu46fB2D4kzj7doxj40S9WltvTwSFTPykon-AeGowr3kMnurpluI-6d7Bo72ovpmpnCN5SKYpRr96N4SIIrhJ5nfr2wmHklMYPLQbNbp0wvlqUZPTO-Dy4Np8kQy_DJyuJNRrzjRXtbKj6GqBcGOr-AhOqNagUZE9qxDg"/>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-unit-xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-desktop text-center">
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-xl">Trusted by Industry Leaders</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant text-left relative">
<div class="text-secondary mb-unit-md italic font-display-xl opacity-20 absolute top-4 left-4">"</div>
<p class="font-body-md text-on-surface-variant mb-unit-lg relative z-10">"RD Workx transformed our legacy systems into a high-performance environment. Their architectural precision is unmatched in the industry."</p>
<div class="flex items-center gap-unit-sm">
<div class="w-10 h-10 rounded-full bg-surface-container border border-outline-variant overflow-hidden">
<img alt="Marcus Chen" data-alt="Professional headshot of a middle-aged male executive in a sharp navy blazer, looking confident and smiling slightly. The background is a clean, neutral gray studio setting with professional softbox lighting that creates high-end corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQeYpFxmNi3GJfssJtFHrWBggEvH_Gfs8YbE84F8yvLgvf7_rIQPW1qB0ELutNZV7MveBYj5Iz6mITusvyAgvN0INMKMPLJcfaZM5BQXQAJ0F6DfTFy96TaUrO9UED5V297-PbRt9ZU6eeqJI5UT7ok7fqmnzsicpaXlqWMiRjJ8VsXBAQwzR7YxGliKRzP1pExy9o7-3xg_saliZdVwuSsbSWKn4BQIlsx8AY8B8licm07h5i1zjRvKZvhy8Eo7_j4v_7Kat76No"/>
</div>
<div>
<div class="font-label-md text-primary">Marcus Chen</div>
<div class="font-label-sm text-on-tertiary-container">CTO, CloudScale Inc.</div>
</div>
</div>
</div>
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant text-left relative">
<div class="text-secondary mb-unit-md italic font-display-xl opacity-20 absolute top-4 left-4">"</div>
<p class="font-body-md text-on-surface-variant mb-unit-lg relative z-10">"The scalability features allowed us to expand into three new markets within six months without any infrastructure hiccups."</p>
<div class="flex items-center gap-unit-sm">
<div class="w-10 h-10 rounded-full bg-surface-container border border-outline-variant overflow-hidden">
<img alt="Sarah Jansen" data-alt="Professional headshot of a young female leader with an approachable but determined expression. She is in a modern office setting with blurred architectural details in the background. The lighting is bright and crisp, highlighting a professional and innovative vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61_ggN92QQ14TeR8RppvjyQlbdfyIjauMfqDcz_XVStOdP-wXSMuojKvb8YGbFNuZ4nRBU3C4XyV9yhPf2I_2-sPMHaoLvkN0hPM3b8SabltiX-8Cb9--4zVN4SMQ13iR85PZT4YczNFPOy41ookR_AW19mXKYTgNoSsnpNTiXzNSwPNrbPLJe7ftHGL-U2HINIQR5VTrG9i3MFPow46zbVVB85PFEoBVDfGLUkt8f0TTXLfd9APE9MdpfEuwWS37wjH9SZ4uk94"/>
</div>
<div>
<div class="font-label-md text-primary">Sarah Jansen</div>
<div class="font-label-sm text-on-tertiary-container">Head of Ops, Nexus Corp.</div>
</div>
</div>
</div>
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant text-left relative">
<div class="text-secondary mb-unit-md italic font-display-xl opacity-20 absolute top-4 left-4">"</div>
<p class="font-body-md text-on-surface-variant mb-unit-lg relative z-10">"Their 'Slimmer werken' philosophy actually works. We've seen a 30% increase in developer productivity since migration."</p>
<div class="flex items-center gap-unit-sm">
<div class="w-10 h-10 rounded-full bg-surface-container border border-outline-variant overflow-hidden">
<img alt="David Miller" data-alt="Professional headshot of a mature male executive wearing glasses and a business suit. He looks intellectual and reliable. The setting is a clean corporate office with subtle glass reflections. The lighting is soft and even, emphasizing a sense of wisdom and stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjEtZDXXPL__YotQO2IZ7Xqj85yLVn61I0oxpyBjnfmRnHZJA_C-HNwrR4O-kvQEmLpaXNXbc-pl_4efIQyFH8DIqezYYfOmBjW_ES6j6PWP2qo9dV3UUch8csqwubhbNPp3LaSrtmEwmGpoZ19xcp9Ej6qnek3sn1KYkb9TKFGuv928Ae-TqgAma3r4_aTWPlMGZ3rVCt2sf-cSiQVf6loG83lZticMYJb6Y0aYqNu0ffAB9CT1OAWiZ6ShsrMmlvnhCdCWcBOAM"/>
</div>
<div>
<div class="font-label-md text-primary">David Miller</div>
<div class="font-label-sm text-on-tertiary-container">Director, ArchiTech</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-unit-xl bg-primary text-on-primary overflow-hidden relative">
<div class="isometric-bg absolute inset-0 opacity-5"></div>
<div class="max-w-container-max mx-auto px-margin-desktop text-center relative z-10">
<h2 class="font-display-xl text-display-xl mb-unit-md text-white">Ready to optimize your architecture?</h2>
<p class="font-body-lg text-on-primary-fixed-variant mb-unit-xl max-w-2xl mx-auto">Join the ranks of high-performing enterprises who trust RD Workx for their digital backbone.</p>
<div class="flex flex-col sm:flex-row justify-center gap-unit-md">
<button class="bg-secondary text-on-secondary px-unit-xl py-unit-md rounded-lg font-headline-md hover:opacity-90 transition-all">
                        Get Started
                    </button>
<button class="border border-white/20 text-white px-unit-xl py-unit-md rounded-lg font-headline-md hover:bg-white/10 transition-all">
                        Schedule a Demo
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-low border-t border-outline-variant">
<div class="w-full px-margin-desktop py-unit-lg flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto gap-unit-md">
<div class="flex flex-col gap-unit-xs">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</div>
<p class="font-body-md text-body-md text-on-surface-variant">© 2024 RD Workx. Slimmer werken door architectonische precisie.</p>
</div>
<div class="flex gap-unit-lg">
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm uppercase tracking-wider" href="#">Privacy Policy</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm uppercase tracking-wider" href="#">Terms of Service</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm uppercase tracking-wider" href="#">Security</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm uppercase tracking-wider" href="#">Architecture</a>
</div>
<div class="flex gap-unit-md">
<a class="text-on-surface-variant hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">public</span>
</a>
<a class="text-on-surface-variant hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
</footer>
</body></html>

<!-- RD Workx - Solutions -->
<!DOCTYPE html>

<html class="light" lang="nl"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-container": "#8b92a1",
                        "on-primary-container": "#8691b0",
                        "tertiary-container": "#242b37",
                        "outline-variant": "#c6c6ce",
                        "on-background": "#191c1e",
                        "surface-dim": "#d8dadd",
                        "surface-container-high": "#e6e8eb",
                        "on-secondary-container": "#286c6e",
                        "on-primary": "#ffffff",
                        "surface-container-highest": "#e0e3e6",
                        "primary-container": "#1f2a44",
                        "inverse-on-surface": "#eff1f4",
                        "on-primary-fixed": "#0f1b34",
                        "inverse-primary": "#bbc6e7",
                        "secondary-container": "#a9ebed",
                        "on-surface-variant": "#45464d",
                        "on-tertiary-fixed": "#151c27",
                        "tertiary-fixed": "#dce2f3",
                        "primary-fixed": "#d9e2ff",
                        "on-error-container": "#93000a",
                        "on-secondary-fixed": "#002021",
                        "on-tertiary": "#ffffff",
                        "background": "#f7f9fc",
                        "primary": "#09152e",
                        "surface-tint": "#535e7b",
                        "secondary-fixed": "#aceef0",
                        "surface-variant": "#e0e3e6",
                        "surface-container-lowest": "#ffffff",
                        "on-primary-fixed-variant": "#3b4662",
                        "secondary-fixed-dim": "#90d2d4",
                        "primary-fixed-dim": "#bbc6e7",
                        "surface-bright": "#f7f9fc",
                        "on-secondary-fixed-variant": "#004f51",
                        "tertiary-fixed-dim": "#c0c7d6",
                        "on-tertiary-fixed-variant": "#404754",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f2f4f7",
                        "error-container": "#ffdad6",
                        "on-secondary": "#ffffff",
                        "surface-container": "#eceef1",
                        "secondary": "#22686a",
                        "surface": "#f7f9fc",
                        "on-surface": "#191c1e",
                        "on-error": "#ffffff",
                        "tertiary": "#0f1722",
                        "inverse-surface": "#2d3133",
                        "outline": "#76777e"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "container-max": "1280px",
                        "unit-md": "1rem",
                        "margin-mobile": "1rem",
                        "unit-lg": "2rem",
                        "unit-xs": "0.25rem",
                        "gutter": "1.5rem",
                        "unit-sm": "0.5rem",
                        "unit-xl": "4rem",
                        "margin-desktop": "2.5rem"
                    },
                    "fontFamily": {
                        "display-xl": ["Inter"],
                        "headline-lg": ["Inter"],
                        "headline-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .isometric-bg {
            background-image: radial-gradient(circle at 2px 2px, #c6c6ce 1px, transparent 0);
            background-size: 40px 40px;
        }
    </style>
</head>
<body class="bg-surface font-body-md text-on-surface antialiased">
<!-- TopAppBar -->
<header class="fixed top-0 z-50 w-full bg-surface border-b border-outline-variant">
<div class="flex justify-between items-center w-full px-margin-desktop py-unit-md max-w-container-max mx-auto">
<div class="flex items-center gap-unit-md">
<span class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</span>
</div>
<nav class="hidden md:flex items-center gap-unit-lg">
<a class="text-secondary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors duration-200 font-label-md text-label-md" href="#">Solutions</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md" href="#">Methodology</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md" href="#">Case Studies</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md" href="#">Resources</a>
<a class="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md" href="#">Contact</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-lg font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">Get Started</button>
</div>
</div>
</header>
<main class="pt-unit-xl">
<!-- Hero Section -->
<section class="relative overflow-hidden pt-unit-xl pb-unit-xl lg:pt-unit-xl lg:pb-32 isometric-bg">
<div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div class="lg:col-span-7 z-10">
<h1 class="font-display-xl text-display-xl text-primary mb-unit-md">
                        Slimmer werken. <br/>
<span class="text-secondary">Gewoon geregeld.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-unit-lg max-w-xl">
                        Architectonische precisie ontmoet pragmatische executie. Wij bouwen enterprise-grade software die direct waarde toevoegt aan uw organisatie.
                    </p>
<div class="flex flex-wrap gap-unit-md">
<button class="bg-primary text-on-primary px-unit-lg py-unit-md rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Onze Oplossingen</button>
<button class="border border-primary text-primary px-unit-lg py-unit-md rounded-lg font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all">Plan een Demo</button>
</div>
</div>
<div class="lg:col-span-5 relative hidden lg:block">
<div class="bg-white p-unit-md rounded-xl shadow-lg border border-outline-variant relative z-10">
<img alt="Enterprise Dashboard" class="rounded-lg w-full h-auto grayscale-[0.2]" data-alt="A high-fidelity software dashboard showing clean data visualization and architectural precision. The interface uses a professional navy and white color palette with subtle teal accents for action items. The scene is lit by clean, natural daylight, reflecting off the glass of a sleek modern monitor in a high-end corporate office setting. The mood is efficient and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeNkdeJPeWjrZ4BnEGi4s4T6IADFRu1gBsXw19WYX3oLmronVPnwI4boSEuNxLRkqoSlTHazUVYPXpvR9fE9hvqi7fJbsYINQ9JVrbpko0-CboK0mtI1NyUhuU_Z8bXahAvPinui2eMG_LWLBXfMTK8HEUTRZimDdQhJpk0T_XduxQ_XxFjgh6vbAPmOGn-V-TSz6Rvy4m7bqxZrC2mdHWUwHIkiIFg0p2Va18Z4FPH7WknUaismXQXWwUdAwwEEGZEiym1dXdwJM"/>
</div>
<!-- Decorative Isometric Element -->
<div class="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container opacity-20 rounded-xl rotate-12 -z-0"></div>
</div>
</div>
</section>
<!-- Core Values Bento Grid -->
<section class="py-unit-xl bg-surface-container-low">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="text-center mb-unit-xl">
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-sm">Onze Fundamenten</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Waarom toonaangevende organisaties kiezen voor RD Workx.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Value 1 -->
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant flex flex-col items-start hover:shadow-md transition-shadow">
<div class="bg-secondary-container p-unit-sm rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">psychology</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-xs">Slim</h3>
<p class="text-on-surface-variant font-body-md">Intelligente oplossingen die anticiperen op complexe business processen zonder overbodige ballast.</p>
</div>
<!-- Value 2 -->
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant flex flex-col items-start hover:shadow-md transition-shadow">
<div class="bg-secondary-container p-unit-sm rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-xs">Snel</h3>
<p class="text-on-surface-variant font-body-md">Tijd is kapitaal. Onze methodology garandeert een korte Time-to-Value voor elke implementatie.</p>
</div>
<!-- Value 3 -->
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant flex flex-col items-start hover:shadow-md transition-shadow">
<div class="bg-secondary-container p-unit-sm rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-xs">Betrouwbaar</h3>
<p class="text-on-surface-variant font-body-md">Stabiliteit als standaard. Wij bouwen software waar u blindelings op kunt vertrouwen, dag in dag uit.</p>
</div>
<!-- Value 4 (Wide) -->
<div class="md:col-span-2 bg-primary-container p-unit-lg rounded-xl border border-outline-variant flex flex-col md:flex-row items-center gap-unit-lg">
<div class="flex-1">
<div class="bg-on-primary-container p-unit-sm rounded-lg mb-unit-md inline-block">
<span class="material-symbols-outlined text-primary-fixed" style="font-variation-settings: 'FILL' 1;">business</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary-fixed mb-unit-xs">Enterprise-ready</h3>
<p class="text-on-primary-container font-body-md">Schaalbaar, veilig en volledig compliant met de hoogste industrie-standaarden voor grote organisaties.</p>
</div>
<div class="flex-1 w-full h-32 md:h-full bg-primary-fixed-dim/20 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-primary-fixed text-6xl opacity-30">account_tree</span>
</div>
</div>
<!-- Value 5 -->
<div class="bg-white p-unit-lg rounded-xl border border-outline-variant flex flex-col items-start hover:shadow-md transition-shadow">
<div class="bg-secondary-container p-unit-sm rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">handshake</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-xs">Pragmatisch</h3>
<p class="text-on-surface-variant font-body-md">Geen loze beloftes of abstracte theorieën, maar resultaatgerichte software die simpelweg werkt.</p>
</div>
</div>
</div>
</section>
<!-- Methodology Section -->
<section class="py-unit-xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-center">
<div class="order-2 lg:order-1">
<img alt="Methodology" class="rounded-xl shadow-lg border border-outline-variant" data-alt="A minimalist architectural blueprint being reviewed on a large digital touch table. The lighting is focused and cinematic, creating high-contrast shadows. The color palette is restricted to deep navy blues and sharp whites with surgical teal lighting accents. Professional engineers in business casual attire are partially visible in the background, signifying a collaborative and structured enterprise environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfFOeMyDf16-Tod-yhnRkMXuTC-gF7wAU7jhaQLzUwpmHt_-pc-YYFab_qG4Ckt_4qb7yIlEbKzZXnOpDpYxPnSdbQ4ZvAZU_CG6sv4yQHqB1uIBk2RfT7sa-17fwVekc2Mb7gKV8_JlTl538fjIDVWj7IZc4Fksbja9kN7OG9XLJlqmPHY9Ks70EWvbQjDm8hiHZPxlVaZJIg5iWtdMxen5tyk9tpYB5Dh5HruS55mAadlEpXxGxO753nm1ZHJTCsWYTbNzqmoGI"/>
</div>
<div class="order-1 lg:order-2">
<span class="text-secondary font-label-md text-label-md tracking-widest uppercase mb-unit-sm inline-block">Onze Methodology</span>
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-md">Architectuur met Impact.</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg">
                            Wij geloven dat goede software begint bij een solide fundering. Onze methodiek combineert agile snelheid met de robuustheid van traditionele architectuur-principes.
                        </p>
<ul class="space-y-unit-md">
<li class="flex items-start gap-unit-sm">
<span class="material-symbols-outlined text-secondary">check_circle</span>
<div>
<span class="font-bold text-primary">Analyse &amp; Strategie</span>
<p class="text-on-surface-variant text-label-md">We duiken diep in uw processen om de echte knelpunten te identificeren.</p>
</div>
</li>
<li class="flex items-start gap-unit-sm">
<span class="material-symbols-outlined text-secondary">check_circle</span>
<div>
<span class="font-bold text-primary">Iteratieve Ontwikkeling</span>
<p class="text-on-surface-variant text-label-md">Snelle feedback-loops zorgen voor een product dat perfect aansluit op de praktijk.</p>
</div>
</li>
<li class="flex items-start gap-unit-sm">
<span class="material-symbols-outlined text-secondary">check_circle</span>
<div>
<span class="font-bold text-primary">Enterprise Deployment</span>
<p class="text-on-surface-variant text-label-md">Naadloze integratie binnen uw bestaande tech-stack en security protocollen.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<!-- Strategic Enterprise Section -->
<section class="py-unit-xl bg-primary-container text-on-primary">
<div class="max-w-container-max mx-auto px-margin-desktop text-center">
<h2 class="font-display-xl text-headline-lg lg:text-display-xl text-primary-fixed mb-unit-md">Strategic Enterprise Solutions</h2>
<p class="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-unit-xl">
                    Opschalen zonder vertraging. RD Workx biedt het platform voor de volgende stap in uw digitale transformatie.
                </p>
<div class="relative bg-surface-container-lowest/10 p-unit-xl rounded-2xl border border-on-primary-container/20 overflow-hidden">
<div class="absolute inset-0 isometric-bg opacity-10"></div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter relative z-10">
<div class="p-unit-md">
<div class="text-secondary-fixed text-4xl font-bold mb-unit-xs">99.9%</div>
<div class="text-on-primary-container text-label-sm">Uptime Garantie</div>
</div>
<div class="p-unit-md">
<div class="text-secondary-fixed text-4xl font-bold mb-unit-xs">24/7</div>
<div class="text-on-primary-container text-label-sm">Expert Support</div>
</div>
<div class="p-unit-md">
<div class="text-secondary-fixed text-4xl font-bold mb-unit-xs">150+</div>
<div class="text-on-primary-container text-label-sm">Integraties</div>
</div>
<div class="p-unit-md">
<div class="text-secondary-fixed text-4xl font-bold mb-unit-xs">5x</div>
<div class="text-on-primary-container text-label-sm">Snellere Executie</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-unit-xl">
<div class="max-w-4xl mx-auto px-margin-desktop text-center">
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-md">Klaar om de standaard te verhogen?</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg">
                    Laten we bespreken hoe RD Workx uw organisatie kan ondersteunen bij het realiseren van architectonische perfectie en pragmatische winst.
                </p>
<div class="flex flex-col sm:flex-row justify-center gap-unit-md">
<button class="bg-secondary text-on-secondary px-unit-xl py-unit-md rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all">Start uw project</button>
<button class="bg-white border border-outline text-primary px-unit-xl py-unit-md rounded-lg font-bold hover:bg-surface-container transition-all">Neem contact op</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-low border-t border-outline-variant mt-unit-xl">
<div class="w-full px-margin-desktop py-unit-lg flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto gap-unit-md">
<div class="flex flex-col items-center md:items-start gap-unit-xs">
<span class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</span>
<p class="font-body-md text-body-md text-on-surface-variant text-center md:text-left max-w-xs">
                    © 2024 RD Workx. Slimmer werken door architectonische precisie.
                </p>
</div>
<div class="flex flex-wrap justify-center gap-unit-lg">
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm text-label-sm" href="#">Privacy Policy</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm text-label-sm" href="#">Terms of Service</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm text-label-sm" href="#">Security</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-sm text-label-sm" href="#">Architecture</a>
</div>
<div class="flex gap-unit-md">
<button class="p-unit-sm rounded-full border border-outline-variant hover:bg-surface transition-colors focus:ring-2 focus:ring-secondary">
<span class="material-symbols-outlined text-on-surface-variant">language</span>
</button>
</div>
</div>
</footer>
</body></html>