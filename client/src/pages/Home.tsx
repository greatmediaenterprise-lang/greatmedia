import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  FileSearch,
  Globe2,
  Menu,
  MessageCircle,
  MousePointer2,
  PenLine,
  Quote,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2348165772892";

const services = [
  {
    number: "01",
    title: "Digital\nMarketing",
    description:
      "Turn attention into momentum. We build clear campaigns, content systems, and growth loops that make your next customer easier to find.",
    tags: ["Strategy", "Content", "Growth"],
    icon: MousePointer2,
    accent: "lime",
  },
  {
    number: "02",
    title: "Web\nDevelopment",
    description:
      "High-performance websites with a sharp point of view—designed to build trust fast and turn visits into conversations.",
    tags: ["UX / UI", "Frontend", "No-code"],
    icon: Globe2,
    accent: "blue",
  },
  {
    number: "03",
    title: "AI\nSolutions",
    description:
      "Use AI where it creates real leverage. From intelligent workflows to useful copilots, we make emerging tech practical for your business.",
    tags: ["Automation", "Agents", "Workflows"],
    icon: Bot,
    accent: "purple",
  },
  {
    number: "04",
    title: "Software\nWebsites",
    description:
      "Product-grade web experiences for ambitious ideas—reliable, scalable, and built around the people who will actually use them.",
    tags: ["MVPs", "Platforms", "Systems"],
    icon: Code2,
    accent: "orange",
  },
  {
    number: "05",
    title: "Project Writing\n& Research",
    description:
      "Make complex ideas credible and clear. We support research, academic projects, business proposals, and the thinking behind them.",
    tags: ["Research", "Writing", "Clarity"],
    icon: FileSearch,
    accent: "cream",
  },
];

