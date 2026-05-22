import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Mail,
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

const navItems = [
  ['wat-we-doen', 'Wat we doen'],
  ['voor-wie', 'Voor wie'],
  ['waarom-nu', 'Waarom nu'],
  ['aanbod', 'Aanbod'],
  ['voorbeelden', 'Voorbeelden'],
  ['intake', 'Intake']
];

const whatWeDo = [
  ['Maatwerk apps', 'Praktische webapplicaties die precies aansluiten op hoe uw organisatie werkt.', Blocks],
  ['Slimme koppelingen', 'Systemen, formulieren, documenten en data beter met elkaar laten samenwerken.', Workflow],
  ['Dashboards', 'Overzicht in voortgang, werkvoorraad, uitzonderingen en opvolging.', BarChart3],
  ['Documenthulpen', 'Informatie sneller controleren, samenvatten en klaarmaken voor vervolgwerk.', FileCheck2],
  ['Klantintakes', 'Aanvragen compleet binnenhalen en direct goed doorzetten naar de juiste stap.', UsersRound],
  ['Automatisering', 'Terugkerende handelingen verminderen waar dat veilig en zinvol is.', ClipboardCheck]
];

const audienceSignals = [
  'U ziet kansen om werk slimmer en overzichtelijker te maken',
  'U wilt geen groot IT-traject om een praktische oplossing te krijgen',
  'Uw organisatie werkt met veel documenten, dossiers, formulieren of klantvragen',
  'Er zijn terugkerende handelingen die eenvoudiger kunnen',
  'U zoekt ervaren softwaremensen die ook de praktijk begrijpen',
  'U wilt snel zien of een idee waarde heeft voordat u groot investeert'
];

const buildSteps = [
  ['Scherp krijgen', 'We maken samen duidelijk wat de oplossing moet doen en wanneer het waarde heeft.'],
  ['Ontwerpen', 'We vertalen het idee naar een logische, eenvoudige manier van werken.'],
  ['Bouwen', 'Met moderne ontwikkeltechnologie maken we snel een werkende eerste versie.'],
  ['Testen', 'We controleren of het klopt, veilig is en past bij de dagelijkse praktijk.'],
  ['Opleveren', 'Wat goed werkt, maken we betrouwbaar bruikbaar voor dagelijks gebruik.']
];

const offers = [
  {
    title: 'Software abonnement',
    label: 'Gespreid investeren',
    text: 'Voor een helder afgebakende oplossing. De eerste waarde wordt snel zichtbaar, daarna blijft de software draaien en verbeteren binnen afgesproken grenzen.',
    points: ['Snel een eerste werkende versie', 'Continuiteit en kleine verbeteringen', 'Heldere scope en maandbedrag']
  },
  {
    title: 'Slimme Start',
    label: 'Slimme Start',
    text: 'Een kort traject om een idee of werkwijze scherp te krijgen en om te zetten naar een eerste werkende versie. Ideaal wanneer waarde eerst bewezen moet worden.',
    points: ['Doel en werkwijze scherp', 'Duidelijke keuzes en grenzen', 'Eerste werkende versie']
  },
  {
    title: 'Maatwerkrealisatie',
    label: 'Voor complexer werk',
    text: 'Voor zware integraties, aanvullende beveiliging, grotere scope of bedrijfskritische processen. Dan begroten we wat nodig is om verantwoord te leveren.',
    points: ['Integraties en rollen', 'Extra security en logging', 'Productiewaardige realisatie']
  }
];

const fitOutcomes = [
  'Geschikt voor een abonnement',
  'Geschikt met hogere maandprijs',
  'Eerst een Sprint of Slimme Start nodig',
  'Maatwerkrealisatie nodig',
  'Niet verstandig om te bouwen'
];

