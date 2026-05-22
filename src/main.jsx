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
  MessageSquareText,
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
  ['probleem', 'Probleem'],
  ['voor-wie', 'Voor wie'],
  ['delivery-node', 'Delivery Node'],
  ['aanbod', 'Aanbod'],
  ['voorbeelden', 'Voorbeelden'],
  ['intake', 'Intake']
];

const frictions = [
  ['Zoeken', 'Kennis staat in mappen, mailboxen, hoofden en losse bestanden.', SearchCheck],
  ['Overtypen', 'Medewerkers verplaatsen dezelfde informatie tussen formulieren, lijsten en systemen.', ClipboardCheck],
  ['Controleren', 'Documenten, dossiers en uitzonderingen vragen steeds dezelfde aandacht.', FileCheck2],
  ['Opvolgen', 'Werk blijft hangen tussen mensen, systemen of afdelingen.', Workflow],
  ['Samenvatten', 'Iedere week verdwijnen uren in rapportages, updates en klantantwoorden.', MessageSquareText],
  ['Rapporteren', 'Grip vraagt spreadsheets, handmatige statusrondes en veel nabellen.', BarChart3]
];

const audienceSignals = [
  'Veel standaard en repeterend werk',
  'Documenten, dossiers, formulieren of klantvragen bepalen de dag',
  'Kennis zit verspreid in mensen, mappen en losse tools',
  'Medewerkers zoeken, controleren, kopieren of volgen veel handmatig op',
  'AI is interessant, maar concrete waarde is belangrijker dan hype',
  'Er is weinig ruimte voor een groot IT- of consultancytraject'
];

const deliverySteps = [
  ['Intake', 'Het proces, doel en succescriterium worden scherp gemaakt.'],
  ['UX Design', 'We vertalen het werk naar schermen, stappen en interacties.'],
  ['Backlog', 'De oplossing wordt opgeknipt in duidelijke taken en acceptatiecriteria.'],
  ['Bouw', 'AI-agents en ontwikkelautomatisering versnellen het maken van software.'],
  ['Tests', 'Functionele, visuele, veiligheids- en kwaliteitschecks lopen mee.'],
  ['Review', 'RD Workx controleert kwaliteit; de klant geeft richting en feedback.'],
  ['DEV/TEST', 'De oplossing komt in een testomgeving om te proberen en te beoordelen.'],
  ['Rapportage', 'Voortgang, keuzes, tests en vervolgstappen worden inzichtelijk.']
];

