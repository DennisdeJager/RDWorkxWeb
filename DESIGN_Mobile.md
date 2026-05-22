<!-- RD Workx - Homepage (Mobile) -->
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
                    "surface-container-low": "#f2f4f7",
                    "secondary": "#22686a",
                    "inverse-surface": "#2d3133",
                    "surface": "#f7f9fc",
                    "on-surface-variant": "#45464d",
                    "surface-dim": "#d8dadd",
                    "surface-container": "#eceef1",
                    "tertiary": "#0f1722",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed": "#0f1b34",
                    "on-tertiary-container": "#8b92a1",
                    "tertiary-fixed-dim": "#c0c7d6",
                    "surface-container-highest": "#e0e3e6",
                    "on-surface": "#191c1e",
                    "error-container": "#ffdad6",
                    "on-tertiary-fixed": "#151c27",
                    "surface-container-lowest": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed-variant": "#004f51",
                    "on-tertiary": "#ffffff",
                    "inverse-on-surface": "#eff1f4",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-secondary-fixed": "#002021",
                    "inverse-primary": "#bbc6e7",
                    "secondary-fixed": "#aceef0",
                    "tertiary-container": "#242b37",
                    "primary-fixed-dim": "#bbc6e7",
                    "on-primary-container": "#8691b0",
                    "tertiary-fixed": "#dce2f3",
                    "background": "#f7f9fc",
                    "on-primary-fixed-variant": "#3b4662",
                    "primary": "#09152e",
                    "primary-container": "#1f2a44",
                    "on-background": "#191c1e",
                    "secondary-container": "#a9ebed",
                    "surface-tint": "#535e7b",
                    "primary-fixed": "#d9e2ff",
                    "secondary-fixed-dim": "#90d2d4",
                    "surface-container-high": "#e6e8eb",
                    "surface-variant": "#e0e3e6",
                    "outline": "#76777e",
                    "outline-variant": "#c6c6ce",
                    "surface-bright": "#f7f9fc",
                    "on-secondary-container": "#286c6e",
                    "on-tertiary-fixed-variant": "#404754",
                    "on-error": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-sm": "0.5rem",
                    "unit-md": "1rem",
                    "unit-xs": "0.25rem",
                    "unit-xl": "4rem",
                    "margin-desktop": "2.5rem",
                    "unit-lg": "2rem",
                    "container-max": "1280px",
                    "margin-mobile": "1rem",
                    "gutter": "1.5rem"
            },
            "fontFamily": {
                    "headline-md": ["Inter"],
                    "display-xl": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "headline-lg": ["Inter"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .isometric-bg {
            background-image: radial-gradient(circle at 2px 2px, #c6c6ce 1px, transparent 0);
            background-size: 24px 24px;
            opacity: 0.1;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface text-on-surface font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<header class="fixed top-0 z-50 w-full bg-surface border-b border-outline-variant">
<div class="flex justify-between items-center w-full px-margin-mobile py-unit-md max-w-container-max mx-auto h-16">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</div>
<div class="flex items-center gap-unit-md">
<button class="text-primary p-unit-xs">
<span class="material-symbols-outlined text-[28px]" data-icon="menu">menu</span>
</button>
</div>
</div>
</header>
<main class="pt-16">
<!-- Hero Section -->
<section class="relative px-margin-mobile pt-unit-lg pb-unit-xl overflow-hidden">
<div class="isometric-bg absolute inset-0 -z-10"></div>
<div class="flex flex-col items-start gap-unit-md">
<div class="inline-block bg-secondary-container text-on-secondary-container px-unit-md py-unit-xs rounded-full font-label-md text-label-md">
                    Enterprise Excellence
                </div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary leading-tight">
                    Slimmer werken.<br/><span class="text-secondary">Gewoon geregeld.</span>
</h1>
<p class="font-body-md text-body-md text-on-surface-variant max-w-sm">
                    Wij ontwerpen en realiseren de digitale architectuur die uw organisatie vooruit helpt. Pragmatisch, stabiel en toekomstbestendig.
                </p>
<div class="flex flex-col w-full gap-unit-md pt-unit-md">
<button class="bg-secondary text-on-secondary py-unit-md rounded-lg font-label-md text-label-md font-bold">
                        Get Started
                    </button>
<button class="border border-primary text-primary py-unit-md rounded-lg font-label-md text-label-md font-bold">
                        Onze Methodiek
                    </button>
</div>
</div>
<!-- Scaled-down 3D Monitor Visual -->
<div class="mt-unit-lg relative mx-auto max-w-[320px]">
<div class="bg-white rounded-xl shadow-xl p-unit-xs border border-outline-variant transform -rotate-3 translate-y-4">
<img class="rounded-lg w-full aspect-video object-cover" data-alt="A professional high-fidelity software dashboard displayed on a sleek, minimalist computer monitor. The interface features architectural diagrams and clean data visualizations using a corporate navy and teal color scheme. The lighting is crisp and modern, emphasizing the precision of the software's design. The background is a soft, out-of-focus executive office environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIR7FuU-Abpz7GWaPmTrLCU7u1tLHKVyFT6hxJZNwssVVQlpU8IJ9ZtcLBrWS5c4kf2qiisXU4XfJvHvUwtK00IPbBDpvo5dt0NqmPSVj1SEPfRbFm7tanXsZsc5Z1mT881ZF0De3Ivq2h7kqhgI_1WI6np2p3fIiuEdmu2nibWF99EARElim3maAz6qFDDMZayVMqhG3hLSakoAfwhefDvStAwwHzW8v_jaRmRwzFQp1Ycecv4LlXRJli1M8A-HbT2astImttmDE"/>
</div>
<!-- Decorative Isometric Blocks -->
<div class="absolute -right-4 -top-4 w-12 h-12 bg-secondary opacity-20 rounded-lg transform rotate-45"></div>
<div class="absolute -left-2 bottom-0 w-8 h-8 bg-primary opacity-10 rounded-lg transform -rotate-12"></div>
</div>
</section>
<!-- Stats Section -->
<section class="bg-primary text-on-primary py-unit-lg px-margin-mobile">
<div class="grid grid-cols-2 gap-y-unit-lg gap-x-unit-md">
<div class="flex flex-col">
<span class="text-headline-md font-bold text-secondary-fixed">98%</span>
<span class="text-label-sm text-on-tertiary-container uppercase tracking-wider">Klanttevredenheid</span>
</div>
<div class="flex flex-col">
<span class="text-headline-md font-bold text-secondary-fixed">250+</span>
<span class="text-label-sm text-on-tertiary-container uppercase tracking-wider">Projecten</span>
</div>
<div class="flex flex-col">
<span class="text-headline-md font-bold text-secondary-fixed">12ms</span>
<span class="text-label-sm text-on-tertiary-container uppercase tracking-wider">Avg Latency</span>
</div>
<div class="flex flex-col">
<span class="text-headline-md font-bold text-secondary-fixed">24/7</span>
<span class="text-label-sm text-on-tertiary-container uppercase tracking-wider">Support</span>
</div>
</div>
</section>
<!-- Onze Fundamenten (Single Column Grid) -->
<section class="py-unit-xl px-margin-mobile bg-surface-container-lowest">
<div class="text-center mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-xs">Onze Fundamenten</h2>
<p class="text-body-md text-on-surface-variant">De pijlers onder elk succesvol project.</p>
</div>
<div class="flex flex-col gap-unit-md">
<!-- Card 1 -->
<div class="bg-white p-unit-lg border border-outline-variant rounded-xl shadow-sm">
<div class="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-on-secondary-container" data-icon="architecture">architecture</span>
</div>
<h3 class="font-headline-md text-[20px] text-primary mb-unit-sm">Architectuur</h3>
<p class="text-body-md text-on-surface-variant">Een solide basis die meegroeit met uw ambities. Geen ad-hoc oplossingen, maar een doordacht plan.</p>
</div>
<!-- Card 2 -->
<div class="bg-white p-unit-lg border border-outline-variant rounded-xl shadow-sm">
<div class="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-on-secondary-container" data-icon="speed">speed</span>
</div>
<h3 class="font-headline-md text-[20px] text-primary mb-unit-sm">Efficiëntie</h3>
<p class="text-body-md text-on-surface-variant">Wij automatiseren waar mogelijk, zodat uw team zich kan richten op wat er echt toe doet.</p>
</div>
<!-- Card 3 -->
<div class="bg-white p-unit-lg border border-outline-variant rounded-xl shadow-sm">
<div class="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-unit-md">
<span class="material-symbols-outlined text-on-secondary-container" data-icon="security">security</span>
</div>
<h3 class="font-headline-md text-[20px] text-primary mb-unit-sm">Betrouwbaarheid</h3>
<p class="text-body-md text-on-surface-variant">Enterprise-grade security en uptime zijn bij ons de standaard, nooit een optie.</p>
</div>
</div>
</section>
<!-- Architectuur met Impact Section -->
<section class="py-unit-xl px-margin-mobile bg-surface">
<div class="flex flex-col gap-unit-lg">
<div class="rounded-2xl overflow-hidden border border-outline-variant shadow-lg">
<img class="w-full aspect-square object-cover" data-alt="A modern, high-tech architectural office space with glass walls and clean lines. The environment is flooded with natural light, creating a professional and transparent atmosphere. Visible in the background are digital displays showing architectural grids and complex data structures. The overall mood is one of forward-thinking professional stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmpM_ybWEEagVfScCko-20U8dytGvH-57bM1wy4yKwhDFYpeH_QhIR1GTc_ZKTXoF7ZKb9MZYYtz80IVAgYEV0zMxVvCpFpgNfTH4vJTLD8VCgWxe--GHvpNJc-OmZmMUvcp5NNvJqu2H1psd_fyycnz9SYsLZr85_LHwyPxk9n_Z2rhw19NNQh52a7MJvQNCGwsdJcFdI7jLhVlLRQuOmnnVxoghTGDWwlA0siFZJ9MEzFFX72w2FWoJRe2cehCDyxvKXhFXFPhk"/>
</div>
<div class="flex flex-col gap-unit-md">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Architectuur met Impact</h2>
<p class="text-body-md text-on-surface-variant">
                        RD Workx kijkt verder dan de code. We analyseren de workflow van uw organisatie om systemen te bouwen die daadwerkelijk waarde toevoegen.
                    </p>
<ul class="flex flex-col gap-unit-sm">
<li class="flex items-center gap-unit-sm text-on-surface font-medium">
<span class="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                            Strategisch advies
                        </li>
<li class="flex items-center gap-unit-sm text-on-surface font-medium">
<span class="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                            Naadloze integraties
                        </li>
<li class="flex items-center gap-unit-sm text-on-surface font-medium">
<span class="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                            Cloud Native Solutions
                        </li>
</ul>
<a class="text-secondary font-bold inline-flex items-center gap-unit-xs mt-unit-sm" href="#">
                        Lees onze Case Studies
                        <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-unit-xl px-margin-mobile text-center">
<div class="bg-primary-container p-unit-lg rounded-2xl border border-outline-variant relative overflow-hidden">
<div class="isometric-bg absolute inset-0"></div>
<div class="relative z-10 flex flex-col gap-unit-md">
<h2 class="font-headline-md text-headline-md text-white">Klaar voor de volgende stap?</h2>
<p class="text-on-primary-container text-body-md">Laten we samen kijken hoe we uw architectuur kunnen optimaliseren.</p>
<button class="bg-secondary text-on-secondary py-unit-md rounded-lg font-label-md text-label-md font-bold mt-unit-sm">
                        Plan een demo
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full px-margin-mobile py-unit-lg flex flex-col items-center max-w-container-max mx-auto gap-unit-md bg-surface-container-low border-t border-outline-variant">
<div class="font-headline-md text-headline-md font-bold text-primary">RD Workx</div>
<div class="flex flex-wrap justify-center gap-x-unit-lg gap-y-unit-sm">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Architecture</a>
</div>
<p class="font-body-md text-label-sm text-on-surface-variant text-center">
            © 2024 RD Workx. Slimmer werken door architectonische precisie.
        </p>
</footer>
</body></html>

<!-- RD Workx - Solutions (Mobile) -->
<!DOCTYPE html>

<html lang="nl"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-low": "#f2f4f7",
                        "secondary": "#22686a",
                        "inverse-surface": "#2d3133",
                        "surface": "#f7f9fc",
                        "on-surface-variant": "#45464d",
                        "surface-dim": "#d8dadd",
                        "surface-container": "#eceef1",
                        "tertiary": "#0f1722",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed": "#0f1b34",
                        "on-tertiary-container": "#8b92a1",
                        "tertiary-fixed-dim": "#c0c7d6",
                        "surface-container-highest": "#e0e3e6",
                        "on-surface": "#191c1e",
                        "error-container": "#ffdad6",
                        "on-tertiary-fixed": "#151c27",
                        "surface-container-lowest": "#ffffff",
                        "on-error-container": "#93000a",
                        "on-secondary-fixed-variant": "#004f51",
                        "on-tertiary": "#ffffff",
                        "inverse-on-surface": "#eff1f4",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-fixed": "#002021",
                        "inverse-primary": "#bbc6e7",
                        "secondary-fixed": "#aceef0",
                        "tertiary-container": "#242b37",
                        "primary-fixed-dim": "#bbc6e7",
                        "on-primary-container": "#8691b0",
                        "tertiary-fixed": "#dce2f3",
                        "background": "#f7f9fc",
                        "on-primary-fixed-variant": "#3b4662",
                        "primary": "#09152e",
                        "primary-container": "#1f2a44",
                        "on-background": "#191c1e",
                        "secondary-container": "#a9ebed",
                        "surface-tint": "#535e7b",
                        "primary-fixed": "#d9e2ff",
                        "secondary-fixed-dim": "#90d2d4",
                        "surface-container-high": "#e6e8eb",
                        "surface-variant": "#e0e3e6",
                        "outline": "#76777e",
                        "outline-variant": "#c6c6ce",
                        "surface-bright": "#f7f9fc",
                        "on-secondary-container": "#286c6e",
                        "on-tertiary-fixed-variant": "#404754",
                        "on-error": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-sm": "0.5rem",
                        "unit-md": "1rem",
                        "unit-xs": "0.25rem",
                        "unit-xl": "4rem",
                        "margin-desktop": "2.5rem",
                        "unit-lg": "2rem",
                        "container-max": "1280px",
                        "margin-mobile": "1rem",
                        "gutter": "1.5rem"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "display-xl": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "headline-lg": ["Inter"],
                        "label-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                        "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface text-on-surface">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant">
<nav class="flex justify-between items-center w-full px-margin-mobile py-unit-md mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</div>
<div class="flex items-center gap-unit-sm">
<button class="p-unit-sm">
<span class="material-symbols-outlined text-primary">search</span>
</button>
<button class="p-unit-sm">
<span class="material-symbols-outlined text-primary">menu</span>
</button>
</div>
</nav>
</header>
<main class="pt-[64px] pb-unit-xl">
<!-- Hero Section -->
<section class="relative px-margin-mobile py-unit-lg bg-primary-container text-white overflow-hidden min-h-[500px] flex flex-col justify-center">
<div class="absolute inset-0 opacity-20">
<img class="w-full h-full object-cover" data-alt="A vertical composition showing a modern glass and steel skyscraper reaching into a crisp blue sky. The architectural precision is highlighted by sharp geometric angles and reflective surfaces. The lighting is bright and professional, emphasizing a corporate light-mode aesthetic with teal and navy undertones. The overall mood is aspirational, stable, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDichaoCBi9q-PwqfaPofPVLrLBMXhYmXNJQhj0A4zpW1ZEQ6DVwit5Y0ZYaerpViqhc5DUjWK1vtSsal33z0jiWeHLG5XgqzEglMq5Q8a5AdDB5IMiNhmMovIQbDY8Dckr_nmAfvhix96OlzDNO9SC5Tm0RoI9w_5fgweZ8R4Xwi8Lm_uVXNah4RVh_-4OkzAl43CY6wbLLJK90bJWCUaW6gCrQU_mAKKeQhjHSJQN-bFBwosM9erFdxOMbTZ3ftK6blnub4Esrik"/>
</div>
<div class="relative z-10 space-y-unit-md">
<span class="inline-block px-unit-sm py-unit-xs bg-secondary text-white font-label-sm text-label-sm uppercase tracking-wider rounded-lg">Solutions</span>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile font-bold leading-tight">Architectural precision for modern enterprises</h1>
<p class="font-body-md text-body-md text-on-primary-container">Wij bouwen de stabiele fundamenten die uw organisatie nodig heeft om slimmer te werken en sneller te groeien.</p>
<div class="pt-unit-md">
<button class="w-full bg-secondary text-on-secondary py-unit-md font-label-md text-label-md rounded-lg shadow-lg active:opacity-80 active:scale-95 transition-all">Get Started</button>
</div>
</div>
</section>
<!-- Engineered for Stability -->
<section class="px-margin-mobile py-unit-xl">
<div class="text-center mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-xs">Engineered for Stability</h2>
<div class="w-12 h-1 bg-secondary mx-auto"></div>
</div>
<div class="flex flex-col gap-unit-md">
<!-- Feature Card 1 -->
<div class="p-unit-lg bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col gap-unit-sm">
<span class="material-symbols-outlined text-secondary text-4xl">architecture</span>
<h3 class="font-headline-md text-headline-md text-primary">Scalable Core</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Een architectuur die meegroeit met uw succes, zonder compromissen op snelheid of betrouwbaarheid.</p>
</div>
<!-- Feature Card 2 -->
<div class="p-unit-lg bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col gap-unit-sm">
<span class="material-symbols-outlined text-secondary text-4xl">security</span>
<h3 class="font-headline-md text-headline-md text-primary">Enterprise Security</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Robuuste beveiliging verweven in elk aspect van de oplossing, van datalaag tot interface.</p>
</div>
<!-- Feature Card 3 -->
<div class="p-unit-lg bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col gap-unit-sm">
<span class="material-symbols-outlined text-secondary text-4xl">auto_graph</span>
<h3 class="font-headline-md text-headline-md text-primary">Efficiency First</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Pragmatische workflows die handmatige taken elimineren en de focus terugbrengen naar de kern.</p>
</div>
</div>
</section>
<!-- Testimonial Section -->
<section class="px-margin-mobile py-unit-xl bg-surface-container-low">
<div class="mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-primary">Trusted by Leaders</h2>
</div>
<div class="relative p-unit-lg bg-white rounded-xl shadow-sm border-l-4 border-secondary">
<div class="flex items-center gap-unit-sm mb-unit-md">
<div class="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
<img class="w-full h-full object-cover" data-alt="A professional portrait of a female executive in a modern office setting. She is wearing a dark navy blazer over a white shirt, exuding confidence and expertise. The lighting is soft and natural, emphasizing a high-end corporate environment. The aesthetic is clean and professional, aligned with the RD Workx brand values of precision and stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvfC8kXBuOZWH9z8gIDARpayy0xHCoODONvuteBvtmOqvQGFCwaD-DnbpDOLd79A9MJijZys86bjP_3txjPLpkmDB5IXqkpk-Qyjs6HHnaO5bwhBBaxSVpso--O9Xb-KyOnhQI8EtJS3tMIMzFZV9zCNN48dWyrzSEy9aT4htb97yS-EBSH8y7-3VEd6mq5urdhY5jEv2MtYJCUvR2OMOwAo6-lm847AsL9wknqI5v68U3JyunVqjyohGmQw5lMTjCFUCMXdauJqw"/>
</div>
<div>
<div class="font-label-md text-label-md text-primary">Annelies de Vries</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">CTO, Nexus Global</div>
</div>
</div>
<p class="font-body-md text-body-md italic text-on-surface italic">"RD Workx heeft onze operationele efficiëntie met 40% verhoogd door hun diepgaande kennis van architecturale precisie."</p>
<div class="mt-unit-md flex gap-1">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="px-margin-mobile py-unit-xl text-center bg-primary text-white">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile mb-unit-md">Klaar om de volgende stap te zetten?</h2>
<p class="font-body-md text-body-md text-on-primary-container mb-unit-lg">Neem vandaag nog contact op voor een strategisch adviesgesprek over uw digitale architectuur.</p>
<div class="flex flex-col gap-unit-md">
<button class="w-full bg-secondary text-white py-unit-md font-label-md text-label-md rounded-lg active:scale-95 transition-transform">Get Started</button>
<button class="w-full border border-outline-variant text-white py-unit-md font-label-md text-label-md rounded-lg active:scale-95 transition-transform">Contact Sales</button>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-low border-t border-outline-variant px-margin-mobile py-unit-lg pb-[80px]">
<div class="flex flex-col gap-unit-md">
<div class="font-headline-md text-headline-md font-bold text-primary">RD Workx</div>
<p class="font-body-md text-body-md text-on-surface-variant">© 2024 RD Workx. Slimmer werken door architectonische precisie.</p>
<div class="grid grid-cols-2 gap-unit-sm">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">Security</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">Architecture</a>
</div>
</div>
</footer>
<!-- BottomNavBar (Mobile Context) -->
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-outline-variant px-margin-mobile py-unit-sm md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
<div class="flex justify-between items-center max-w-container-max mx-auto">
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors duration-200" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-sm text-[10px]">Home</span>
</a>
<a class="flex flex-col items-center gap-1 text-secondary font-bold transition-colors duration-200" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
<span class="font-label-sm text-[10px]">Solutions</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors duration-200" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-label-sm text-[10px]">Methodology</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors duration-200" href="#">
<span class="material-symbols-outlined">business_center</span>
<span class="font-label-sm text-[10px]">Case Studies</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors duration-200" href="#">
<span class="material-symbols-outlined">mail</span>
<span class="font-label-sm text-[10px]">Contact</span>
</a>
</div>
</nav>
</body></html>

<!-- RD Workx - Presentation (Mobile) -->
<!DOCTYPE html>

<html lang="nl"><head>
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
                    "surface-container-low": "#f2f4f7",
                    "secondary": "#22686a",
                    "inverse-surface": "#2d3133",
                    "surface": "#f7f9fc",
                    "on-surface-variant": "#45464d",
                    "surface-dim": "#d8dadd",
                    "surface-container": "#eceef1",
                    "tertiary": "#0f1722",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed": "#0f1b34",
                    "on-tertiary-container": "#8b92a1",
                    "tertiary-fixed-dim": "#c0c7d6",
                    "surface-container-highest": "#e0e3e6",
                    "on-surface": "#191c1e",
                    "error-container": "#ffdad6",
                    "on-tertiary-fixed": "#151c27",
                    "surface-container-lowest": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed-variant": "#004f51",
                    "on-tertiary": "#ffffff",
                    "inverse-on-surface": "#eff1f4",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-secondary-fixed": "#002021",
                    "inverse-primary": "#bbc6e7",
                    "secondary-fixed": "#aceef0",
                    "tertiary-container": "#242b37",
                    "primary-fixed-dim": "#bbc6e7",
                    "on-primary-container": "#8691b0",
                    "tertiary-fixed": "#dce2f3",
                    "background": "#f7f9fc",
                    "on-primary-fixed-variant": "#3b4662",
                    "primary": "#09152e",
                    "primary-container": "#1f2a44",
                    "on-background": "#191c1e",
                    "secondary-container": "#a9ebed",
                    "surface-tint": "#535e7b",
                    "primary-fixed": "#d9e2ff",
                    "secondary-fixed-dim": "#90d2d4",
                    "surface-container-high": "#e6e8eb",
                    "surface-variant": "#e0e3e6",
                    "outline": "#76777e",
                    "outline-variant": "#c6c6ce",
                    "surface-bright": "#f7f9fc",
                    "on-secondary-container": "#286c6e",
                    "on-tertiary-fixed-variant": "#404754",
                    "on-error": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-sm": "0.5rem",
                    "unit-md": "1rem",
                    "unit-xs": "0.25rem",
                    "unit-xl": "4rem",
                    "margin-desktop": "2.5rem",
                    "unit-lg": "2rem",
                    "container-max": "1280px",
                    "margin-mobile": "1rem",
                    "gutter": "1.5rem"
            },
            "fontFamily": {
                    "headline-md": ["Inter"],
                    "display-xl": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "headline-lg": ["Inter"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .isometric-bg {
            background-image: radial-gradient(circle at 2px 2px, #c6c6ce 1px, transparent 0);
            background-size: 24px 24px;
        }
        .canvas-shadow {
            box-shadow: 0 20px 40px -10px rgba(31, 42, 68, 0.08);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface text-on-surface font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<header class="bg-surface dark:bg-surface-container border-b border-outline-variant dark:border-on-surface-variant docked full-width top-0 sticky z-50">
<nav class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit-md max-w-container-max mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">RD Workx</div>
<div class="hidden md:flex items-center gap-unit-lg">
<a class="text-on-surface-variant dark:text-on-tertiary-container font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200" href="#">Solutions</a>
<a class="text-on-surface-variant dark:text-on-tertiary-container font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200" href="#">Methodology</a>
<a class="text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary dark:border-secondary-fixed pb-1" href="#">Resources</a>
<a class="text-on-surface-variant dark:text-on-tertiary-container font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200" href="#">Case Studies</a>
</div>
<button class="bg-secondary text-on-secondary px-unit-md py-unit-sm rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">
                Get Started
            </button>
</nav>
</header>
<main class="min-h-screen">
<!-- Presentation Canvas Section -->
<section class="px-margin-mobile py-unit-lg max-w-container-max mx-auto">
<!-- Mobile Presentation Shell -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden canvas-shadow flex flex-col aspect-[9/16] max-w-[400px] mx-auto">
<!-- Slide Top Header -->
<div class="p-unit-md bg-primary text-on-primary flex justify-between items-center">
<span class="font-label-sm tracking-widest opacity-70">STRATEGY 2024</span>
<div class="flex gap-unit-xs">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<div class="w-2 h-2 rounded-full bg-on-primary/20"></div>
<div class="w-2 h-2 rounded-full bg-on-primary/20"></div>
</div>
</div>
<!-- Slide Content -->
<div class="flex-1 p-unit-md flex flex-col gap-unit-lg overflow-y-auto isometric-bg">
<!-- Headline Section -->
<div class="pt-unit-md">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-unit-sm">Slimmer werken door precisie</h1>
<div class="h-1 w-12 bg-secondary rounded-full"></div>
</div>
<!-- Bullet Points -->
<div class="space-y-unit-md">
<div class="flex gap-unit-md">
<div class="flex-shrink-0 w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[20px]" data-icon="architecture">architecture</span>
</div>
<div>
<p class="font-label-md text-primary">Architectonische Fundering</p>
<p class="font-body-md text-on-surface-variant text-sm">Structurele stabiliteit voor complexe enterprise data workflows.</p>
</div>
</div>
<div class="flex gap-unit-md">
<div class="flex-shrink-0 w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[20px]" data-icon="bolt">bolt</span>
</div>
<div>
<p class="font-label-md text-primary">Operationele Snelheid</p>
<p class="font-body-md text-on-surface-variant text-sm">Elimineer overhead door pragmatische interface interacties.</p>
</div>
</div>
<div class="flex gap-unit-md">
<div class="flex-shrink-0 w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[20px]" data-icon="dashboard_customize">dashboard_customize</span>
</div>
<div>
<p class="font-label-md text-primary">Pragmatische Flexibiliteit</p>
<p class="font-body-md text-on-surface-variant text-sm">Modulaire blokken die zich aanpassen aan uw zakelijke behoeften.</p>
</div>
</div>
</div>
<!-- Simplified Dashboard Visual -->
<div class="mt-auto pt-unit-md">
<div class="bg-surface-container rounded border border-outline-variant p-unit-sm">
<div class="flex items-center justify-between mb-unit-sm">
<span class="font-label-sm text-on-surface-variant">EFFICIENCY METRIC</span>
<span class="font-label-sm text-secondary font-bold">+24%</span>
</div>
<div class="grid grid-cols-4 gap-unit-xs items-end h-20">
<div class="bg-primary/20 h-[40%] rounded-sm"></div>
<div class="bg-primary/20 h-[65%] rounded-sm"></div>
<div class="bg-secondary h-[90%] rounded-sm"></div>
<div class="bg-primary/20 h-[55%] rounded-sm"></div>
</div>
</div>
</div>
</div>
<!-- Slide Footer Navigation -->
<div class="p-unit-md border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
<button class="flex items-center gap-unit-xs text-primary font-label-md opacity-50">
<span class="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
                        Vorige
                    </button>
<span class="font-label-sm text-on-surface-variant">9 / 24</span>
<button class="flex items-center gap-unit-xs text-primary font-label-md">
                        Volgende
                        <span class="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<!-- Page Context / Review Instructions -->
<div class="mt-unit-xl max-w-lg mx-auto text-center space-y-unit-md">
<div class="inline-flex items-center gap-unit-sm px-unit-md py-unit-xs bg-secondary/10 text-secondary rounded-full font-label-sm">
<span class="material-symbols-outlined text-[14px]" data-icon="mobile_friendly">mobile_friendly</span>
                    MOBILE PREVIEW MODE
                </div>
<h2 class="font-headline-md text-headline-md text-primary">Presentatie Review</h2>
<p class="font-body-md text-on-surface-variant">U bekijkt momenteel de mobiele weergave van het RD Workx strategie deck. Alle elementen zijn geoptimaliseerd voor leesbaarheid op kleinere schermen zonder verlies van architectonische precisie.</p>
<div class="flex flex-col gap-unit-sm">
<button class="w-full bg-primary text-on-primary py-unit-md rounded-lg font-label-md flex items-center justify-center gap-unit-sm">
<span class="material-symbols-outlined" data-icon="download">download</span>
                        Download als PDF
                    </button>
<button class="w-full border border-primary text-primary py-unit-md rounded-lg font-label-md">
                        Deel met team
                    </button>
</div>
</div>
</section>
<!-- Feature Bento Mockup (Mobile optimized) -->
<section class="bg-surface-container px-margin-mobile py-unit-xl">
<div class="max-w-container-max mx-auto space-y-unit-lg">
<h3 class="font-headline-md text-headline-md text-primary text-center">Waarom Mobiel Reviewen?</h3>
<div class="grid grid-cols-1 gap-unit-md">
<!-- Bento Item 1 -->
<div class="bg-surface-container-lowest p-unit-lg rounded-xl border border-outline-variant">
<span class="material-symbols-outlined text-secondary mb-unit-md" data-icon="speed">speed</span>
<h4 class="font-label-md text-primary mb-unit-xs">Snel Schakelen</h4>
<p class="font-body-md text-sm text-on-surface-variant">Review decks tussen meetings door met geoptimaliseerde laadtijden.</p>
</div>
<!-- Bento Item 2 -->
<div class="bg-primary text-on-primary p-unit-lg rounded-xl flex flex-col justify-between overflow-hidden relative">
<div>
<span class="material-symbols-outlined text-secondary-fixed mb-unit-md" data-icon="edit_note">edit_note</span>
<h4 class="font-label-md mb-unit-xs">Directe Feedback</h4>
<p class="font-body-md text-sm text-on-primary-container">Voeg annotaties toe direct vanaf uw smartphone of tablet.</p>
</div>
<!-- Background decoration -->
<div class="absolute -right-4 -bottom-4 opacity-10">
<span class="material-symbols-outlined text-[120px]" data-icon="grid_view">grid_view</span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant w-full px-margin-mobile md:px-margin-desktop py-unit-lg flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto gap-unit-md">
<div class="flex flex-col items-center md:items-start gap-unit-xs">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">RD Workx</div>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container text-center md:text-left">
                © 2024 RD Workx. Slimmer werken door architectonische precisie.
            </p>
</div>
<div class="flex gap-unit-lg">
<a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors font-semibold text-secondary" href="#">Architecture</a>
</div>
</footer>
</body></html>

<!-- RD Workx - Document (Mobile) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-low": "#f2f4f7",
                    "secondary": "#22686a",
                    "inverse-surface": "#2d3133",
                    "surface": "#f7f9fc",
                    "on-surface-variant": "#45464d",
                    "surface-dim": "#d8dadd",
                    "surface-container": "#eceef1",
                    "tertiary": "#0f1722",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed": "#0f1b34",
                    "on-tertiary-container": "#8b92a1",
                    "tertiary-fixed-dim": "#c0c7d6",
                    "surface-container-highest": "#e0e3e6",
                    "on-surface": "#191c1e",
                    "error-container": "#ffdad6",
                    "on-tertiary-fixed": "#151c27",
                    "surface-container-lowest": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed-variant": "#004f51",
                    "on-tertiary": "#ffffff",
                    "inverse-on-surface": "#eff1f4",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-secondary-fixed": "#002021",
                    "inverse-primary": "#bbc6e7",
                    "secondary-fixed": "#aceef0",
                    "tertiary-container": "#242b37",
                    "primary-fixed-dim": "#bbc6e7",
                    "on-primary-container": "#8691b0",
                    "tertiary-fixed": "#dce2f3",
                    "background": "#f7f9fc",
                    "on-primary-fixed-variant": "#3b4662",
                    "primary": "#09152e",
                    "primary-container": "#1f2a44",
                    "on-background": "#191c1e",
                    "secondary-container": "#a9ebed",
                    "surface-tint": "#535e7b",
                    "primary-fixed": "#d9e2ff",
                    "secondary-fixed-dim": "#90d2d4",
                    "surface-container-high": "#e6e8eb",
                    "surface-variant": "#e0e3e6",
                    "outline": "#76777e",
                    "outline-variant": "#c6c6ce",
                    "surface-bright": "#f7f9fc",
                    "on-secondary-container": "#286c6e",
                    "on-tertiary-fixed-variant": "#404754",
                    "on-error": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-sm": "0.5rem",
                    "unit-md": "1rem",
                    "unit-xs": "0.25rem",
                    "unit-xl": "4rem",
                    "margin-desktop": "2.5rem",
                    "unit-lg": "2rem",
                    "container-max": "1280px",
                    "margin-mobile": "1rem",
                    "gutter": "1.5rem"
            },
            "fontFamily": {
                    "headline-md": ["Inter"],
                    "display-xl": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "headline-lg": ["Inter"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "display-xl": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f7f9fc;
            color: #191c1e;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface selection:bg-secondary-container">
<!-- Top Navigation -->
<nav class="bg-surface sticky top-0 z-50 border-b border-outline-variant w-full px-margin-mobile py-unit-md flex justify-between items-center">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-primary" data-icon="description">description</span>
<span class="font-headline-md text-headline-md font-bold text-primary tracking-tight">RD Workx</span>
</div>
<button class="p-unit-xs">
<span class="material-symbols-outlined text-on-surface" data-icon="more_vert">more_vert</span>
</button>
</nav>
<!-- Document Wrapper -->
<main class="max-w-container-max mx-auto px-margin-mobile py-unit-lg">
<!-- Document Header -->
<header class="mb-unit-lg border-l-4 border-secondary pl-unit-md">
<div class="flex items-center gap-unit-xs mb-unit-xs">
<span class="bg-primary-container text-on-primary-container px-unit-sm py-unit-xs rounded text-[10px] font-bold tracking-widest uppercase">Confidential</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Report ID: #SMA-2024-882</span>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Architectural Efficiency Audit</h1>
<p class="font-body-md text-body-md text-on-surface-variant mt-unit-xs">Prepared for: Enterprise Solutions Group</p>
</header>
<!-- KPI Stack -->
<section class="grid grid-cols-2 gap-unit-sm mb-unit-lg">
<div class="bg-surface-container-lowest p-unit-md border border-outline-variant rounded-xl">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-unit-xs">Efficiency Score</p>
<div class="flex items-baseline gap-unit-xs">
<span class="font-headline-md text-headline-md text-secondary">94%</span>
<span class="material-symbols-outlined text-secondary text-sm" data-icon="trending_up">trending_up</span>
</div>
</div>
<div class="bg-surface-container-lowest p-unit-md border border-outline-variant rounded-xl">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-unit-xs">Resource Gap</p>
<div class="flex items-baseline gap-unit-xs">
<span class="font-headline-md text-headline-md text-primary">12.4%</span>
<span class="material-symbols-outlined text-error text-sm" data-icon="warning">warning</span>
</div>
</div>
<div class="bg-surface-container-lowest p-unit-md border border-outline-variant rounded-xl col-span-2">
<p class="font-label-sm text-label-sm text-on-surface-variant mb-unit-xs">Implementation Velocity</p>
<div class="w-full bg-surface-container-highest h-2 rounded-full mt-unit-sm">
<div class="bg-secondary h-2 rounded-full" style="width: 78%;"></div>
</div>
<div class="flex justify-between mt-unit-xs">
<span class="font-label-sm text-label-sm text-secondary">Accelerated</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">78/100</span>
</div>
</div>
</section>
<!-- Executive Summary -->
<section class="mb-unit-lg bg-surface-container-lowest p-unit-lg border border-outline-variant rounded-xl">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-md border-b border-outline-variant pb-unit-sm">Executive Summary</h2>
<div class="space-y-unit-md">
<p class="font-body-md text-body-md text-on-surface leading-relaxed">
                    The current architectural framework demonstrates robust horizontal scalability, yet exhibits significant latency bottlenecks in cross-departmental data synchronization. Our audit identifies three critical intervention points for "Slimmer werken" optimization.
                </p>
<ul class="space-y-unit-sm">
<li class="flex gap-unit-sm items-start">
<span class="material-symbols-outlined text-secondary mt-1 text-base" data-icon="check_circle">check_circle</span>
<span class="font-body-md text-body-md text-on-surface">Centralization of infrastructure micro-services into a unified RD Workx-Hub.</span>
</li>
<li class="flex gap-unit-sm items-start">
<span class="material-symbols-outlined text-secondary mt-1 text-base" data-icon="check_circle">check_circle</span>
<span class="font-body-md text-body-md text-on-surface">Reduction of overhead through automated dependency resolution.</span>
</li>
<li class="flex gap-unit-sm items-start">
<span class="material-symbols-outlined text-secondary mt-1 text-base" data-icon="check_circle">check_circle</span>
<span class="font-body-md text-body-md text-on-surface">Integration of predictive scaling for cloud-native workloads.</span>
</li>
</ul>
</div>
</section>
<!-- Visualization -->
<section class="mb-unit-lg">
<div class="relative overflow-hidden rounded-xl aspect-[16/9] border border-outline-variant">
<img alt="Data Visualization" class="w-full h-full object-cover grayscale opacity-20" data-alt="A clean and professional architectural blueprint overlaying a high-tech data visualization screen. The image features isometric line art of building structures integrated with glowing teal data nodes and thin light gray grid lines. The lighting is bright and modern, suggesting a high-end enterprise dashboard environment. The color palette is strictly limited to deep navy, surgical teal, and cool grays, maintaining a corporate and reliable aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQkMv4dfvS1Lq947pyVvgkMBZpPxoZhYmJQ7695OYx1uQRuM_AA_sQ70jhumJBN8hZWTkhyWdUYzTIAePZb5w29F5aTuFg2Mh5LUTgosqy4zqJCOA5ZnNstQKULuflm3xrMGKGgm5p7KIbbmGr6gswd7pAyg4JMsF9DUf4pkgc107V3rPxEmOoXKs2YpREBndhssy1xi_dId0US54UiAMmIumVADDYtRIXnSsyW61wS46sIFZS_HkIUnsdDAFoND0Evi4BPLFb_wU"/>
<div class="absolute inset-0 flex flex-col justify-center items-center p-unit-lg text-center bg-white/40 backdrop-blur-sm">
<span class="material-symbols-outlined text-primary text-4xl mb-unit-sm" data-icon="architecture">architecture</span>
<h3 class="font-headline-md text-headline-md text-primary">System Integrity Model</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant max-w-[200px]">Interactive visualization available in desktop portal v4.2</p>
</div>
</div>
</section>
<!-- Methodology Mini-Section -->
<section class="mb-unit-xl">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-sm">Methodology</h2>
<div class="space-y-unit-md border-l-2 border-surface-container-highest pl-unit-md">
<div>
<h4 class="font-label-md text-label-md text-secondary uppercase tracking-wider mb-unit-xs">Phase 1: Discovery</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Continuous telemetry monitoring across 48 operational clusters over 30 business days.</p>
</div>
<div>
<h4 class="font-label-md text-label-md text-secondary uppercase tracking-wider mb-unit-xs">Phase 2: Stress Testing</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Simulated architectural failures to measure redundancy and recovery velocity.</p>
</div>
</div>
</section>
</main>
<!-- Digital Verification Footer -->
<footer class="bg-surface-container-low border-t border-outline-variant w-full px-margin-mobile py-unit-lg flex flex-col items-center gap-unit-md text-center">
<div class="flex flex-col items-center gap-unit-sm">
<div class="flex items-center gap-unit-xs">
<span class="material-symbols-outlined text-secondary" data-icon="verified" data-weight="fill">verified</span>
<span class="font-label-md text-label-md text-on-surface font-bold">Verified by RD Workx Protocol</span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant">Timestamp: 2024-11-20T14:42:01.000Z</p>
<div class="w-16 h-16 bg-white p-unit-xs border border-outline-variant rounded-lg">
<img alt="Verification QR" class="w-full h-full grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9r6HvuEkwQow4JNeaUqkJyC-4Ik0g_GnS13gPGmVJyRN5lsWVJsZM86SNoj6Fv_gNGTteMdEXVCK8wewk4myhlut7sfcfo9FV6jPaaReSaNQvJp8i5MHa4uVpXgdSg7Jh9jY_tK8RTDOiReSrSQqp5_6lJL7oo82luIChqOgaVH4TqN-G56iVWiAR94CKY2mRtQYYGFXFC37DorSXVPka5rs512Xlfm0fnxgWP0TPuYbLlDLks_zFCPbItjie0e0QzTbtLcOxJhA"/>
</div>
</div>
<div class="flex flex-col gap-unit-xs">
<p class="font-body-md text-body-md text-on-surface-variant italic">"Slimmer werken door architectonische precisie."</p>
<p class="font-label-sm text-label-sm text-on-tertiary-container">© 2024 RD Workx. All rights reserved.</p>
</div>
<div class="flex gap-unit-md mt-unit-sm">
<span class="font-label-sm text-label-sm text-secondary">Privacy Policy</span>
<span class="font-label-sm text-label-sm text-secondary">Security</span>
</div>
</footer>
<!-- Bottom Navigation Bar (Mobile Destination Rule) -->
<nav class="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant flex justify-around items-center py-unit-sm px-unit-md z-50 md:hidden">
<div class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</div>
<div class="flex flex-col items-center text-secondary font-bold">
<span class="material-symbols-outlined" data-icon="article" data-weight="fill">article</span>
<span class="font-label-sm text-label-sm">Reports</span>
</div>
<div class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="insights">insights</span>
<span class="font-label-sm text-label-sm">Analytics</span>
</div>
<div class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-sm text-label-sm">Settings</span>
</div>
</nav>
<!-- Spacer for Bottom Nav -->
<div class="h-16 md:hidden"></div>
</body></html>
