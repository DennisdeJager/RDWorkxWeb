import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Menu,
  Moon,
  SearchCheck,
  Send,
  Sun,
  UsersRound,
  Workflow,
  X
} from 'lucide-react';
import './styles.css';

const logoLightFullSrc = '/assets/rdworkx/logo-light.png';
const logoDarkFullSrc = '/assets/rdworkx/logo-dark.png';
const monogramLightSrc = '/assets/rdworkx/monogram-light.png';
const monogramDarkSrc = '/assets/rdworkx/monogram-dark.png';
const dashboardVisualSrc = '/assets/rdworkx/dashboard-review.png';
const workflowDetailSrc = '/assets/rdworkx/desk-workflow-detail.png';
const problemVisualSrc = '/assets/rdworkx/problem-solving.png';
const themeCookieName = 'rdworkx-theme';
const buildCommit = import.meta.env.VITE_COMMIT_SHA || 'local';
const buildCommitDate = import.meta.env.VITE_COMMIT_DATE || 'lokale build';
const buildCommitLabel = buildCommit === 'local' ? buildCommit : buildCommit.slice(0, 7);
const fallbackTurnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

const navItems = [
  ['wat-we-doen', 'Wat we doen'],
  ['voor-wie', 'Voor wie'],
  ['werkwijze', 'Werkwijze'],
  ['aanbod', 'Aanbod'],
  ['voorbeelden', 'Voorbeelden'],
  ['intake', 'Kennismaken']
];

const whatWeDo = [
  ['Maatwerk apps', 'Praktische applicaties voor desktop en mobiel, afgestemd op jullie dagelijkse werkprocessen.', Blocks],
  ['Slimme koppelingen', 'Systemen, formulieren en documenten automatisch met elkaar laten samenwerken.', Workflow],
  ['Dashboards', 'Direct inzicht in voortgang, werkvoorraad, uitzonderingen en opvolging.', BarChart3],
  ['Documenthulpen', 'Documenten sneller controleren, samenvatten en verwerken.', FileCheck2],
  ['Klantintakes', 'Aanvragen compleet verzamelen en direct naar de juiste stap doorzetten.', UsersRound],
  ['Automatisering', 'Handmatig en terugkerend werk verminderen waar dat veilig en praktisch is.', ClipboardCheck]
];

const audienceSignals = [
  'U ziet kansen om werk slimmer en overzichtelijker te maken',
  'U wilt een praktische oplossing zonder ingewikkeld IT-traject',
  'Uw organisatie werkt met veel documenten, formulieren of klantvragen',
  'Er zijn terugkerende handelingen die eenvoudiger kunnen',
  'U zoekt ervaren softwaremakers die ook de praktijk begrijpen',
  'U wilt snel ontdekken of een idee echt waarde toevoegt'
];

const buildSteps = [
  ['Begrijpen', 'Samen scherp krijgen wat slimmer kan en wanneer iets echt waarde toevoegt.'],
  ['Ontwerpen', 'Het proces vertalen naar een duidelijke en eenvoudige manier van werken.'],
  ['Ontwikkelen', 'Snel een werkende oplossing bouwen met moderne ontwikkeltechnologie.'],
  ['Verbeteren', 'Controleren, testen en verbeteren op basis van dagelijks gebruik.']
];

const offers = [
  {
    title: 'Slimme start',
    label: 'Eerste werkende oplossing',
    text: 'Een kort traject om een idee, proces of werkwijze scherp te krijgen en om te zetten naar een eerste werkende oplossing.',
    points: ['Doel en aanpak scherp krijgen', 'Eerste werkende versie ontwikkelen', 'Snel inzicht in waarde en haalbaarheid']
  },
  {
    title: 'Doorontwikkeling',
    label: 'Stap voor stap verbeteren',
    text: 'Voor oplossingen die stap voor stap verder uitgebouwd worden op basis van dagelijks gebruik en nieuwe inzichten.',
    points: ['Continu verbeteren en uitbreiden', 'Heldere afspraken en korte lijnen', 'Focus op praktische waarde']
  },
  {
    title: 'Maatwerkrealisatie',
    label: 'Voor grotere vraagstukken',
    text: 'Voor grotere of bedrijfskritische oplossingen met integraties, aanvullende beveiliging of complexere processen.',
    points: ['Integraties en koppelingen', 'Extra beveiliging en logging', 'Betrouwbare productieomgeving']
  }
];