const steps = [
  ["01", "Find the signal", "We listen closely, ask the right questions, and map the opportunity before we make anything."],
  ["02", "Shape the system", "Strategy, design, copy, and technology come together as one clear, useful experience."],
  ["03", "Make it move", "We launch with intention, learn from the response, and keep improving what matters."],
];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function WhatsAppButton({ label = "Start a conversation", className = "" }: { label?: string; className?: string }) {
  return (
    <a className={`whatsapp-button ${className}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      <MessageCircle size={17} strokeWidth={2.4} />
      <span>{label}</span>
      <ArrowUpRight size={16} strokeWidth={2.4} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline" />
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Great Media Enterprise home">
          <LogoMark />
          <span className="brand-name">Great Media <em>Enterprise</em></span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <WhatsAppButton label="Let's talk" className="nav-cta" />
        </nav>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-visual" aria-hidden="true">
            <img src="/manus-storage/gme-hero_ddd68fa0.png" alt="" />
            <div className="hero-visual-tint" />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow reveal-up">
              <span className="eyebrow-dot" />
              <span>Independent digital agency</span>
              <span className="eyebrow-line" />
              <span className="mono">LAGOS / 06:24 PM</span>
            </div>
            <div className="hero-copy">
              <h1 className="hero-title reveal-up delay-1">
                Make your next<br />
                <span className="hero-title-outline">move</span> <span className="hero-title-lime">matter.</span>
              </h1>
              <div className="hero-aside reveal-up delay-2">
                <p>We build the digital presence, products, and perspective that help ambitious businesses get chosen.</p>
                <a href="#services" className="text-link">
                  Explore our capabilities <ArrowDownRight size={17} />
                </a>
              </div>
            </div>
            <div className="hero-bottom reveal-up delay-3">
              <WhatsAppButton label="Tell us what you’re building" />
              <div className="hero-note">
                <span className="mono">AVAILABLE FOR SELECT PROJECTS</span>
                <span className="availability-dot" />
              </div>
            </div>
          </div>
          <div className="scroll-cue mono"><span /> Scroll to explore</div>
        </section>

        <section className="signal-strip" aria-label="Agency focus">
          <div className="container signal-strip-inner">
            <p className="signal-lead">Good work gets noticed.<br /><strong>Great work gets remembered.</strong></p>
            <div className="signal-divider" />
            <div className="signal-metrics">
              <div><strong>05</strong><span>core disciplines</span></div>
              <div><strong>01</strong><span>connected partner</span></div>
              <div><strong>∞</strong><span>room to grow</span></div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker mono">/ CAPABILITIES</div>
                <h2>One sharp team.<br /><span>Many ways forward.</span></h2>
              </div>
              <p>From first thought to final click, we connect the pieces that turn a good idea into a business people can feel.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className={`service-card accent-${service.accent}`} key={service.number}>
                    <div className="service-topline">
                      <span className="service-number mono">{service.number}</span>
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3>{service.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                    <p>{service.description}</p>
                    <a className="service-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      <MessageCircle size={15} strokeWidth={2.3} />
                      <span>Discuss this service</span>
                      <ArrowUpRight size={15} strokeWidth={2.3} />
                    </a>
                    <div className="service-footer">
                      <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <a className="service-arrow" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Discuss ${service.title.replace("\n", " ")} on WhatsApp`}><ArrowUpRight size={19} /></a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="container approach-layout">
            <div className="approach-art">
              <img src="/manus-storage/gme-showcase_1bec4965.png" alt="Abstract collage of digital strategy and research elements" />
              <div className="art-label mono">GME / FIELD NOTES / 001</div>
              <div className="art-corner art-corner-tl" />
              <div className="art-corner art-corner-br" />
            </div>
            <div className="approach-copy">
              <div className="section-kicker mono">/ THE GREAT MEDIA WAY</div>
              <h2>Clarity is a<br /><span>competitive edge.</span></h2>
              <p className="lead-copy">The internet is crowded with noise. Our job is to find the clearest, most useful version of your story—and build the system that lets it travel.</p>
              <div className="step-list">
                {steps.map(([number, title, body]) => (
                  <div className="step" key={number}>
                    <span className="step-number mono">{number}</span>
                    <div><h3>{title}</h3><p>{body}</p></div>
                  </div>
                ))}
              </div>
              <WhatsAppButton label="Bring us a challenge" className="approach-cta" />
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="container proof-layout">
            <div className="proof-quote-wrap">
              <Quote className="quote-icon" size={31} />
              <blockquote>“They didn’t just give us a website. They gave us a sharper way to show up.”</blockquote>
              <div className="quote-credit"><span className="credit-line" /><span><strong>Founder, growing consumer brand</strong><br /><span className="muted">Lagos, Nigeria</span></span></div>
            </div>
            <div className="proof-side">
              <p className="mono">A PARTNER, NOT A VENDOR</p>
              <div className="check-list">
                <div><Check size={16} /><span>Direct access to the people doing the work</span></div>
                <div><Check size={16} /><span>Strategy that stays close to the outcome</span></div>
                <div><Check size={16} /><span>Built for today. Ready for what’s next.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit orbit-one" aria-hidden="true" />
          <div className="contact-orbit orbit-two" aria-hidden="true" />
          <div className="container contact-inner">
            <div className="section-kicker mono">/ YOUR NEXT CHAPTER</div>
            <h2>Have a good idea?<br /><span>Let’s make it real.</span></h2>
            <p>No decks. No runaround. Just a direct line to the team that can help you move it forward.</p>
            <WhatsAppButton label="Chat with Great Media Enterprise" className="contact-cta" />
            <div className="contact-details"><span className="mono">WHATSAPP / +234 816 577 2892</span><span className="detail-separator" /><span className="mono">MON—FRI / 09:00—18:00 WAT</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#top" className="brand"><LogoMark /><span className="brand-name">Great Media <em>Enterprise</em></span></a>
          <p>Digital clarity for ambitious businesses.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="footer-link">WhatsApp us <ArrowUpRight size={16} /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Great Media Enterprise</span><span className="mono">BUILT WITH INTENT</span><a href="#top" className="back-top">Back to top <ArrowRight size={15} /></a></div>
      </footer>
    </div>
  );
}