const examples = [
  ['Klant-intake-assistent', 'Aanvragen compleet binnenhalen en direct goed samenvatten.', UsersRound],
  ['Documentchecker', 'Ontbrekende stukken, risico’s en aandachtspunten sneller vinden.', FileCheck2],
  ['Procesdashboard', 'Voortgang, knelpunten en opvolging zichtbaar maken.', Blocks],
  ['Rapportagegenerator', 'Van losse input naar consistente adviezen of statusupdates.', BarChart3],
  ['Interne kennisbank', 'Antwoorden uit beleid, dossiers en projectkennis bruikbaar maken.', SearchCheck],
  ['Workflow-automatisering', 'Terugkerende stappen laten lopen met mensen aan de knoppen.', Workflow]
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
  const headerLogoSrc = theme === 'dark' ? logoDarkFullSrc : logoLightFullSrc;
  const footerLogoSrc = logoDarkFullSrc;
  const contactMonogramSrc = theme === 'dark' ? monogramDarkSrc : monogramLightSrc;

  const closeMenu = () => setMenuOpen(false);
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

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
          <a className="button primary desktop-cta" href="#intake">Plan gratis intake</a>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="section-label">Ervaren softwarebouwers voor het MKB</span>
              <h1>
                <span>Slimmer werken.</span>
                <span>Gewoon geregeld.</span>
              </h1>
              <p>
                RD Workx bouwt praktische maatwerksoftware voor MKB-bedrijven die sneller,
                overzichtelijker en betaalbaarder willen werken. Zeer ervaren softwarebouwers,
                gecombineerd met een moderne manier van bouwen.
              </p>
              <div className="actions">
                <a className="button primary" href="#intake">Plan gratis intake <ArrowRight size={18} /></a>
                <a className="button secondary dark-button" href="#wat-we-doen">Bekijk wat we maken</a>
              </div>
              <p className="subline">Geen groot IT-traject. Geen hype. Wel werkende oplossingen.</p>
            </div>

            <div className="hero-panel" aria-label="RD Workx aanpak overzicht">
              <div className="panel-header">
                <span className="status-dot" />
                <span>Nieuwe manier van software bouwen</span>
              </div>
              <h2>Software die vroeger te duur of te traag was, wordt nu haalbaar.</h2>
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
                  <strong>2-6 weken</strong>
                  <span>eerste waarde zichtbaar</span>
                </div>
                <div>
                  <strong>Ervaring telt</strong>
                  <span>softwaremensen aan het stuur</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wat-we-doen" className="section problem-section">
          <div className="section-intro left">
            <span className="section-label">Wat we doen</span>
            <h2>Wij maken software die werk makkelijker maakt.</h2>
            <p>
              Apps, koppelingen, dashboards en automatiseringen. Niet als doel op zich,
              maar als praktische oplossing voor werk dat sneller, eenvoudiger of overzichtelijker kan.
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
            <h2>Voor MKB-bedrijven die iets slimmer willen regelen, zonder meteen een groot IT-project te starten.</h2>
            <p>
              Vaak weet u prima waar kansen liggen. Een intake die handiger kan. Een dashboard dat mist.
              Een koppeling die steeds handwerk vraagt. Een proces dat overzichtelijker kan.
              Wij helpen om daar iets werkends van te maken.
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

        <section id="waarom-nu" className="section delivery-section">
          <div className="delivery-intro">
            <span className="section-label">Waarom nu</span>
            <h2>Software bouwen verandert. Maar goede software vraagt nog steeds om ervaring.</h2>
            <p>
              We kennen en gebruikten door de jaren heen veel verschillende technologieën, talen, platformen en manieren
              van bouwen. Daardoor kunnen we de huidige stand van AI en techniek nuchter duiden: wat is bruikbaar,
              wat is ruis en wat levert in de praktijk echt iets op.
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
            <span className="section-label">Onze rol</span>
            <h2>De techniek is sneller geworden. De kunst blijft weten wat je moet bouwen.</h2>
            <p>
              Nieuwe technologie maakt veel mogelijk, maar ervaring bepaalt of het ook bruikbaar,
              veilig en onderhoudbaar wordt. Dat is waar RD Workx waarde toevoegt:
              nuchter kijken, slim bouwen en gewoon opleveren.
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
            <h2>Drie routes. Eerst kijken wat verantwoord past.</h2>
            <p>
              De instap is een gratis intake. Daarna kiezen we een route die past bij uw vraag,
              de omvang van de oplossing en hoe snel u iets werkends wilt zien.
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
            <span className="section-label">Geschiktheidscheck</span>
            <h2>Niet alles hoeft gebouwd te worden.</h2>
            <p>
              Een oplossing moet iets opleveren. Daarom kijken we vooraf naar omvang, data,
              afhankelijkheden, risico’s en wat een eerste versie concreet moet bewijzen.
            </p>
          </div>
          <div className="fit-panel">
            <h3>De uitkomst is eerlijk en concreet.</h3>
            <div className="fit-list">
              {fitOutcomes.map((outcome) => (
                <div className="check-row" key={outcome}>
                  <CheckCircle2 size={18} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="voorbeelden" className="section examples-section">
          <div className="section-intro">
            <span className="section-label">Voorbeelden</span>
            <h2>Een paar voorbeelden van wat wij kunnen maken.</h2>
            <p>De vorm verschilt per bedrijf. Het doel blijft hetzelfde: werk eenvoudiger maken.</p>
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
            <span className="section-label">Gewoon aanpakken</span>
            <h2>Een goed idee hoeft geen groot project te worden.</h2>
            <p>
              Vaak begint het met één concrete wens: dit moet toch makkelijker kunnen.
              Daar maken wij iets tastbaars van, zodat u snel ziet of het werkt.
            </p>
          </div>
        </section>

        <section id="intake" className="section contact-section">
          <div className="contact-copy">
            <img src={contactMonogramSrc} alt="" aria-hidden="true" />
            <span className="section-label">Gratis intake</span>
            <h2>Heeft u iets waarvan u denkt: dit moet slimmer kunnen?</h2>
            <p>
              Vertel ons kort wat u wilt verbeteren. Tijdens de intake kijken we wat haalbaar is,
              welke route logisch is en hoe snel we iets werkends kunnen laten zien.
            </p>
            <a className="mail-link" href="mailto:hallo@rdworkx.nl"><Mail size={18} /> hallo@rdworkx.nl</a>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>Naam<input type="text" name="name" autoComplete="name" /></label>
            <label>Bedrijf<input type="text" name="company" autoComplete="organization" /></label>
            <label>E-mail<input type="email" name="email" autoComplete="email" /></label>
            <label>Wat wilt u slimmer regelen?<textarea name="message" rows="5" /></label>
            <button className="button primary" type="submit">Plan gratis intake <Send size={16} /></button>
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