const examples = [
  ['Klantintake-assistent', 'Aanvragen compleet verzamelen, informatie controleren en direct goed doorzetten naar de juiste vervolgstap.', UsersRound],
  ['Documentchecker', 'Ontbrekende stukken, risico\'s en aandachtspunten sneller signaleren in documenten en dossiers.', FileCheck2],
  ['Procesdashboard', 'Voortgang, werkvoorraad, knelpunten en opvolging overzichtelijk in beeld brengen.', Blocks],
  ['Rapportagegenerator', 'Van losse input automatisch consistente rapportages, samenvattingen of statusupdates maken.', BarChart3],
  ['Slim zoeken in interne kennis', 'Beleid, dossiers, procedures en projectinformatie snel toegankelijk maken voor medewerkers.', SearchCheck],
  ['Automatisering van terugkerend werk', 'Handmatige stappen verminderen en processen slimmer laten verlopen, met mensen in controle.', Workflow],
  ['Koppelingen tussen systemen', 'Formulieren, documenten, mailboxen en bestaande software beter met elkaar laten samenwerken.', ClipboardCheck],
  ['Maatwerk apps', 'Praktische applicaties die aansluiten op dagelijkse werkprocessen, op desktop, tablet en mobiel.', Blocks]
];

const principles = [
  ['Ervaring eerst', 'Jarenlange softwarepraktijk helpt om snel het verschil te zien tussen handig en onverstandig.'],
  ['Klein beginnen', 'Eerst bewijzen waar waarde zit. Daarna pas groter maken.'],
  ['Modern bouwen', 'Nieuwe ontwikkeltechnologie maakt software sneller en betaalbaarder, zonder het vakmanschap overboord te gooien.'],
  ['Eerlijk kiezen', 'Als iets niets oplevert, moet je het niet bouwen. Zo simpel mag het zijn.']
];

function getCookieValue(name) {
  if (typeof document === 'undefined') {
    return '';
  }

  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split('=')[1] ?? '';
}