const offers = [
  {
    title: 'AI Delivery Abonnement',
    label: 'Gespreid investeren',
    text: 'Voor een helder afgebakende procesoplossing. De eerste waarde wordt snel zichtbaar, daarna blijft de oplossing draaien en verbeteren binnen afgesproken scope.',
    points: ['Korte AI Delivery-cycles', 'Continuiteit en kleine verbeteringen', 'Heldere scope en maandbedrag']
  },
  {
    title: 'AI Delivery Sprint',
    label: 'Slimme Start',
    text: 'Een kort traject om het proces scherp te krijgen en te vertalen naar UX, backlog en een eerste werkende versie. Ideaal wanneer waarde eerst bewezen moet worden.',
    points: ['Procesanalyse en UX', 'Backlog met acceptatiecriteria', 'Eerste werkende versie']
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
  ['Proces eerst', 'We starten bij hoe het werk echt loopt, niet bij een tool of trend.'],
  ['Klein beginnen', 'Eerst bewijzen waar waarde zit. Daarna pas groter maken.'],
  ['Controle houden', 'AI versnelt de bouw; RD Workx bewaakt kwaliteit, veiligheid en resultaat.'],
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
  const [activeSection, setActiveSection] = useState('probleem');
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
              <span className="section-label">Voor procesrijk MKB</span>
              <h1>
                <span>Stop met tijd</span>
                <span>verliezen aan</span>
                <span>standaardwerk.</span>
              </h1>
              <p>
                RD Workx helpt organisaties om repeterend, foutgevoelig werk slimmer te organiseren
                met werkende maatwerksoftware. U kent uw werk. Wij helpen het slimmer regelen.
              </p>
              <div className="actions">
                <a className="button primary" href="#intake">Plan gratis intake <ArrowRight size={18} /></a>
                <a className="button secondary dark-button" href="#delivery-node">Bekijk de Delivery Node</a>
              </div>
              <p className="subline">Apps zijn gereedschap. Het doel is beter werk.</p>
            </div>

            <div className="hero-panel" aria-label="AI Delivery Node overzicht">
              <div className="panel-header">
                <span className="status-dot" />
                <span>AI Delivery Node</span>
              </div>
              <h2>U bepaalt de koers. AI versnelt de bouw. RD Workx zorgt dat het klopt.</h2>
              <div className="node-flow">
                {deliverySteps.slice(0, 4).map(([title], index) => (
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
                  <strong>Scope eerst</strong>
                  <span>geen losse beloftes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="probleem" className="section problem-section">
          <div className="section-intro left">
            <span className="section-label">Probleem</span>
            <h2>Het werk loopt niet vast op grote ideeën, maar op kleine stappen die elke week terugkomen.</h2>
            <p>
              Processen groeien organisch. Mensen worden handig met omwegen. Voor je het weet kost
              standaardwerk meer aandacht dan het eigenlijke vakwerk.
            </p>
          </div>
          <div className="friction-grid">
            {frictions.map(([title, text, Icon]) => (
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
            <h2>Voor organisaties die te groot zijn voor handwerk en te praktisch voor grote IT-trajecten.</h2>
            <p>
              RD Workx past bij procesrijke MKB-organisaties die weten dat er winst zit in hun
              dagelijkse werk, maar hulp nodig hebben om dat scherp te maken en goed op te lossen.
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

        <section id="delivery-node" className="section delivery-section">
          <div className="delivery-intro">
            <span className="section-label">AI Delivery Node</span>
            <h2>Snel bouwen kan alleen verantwoord als de route gecontroleerd is.</h2>
            <p>
              De AI Delivery Node is onze werkwijze en ontwikkelomgeving. AI-agents helpen versnellen,
              maar intake, UX, backlog, tests, review en rapportage houden het werk toetsbaar.
            </p>
          </div>
          <div className="delivery-grid">
            {deliverySteps.map(([title, text], index) => (
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
            <h2>Software wordt sneller en goedkoper. De kunst is weten wat je moet bouwen.</h2>
            <p>
              We starten niet bij technologie. Eerst begrijpen we het proces, de mensen en de momenten
              waarop werk stokt. Daarna bouwen we alleen wat genoeg waarde heeft om dagelijks gebruikt te worden.
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
              De instap is een gratis intake. Daarna kiezen we een route die past bij het proces,
              de scope, de risico’s en hoe snel uw organisatie feedback kan geven.
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
              Lage maandprijzen zijn alleen gezond als de scope scherp is. Daarom kijken we vooraf
              naar procesgrenzen, data, risico’s, complexiteit en feedbacksnelheid.
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
            <h2>Apps zijn geen productcatalogus. Ze zijn de uitkomst van een scherp procesprobleem.</h2>
            <p>Een paar vormen die vaak logisch zijn als standaardwerk slimmer georganiseerd moet worden.</p>
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
            <h2>Eerst snappen waar tijd verdwijnt. Daarna pas slim versnellen.</h2>
            <p>
              De beste software voelt niet als extra systeem. Het sluit aan op hoe mensen werken,
              haalt ruis weg en maakt duidelijk wat de volgende stap is.
            </p>
          </div>
        </section>

        <section id="intake" className="section contact-section">
          <div className="contact-copy">
            <img src={contactMonogramSrc} alt="" aria-hidden="true" />
            <span className="section-label">Gratis intake</span>
            <h2>Welk standaardwerk kost u elke week onnodig tijd?</h2>
            <p>
              Beschrijf één proces, taak of terugkerend probleem. Tijdens de intake maken we concreet
              wat slimmer kan, welke route logisch is en waar u beter niet aan moet beginnen.
            </p>
            <a className="mail-link" href="mailto:hallo@rdworkx.nl"><Mail size={18} /> hallo@rdworkx.nl</a>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>Naam<input type="text" name="name" autoComplete="name" /></label>
            <label>Bedrijf<input type="text" name="company" autoComplete="organization" /></label>
            <label>E-mail<input type="email" name="email" autoComplete="email" /></label>
            <label>Welk proces moet slimmer?<textarea name="message" rows="5" /></label>
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
        <p className="footer-note">Van procesprobleem naar werkende maatwerksoftware.</p>
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