function getInitialTheme() {
  const savedTheme = getCookieValue(themeCookieName);

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

function saveTheme(theme) {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${themeCookieName}=${theme}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState('wat-we-doen');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });
  const [turnstileSiteKey, setTurnstileSiteKey] = useState(fallbackTurnstileSiteKey);
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);
  const turnstileWidgetId = useRef(null);
  const headerLogoSrc = theme === 'dark' ? logoDarkFullSrc : logoLightFullSrc;
  const footerLogoSrc = logoDarkFullSrc;
  const contactMonogramSrc = theme === 'dark' ? monogramDarkSrc : monogramLightSrc;

  const closeMenu = () => setMenuOpen(false);
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (!turnstileSiteKey) {
      setContactStatus({
        state: 'error',
        message: 'Het contactformulier is nog niet volledig geconfigureerd.'
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setContactStatus({ state: 'loading', message: 'Uw aanvraag wordt verstuurd...' });

    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify({
          company: formData.get('company'),
          email: formData.get('email'),
          message: formData.get('message'),
          name: formData.get('name'),
          turnstileToken,
          website: formData.get('website')
        }),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Versturen is niet gelukt. Probeer het later nog eens.');
      }

      form.reset();
      window.turnstile?.reset?.(turnstileWidgetId.current);
      setTurnstileToken('');
      setContactStatus({
        state: 'success',
        message: 'Bedankt. Uw aanvraag is verstuurd, we nemen contact met u op.'
      });
    } catch (error) {
      window.turnstile?.reset?.(turnstileWidgetId.current);
      setTurnstileToken('');
      setContactStatus({
        state: 'error',
        message: error.message || 'Versturen is niet gelukt. Probeer het later nog eens.'
      });
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    let ignore = false;

    fetch('/api/public-config')
      .then((response) => response.ok ? response.json() : {})
      .then((config) => {
        if (!ignore && config.turnstileSiteKey) {
          setTurnstileSiteKey(config.turnstileSiteKey);
        }
      })
      .catch(() => {});

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) {
      return undefined;
    }

    let timeoutId;
    let cancelled = false;

    const renderTurnstile = () => {
      if (cancelled) {
        return;
      }

      if (!window.turnstile?.render) {
        timeoutId = window.setTimeout(renderTurnstile, 250);
        return;
      }

      if (turnstileWidgetId.current !== null) {
        window.turnstile.remove?.(turnstileWidgetId.current);
      }

      turnstileRef.current.innerHTML = '';
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        action: 'contact',
        callback: (token) => setTurnstileToken(token),
        'error-callback': () => setTurnstileToken(''),
        'expired-callback': () => setTurnstileToken(''),
        sitekey: turnstileSiteKey,
        theme
      });
    };

    renderTurnstile();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [theme, turnstileSiteKey]);

  useEffect(() => {
    const sectionElements = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const offset = 150;
      const currentSection = sectionElements
        .filter((section) => section.getBoundingClientRect().top <= offset)
        .at(-1);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="RD Workx homepage">
          <img src={headerLogoSrc} alt="RD Workx" />
        </a>

        <nav className={menuOpen ? 'navlinks open' : 'navlinks'} aria-label="Hoofdnavigatie">
          {navItems.map(([id, label]) => (
            <a
              className={activeSection === id ? 'active' : undefined}
              href={`#${id}`}
              key={id}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Schakel licht thema in' : 'Schakel donker thema in'}
            title={theme === 'dark' ? 'Licht thema' : 'Donker thema'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a className="button primary desktop-cta" href="#intake">Plan een gratis intake</a>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="section-label">Software die gewoon werkt</span>
              <h1>
                <span>Slimmer werken.</span>
                <span>Bespaar tijd en geld.</span>
              </h1>
              <p>
                RD Workx bouwt praktische maatwerksoftware voor MKB-bedrijven die af willen van handmatig werk,
                losse systemen en software die niet goed aansluit op de praktijk.
              </p>
              <p>
                Geen ingewikkelde IT-trajecten of onnodig complexe oplossingen, maar software die doet wat nodig is:
                duidelijk, betaalbaar en afgestemd op jouw bedrijf.
              </p>
              <div className="actions">
                <a className="button primary" href="#intake">Plan een gratis intake <ArrowRight size={18} /></a>
                <a className="button secondary dark-button" href="#voorbeelden">Bekijk voorbeelden</a>
              </div>
              <p className="subline">Ervaren softwaremakers die meedenken, snel schakelen en direct waarde toevoegen.</p>
            </div>

            <div className="hero-panel" aria-label="RD Workx aanpak overzicht">
              <div className="panel-header">
                <span className="status-dot" />
                <span>Slim gebouwd. Praktisch opgelost.</span>
              </div>
              <h2>Software die vroeger te complex of te duur leek, is nu wel haalbaar.</h2>
              <div className="node-flow">
                {buildSteps.slice(0, 4).map(([title], index) => (
                  <div className="node-pill" key={title}>
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <span>{title}</span>
                  </div>
                ))}
              </div>
              <div className="panel-metrics">
                <div>
                  <strong>Snel resultaat</strong>
                  <span>zonder lang traject</span>
                </div>
                <div>
                  <strong>Ervaren softwaremakers</strong>
                  <span>korte lijnen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wat-we-doen" className="section problem-section">
          <div className="section-intro left">
            <span className="section-label">Wat we doen</span>
            <h2>Software die werk makkelijker maakt</h2>
            <p>
              We bouwen praktische software die werk sneller, eenvoudiger en overzichtelijker maakt.
              Van maatwerk apps en dashboards tot slimme koppelingen en automatiseringen,
              altijd afgestemd op hoe jouw organisatie werkt.
            </p>
          </div>
          <div className="friction-grid">
            {whatWeDo.map(([title, text, Icon]) => (
              <article className="rdw-card friction-card" key={title}>
                <span className="icon-token"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="voor-wie" className="section audience-section">
          <div className="audience-copy">
            <span className="section-label">Voor wie</span>
            <h2>Voor bedrijven die processen slimmer willen regelen</h2>
            <p>
              Vaak weet u al precies waar tijd verloren gaat. Een intake die handiger kan. Een dashboard dat ontbreekt.
              Een koppeling die handmatig werk blijft veroorzaken. Of een proces dat overzichtelijker kan.
              RD Workx helpt om daar praktische software voor te bouwen: duidelijk, werkbaar en afgestemd op de praktijk.
            </p>
          </div>
          <div className="audience-list">
            {audienceSignals.map((signal) => (
              <div className="check-row" key={signal}>
                <CheckCircle2 size={19} />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="werkwijze" className="section delivery-section">
          <div className="delivery-intro">
            <span className="section-label">Werkwijze</span>
            <h2>Hoe we werken</h2>
            <p>
              Slimme software bouwen is sneller en toegankelijker geworden. Nieuwe technologie maakt veel mogelijk.
              Maar het verschil zit nog steeds in ervaring, keuzes maken en begrijpen wat in de praktijk echt werkt.
              RD Workx helpt bedrijven om moderne technologie nuchter en praktisch toe te passen, zonder hype of onnodige complexiteit.
            </p>
          </div>
          <div className="delivery-grid">
            {buildSteps.map(([title, text], index) => (
              <article className="delivery-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof-section">
          <div className="proof-copy">
            <span className="section-label">Waar wij waarde toevoegen</span>
            <h2>De techniek wordt sneller. Goed kiezen maakt het verschil.</h2>
            <p>
              Nieuwe technologie maakt veel mogelijk. Maar ervaring bepaalt wat in de praktijk echt werkt:
              bruikbaar, veilig en onderhoudbaar. RD Workx helpt bedrijven om daarin slimme en nuchtere keuzes te maken.
              Geen hype, maar praktische software die waarde toevoegt.
            </p>
            <div className="principle-grid">
              {principles.map(([title, text]) => (
                <article className="principle-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="media-stack">
            <img src={dashboardVisualSrc} alt="Dashboard review en procesinzicht van RD Workx" />
            <img src={workflowDetailSrc} alt="Workflow detail met documenten en processtappen" />
          </div>
        </section>

        <section id="aanbod" className="section offer-section">
          <div className="section-intro">
            <span className="section-label">Aanbod</span>
            <h2>Samen kijken wat het beste past</h2>
            <p>
              Niet ieder vraagstuk vraagt om dezelfde aanpak. Soms is een korte slimme start genoeg.
              Soms is doorontwikkeling logisch. En soms vraagt een oplossing om een uitgebreidere maatwerkaanpak.
              Daarom kijken we eerst samen wat praktisch, haalbaar en verantwoord past bij uw organisatie.
            </p>
          </div>
          <div className="offer-grid">
            {offers.map(({ title, label, text, points }) => (
              <article className="offer-card" key={title}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}><CheckCircle2 size={17} /> {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section fit-section">
          <div>
            <span className="section-label">Niet alles hoeft ingewikkeld te zijn</span>
            <h2>Kleine verbeteringen kunnen veel schelen.</h2>
            <p>
              Soms zit de grootste winst juist in kleine verbeteringen: minder handmatig werk,
              beter overzicht of informatie die direct op de juiste plek terechtkomt.
              RD Workx helpt bedrijven om dat praktisch, slim en stap voor stap op te lossen.
            </p>
          </div>
          <div className="fit-panel">
            <h3>Als iets niets oplevert, moet je het niet bouwen.</h3>
            <p>
              Zo simpel mag het zijn. We beginnen klein, bewijzen waarde en bouwen daarna door als het zin heeft.
              Geen ingewikkeld traject of verkooppraat, maar nuchter kijken wat werkt.
            </p>
          </div>
        </section>

        <section id="voorbeelden" className="section examples-section">
          <div className="section-intro">
            <span className="section-label">Voorbeelden</span>
            <h2>Software die dagelijkse processen makkelijker maakt</h2>
            <p>
              Niet ieder bedrijf heeft dezelfde oplossing nodig. Daarom bouwen we geen standaardsoftware,
              maar praktische oplossingen die aansluiten op hoe een organisatie werkt.
            </p>
          </div>
          <div className="example-grid">
            {examples.map(([title, text, Icon]) => (
              <article className="rdw-card example-card" key={title}>
                <span className="icon-token"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section image-band">
          <img src={problemVisualSrc} alt="Samen werken aan een praktische procesoplossing" />
          <div>
            <span className="section-label">Niet alles hoeft ingewikkeld te zijn</span>
            <h2>Soms zit de grootste winst in kleine verbeteringen.</h2>
            <p>
              Minder handmatig werk, beter overzicht of informatie die direct op de juiste plek terechtkomt.
              RD Workx helpt bedrijven om dat praktisch, slim en stap voor stap op te lossen.
            </p>
          </div>
        </section>

        <section id="intake" className="section contact-section">
          <div className="contact-copy">
            <img src={contactMonogramSrc} alt="" aria-hidden="true" />
            <span className="section-label">Gratis intake</span>
            <h2>Heeft u iets waarvan u denkt: dit moet slimmer kunnen?</h2>
            <p>
              Vertel kort waar u tegenaan loopt of wat u wilt verbeteren. Tijdens de intake kijken we samen
              wat praktisch, haalbaar en verstandig is voor uw organisatie. Vaak begint het met een proces
              dat eenvoudiger, sneller of overzichtelijker kan.
            </p>
            <p className="contact-note">
              Gebruik het formulier hieronder. Zo houden we uw aanvraag netjes bij elkaar en staat ons e-mailadres
              niet open en bloot op de site.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>Naam<input type="text" name="name" autoComplete="name" required /></label>
            <label>Bedrijf<input type="text" name="company" autoComplete="organization" /></label>
            <label>E-mail<input type="email" name="email" autoComplete="email" required /></label>
            <label>Wat wilt u slimmer regelen?<textarea name="message" rows="5" required /></label>
            <label className="hp-field">Website<input type="text" name="website" tabIndex="-1" autoComplete="off" /></label>
            {turnstileSiteKey ? (
              <div className="turnstile-wrap">
                <div ref={turnstileRef} />
              </div>
            ) : (
              <p className="form-message error">Captcha is nog niet geconfigureerd.</p>
            )}
            {contactStatus.message ? (
              <p className={`form-message ${contactStatus.state === 'success' ? 'success' : contactStatus.state === 'error' ? 'error' : ''}`}>
                {contactStatus.message}
              </p>
            ) : null}
            <button className="button primary" type="submit" disabled={contactStatus.state === 'loading' || !turnstileSiteKey || !turnstileToken}>
              {contactStatus.state === 'loading' ? 'Versturen...' : 'Plan een gratis intake'} <Send size={16} />
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={footerLogoSrc} alt="RD Workx" />
        </div>
        <div className="footer-links">
          {navItems.map(([id, label]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </div>
        <p className="footer-note">Ervaren softwarebouwers. Moderne aanpak. Gewoon geregeld.</p>
      </footer>

      <aside className="build-info" aria-label="Buildinformatie" tabIndex="0">
        <div className="build-info-panel">
          <span>Commit {buildCommitLabel}</span>
          <time dateTime={buildCommitDate}>{buildCommitDate}</time>
        </div>
      </aside>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
