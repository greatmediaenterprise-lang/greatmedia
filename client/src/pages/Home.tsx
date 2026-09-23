import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Facebook,
  FileSearch,
  Globe2,
  Headphones,
  Instagram,
  LayoutTemplate,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  MousePointer2,
  Palette,
  PenLine,
  Quote,
  Radio,
  Smartphone,
  Sparkles,
  SlidersHorizontal,
  Twitter,
  Video,
  Music2,
  X,
  Youtube,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2348165772892";
const EMAIL_ADDRESS = "greatmediaenterprise@gmail.com";
const APP_DOWNLOAD_URL = "https://drive.google.com/file/d/1MFqwRMMl4lXJ5OMIpYTbyFe3kFNyS0-U/view?usp=drive_link";
const LINKEDIN_POST_URL = "https://www.linkedin.com/feed/update/urn:li:activity:7508554937757528064";
const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/greatmediaenterprise/";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/146283095/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/greatmediaenterprise/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@GREATMEDIAENTERPRISE", icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/osebike.okoh", icon: Facebook },
  { label: "X", href: "https://x.com/Grei2up", icon: Twitter },
];

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
    title: "Software\nDevelopment",
    description:
      "Product-grade software for ambitious ideas—reliable, scalable, and built around the people who will actually use it.",
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
  {
    number: "06",
    title: "Website\nDesign",
    description:
      "Shape a digital home people want to explore. We design purposeful websites with clear structure, strong visuals, and a memorable point of view.",
    tags: ["Wireframes", "UI Design", "Prototypes"],
    icon: LayoutTemplate,
    accent: "blue",
  },
  {
    number: "07",
    title: "Graphic\nDesign",
    description:
      "Build a visual identity people recognize. From brand systems to campaign artwork, we turn your ideas into confident, consistent visuals.",
    tags: ["Branding", "Print", "Campaigns"],
    icon: Palette,
    accent: "purple",
  },
  {
    number: "08",
    title: "Video\nProduction",
    description:
      "Bring your story to life with video that holds attention—planned, produced, and edited for the platforms your audience already uses.",
    tags: ["Adverts", "Events", "Editing"],
    icon: Video,
    accent: "orange",
  },
  {
    number: "09",
    title: "Broadcast / Live\nVideo Solutions",
    description:
      "Deliver live moments without the stress. We support streaming, broadcast setups, virtual events, and reliable live video experiences.",
    tags: ["Streaming", "Live Events", "Broadcast"],
    icon: Radio,
    accent: "lime",
  },
  {
    number: "10",
    title: "Mobile App\nDevelopment",
    description:
      "Build useful mobile experiences for Android and iOS with thoughtful interfaces, dependable performance, and a clear path from idea to launch.",
    tags: ["Android", "iOS", "UX / UI"],
    icon: Smartphone,
    accent: "blue",
  },
  {
    number: "11",
    title: "Audio\nProduction",
    description:
      "Professional sound support from capture to final delivery—sound mixing, live audio, audio editing, speaker setup, and sound production.",
    tags: ["Mixing", "Live Audio", "Editing"],
    icon: Headphones,
    accent: "purple",
  },
  {
    number: "12",
    title: "Music\nProduction",
    description:
      "Create, arrange, and finish music with FL Studio and Kontakt, plus support for selling musical plugins and building your sound library.",
    tags: ["FL Studio", "Kontakt", "Plugins"],
    icon: Music2,
    accent: "orange",
  },
  {
    number: "13",
    title: "Live Sound\nMixing",
    description:
      "Mix live performances and events with practical workflows across FL Studio, Cubase, Studio One, and Audacity.",
    tags: ["FL Studio", "Cubase", "Studio One"],
    icon: SlidersHorizontal,
    accent: "cream",
  },
  {
    number: "14",
    title: "Data\nAnalysis",
    description:
      "Turn information into decisions with analysis, reporting, and clear visual outputs using Excel, SPSS, EViews, AI, and Python.",
    tags: ["Excel", "SPSS", "Python"],
    icon: BarChart3,
    accent: "lime",
  },
  {
    number: "15",
    title: "Computer\nServices",
    description:
      "Practical computer support for individuals, teams, and businesses using Microsoft applications and everyday digital workflows.",
    tags: ["Microsoft", "Setup", "Support"],
    icon: MonitorCog,
    accent: "blue",
  },
];

const steps = [
  ["01", "Find the signal", "We listen closely, ask the right questions, and map the opportunity before we make anything."],
  ["02", "Shape the system", "Strategy, design, copy, and technology come together as one clear, useful experience."],
  ["03", "Make it move", "We launch with intention, learn from the response, and keep improving what matters."],
];

const faqs = [
  { question: "How do I install the app?", answer: "Download the application, extract the downloaded ZIP file, open the extracted folder, and install the APK file on your Android phone. If you need help, contact our team and we will guide you through the process." },
  { question: "How can I contact Great Media Enterprise?", answer: "You can chat with us directly on WhatsApp, send an email to greatmediaenterprise@gmail.com, or use the enquiry form in the Contact section. We respond to project, support, and service enquiries." },
  { question: "What services do you offer?", answer: "We provide digital marketing, website design and development, software development, AI solutions, mobile app development, research writing, graphic design, video production, broadcast and live streaming, audio and music production, data analysis, and computer services." },
  { question: "What time do your services run?", answer: "Great Media Enterprise is available Monday to Sunday, 24 hours each day. Send us a message whenever you are ready, and we will respond as soon as possible." },
];

const testimonials = [
  { quote: "I want to say thank you for all you did for me during the period of writing my project. It is only God that will reward you. I really appreciate you.", name: "Sister Ejiro Fuoye", detail: "Project writing" },
  { quote: "I had an A in my project. Thank you so much for the excellent work.", name: "Sister Promise Fuoye", detail: "Research support" },
  { quote: "The work was corrected and I have submitted it. Great work—it was very good.", name: "Sister Annabel Fuoye", detail: "Project support" },
  { quote: "My supervisor did not reject the analysis, and the work was done very well.", name: "Sister Vique", detail: "Data analysis" },
  { quote: "Thank you for the work. Our supervisor collected it from the University of Ilorin and everything was well presented.", name: "Sister Motunrayo", detail: "Academic project · University of Ilorin" },
  { quote: "Great Media Enterprise is a reliable company. They helped me from chapter one to five, and the work was very well presented. I got an A.", name: "Bro Justin Fuoye", detail: "Research writing" },
  { quote: "Great Media Enterprise is very good in terms of research writing. Their service is careful, clear, and reliable.", name: "Pleasant Fuoye", detail: "Research writing" },
  { quote: "They built my SEO, website, app, and software for Cego Print Ventures. The website is live on Google, and their prices and services are very good.", name: "Mr. Cletus", detail: "Website, app & software" },
  { quote: "Great Media Enterprise is a very good company. I love their services, and I am also the accounting officer at Great Media Enterprise. They are a nice company to work with.", name: "Mr. Alao Temidayo", detail: "Team & client partner" },
  { quote: "I had the opportunity to meet their CEO at Federal University Oye-Ekiti, Mr. Okoh Great, who is a great guy. He delivers very well, knows a lot, and I will recommend him and his company to the world.", name: "Mr. Tope Bankole", detail: "Client partner · Federal University Oye-Ekiti" },
  { quote: "Mr. Great is a very good, trusted, and reliable person, and his company is very reliable.", name: "Dr. Osamoka", detail: "Chaplain · Federal University Oye-Ekiti" },
  { quote: "Great was our best sound engineer and media person. I love his work and miss having him with us.", name: "Mr. Adeyemi", detail: "Technical Coordinator · Federal University Oye-Ekiti Chapel" },
  { quote: "Great Media Enterprise is great in broadcast, live streaming, and sound. Mr. Great knows a lot about media from his work with Chapel of Transformation School Chapel at Federal University Oye-Ekiti.", name: "Israel", detail: "Broadcast & live streaming" },
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

function GoogleDriveIcon() {
  return (
    <svg className="drive-icon" viewBox="0 0 48 42" aria-hidden="true">
      <path fill="#0F9D58" d="M16.2 0h10.1l16.1 28H32.2z" />
      <path fill="#F4B400" d="M16.2 0 0 28h10.1L26.3 0z" />
      <path fill="#4285F4" d="M0 28h32.2l-5.8 10H5.8z" />
      <path fill="#34A853" d="M32.2 28h10.2l-5.8 10H26.4z" />
    </svg>
  );
}

function AppDownloadButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`app-download ${compact ? "app-download-compact" : ""}`} href={APP_DOWNLOAD_URL} target="_blank" rel="noreferrer">
      <GoogleDriveIcon />
      <span>{compact ? "Download app" : "Download our app"}</span>
      <ArrowUpRight size={15} />
    </a>
  );
}

function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`New Great Media enquiry${service ? ` — ${service}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
        <label><span>Email</span><input name="email" type="email" placeholder="you@company.com" required /></label>
      </div>
      <label><span>What can we help with?</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Digital Marketing</option><option>Web Development</option><option>AI Solutions</option><option>Software Development</option><option>Project Writing & Research</option><option>Something else</option></select></label>
      <label><span>Tell us a little about it</span><textarea name="message" placeholder="What are you building, and where are you right now?" rows={4} required /></label>
      <div className="form-submit-row"><button className="form-submit" type="submit"><Mail size={16} /> Send enquiry <ArrowUpRight size={16} /></button><span className="form-note">Opens your email app to send to {EMAIL_ADDRESS}</span></div>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const scrollToHash = (behavior: ScrollBehavior) => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      target.scrollIntoView({ behavior, block: "start" });
    };

    const handleHashChange = () => scrollToHash("smooth");
    const initialScroll = window.setTimeout(() => scrollToHash("auto"), 0);

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.clearTimeout(initialScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="topline" />
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Great Media Enterprise home">
          <img className="header-logo-image" src="/assets/great-media-logo.png" alt="Great Media Enterprise logo" />
          <span className="brand-name">Great Media <em>Enterprise</em></span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#post" onClick={closeMenu}>Post</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <AppDownloadButton compact />
          <WhatsAppButton label="Let's talk" className="nav-cta" />
        </nav>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/gme-hero.webp" alt="" />
            <div className="motion-orbit motion-orbit-one" />
            <div className="motion-orbit motion-orbit-two" />
            <div className="motion-ribbon motion-ribbon-one" />
            <div className="motion-ribbon motion-ribbon-two" />
            <div className="motion-particles motion-particles-one" />
            <div className="hero-visual-tint" />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow reveal-up">
              <span className="eyebrow-dot" />
              <span>Independent digital agency</span>
              <span className="eyebrow-line" />
              <span className="mono">NIGERIA</span>
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
              <div className="hero-actions"><WhatsAppButton label="Tell us what you’re building" /><AppDownloadButton /></div>
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
              <div><strong>15</strong><span>service offerings</span></div>
              <div><strong>01</strong><span>connected partner</span></div>
              <div><strong>∞</strong><span>room to grow</span></div>
              <div><strong>400+</strong><span>works completed</span></div>
              <div><strong>30+</strong><span>clients reached</span></div>
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

        <section className="gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading gallery-heading">
              <div>
                <div className="section-kicker mono">/ SELECTED WORK</div>
                <h2>Gallery of<br /><span>our work.</span></h2>
              </div>
              <p>A glimpse of the ideas, campaigns, and visual systems we create for organisations and people doing meaningful work.</p>
            </div>
            <div className="gallery-grid">
              <figure className="gallery-feature">
                <img src="/assets/fathers-day-chapel-transformation.webp" alt="Father’s Sunday Service flyer collage created for Chapel of Transformation, Oye Campus" />
                <figcaption><span className="mono">01 / CHAPEL OF TRANSFORMATION</span><strong>Father’s Sunday Service Flyer</strong><span>Graphic design · Church media</span></figcaption>
              </figure>
              <figure className="gallery-feature">
                <img src="/assets/cego-print-ventures-website.png" alt="Cego Print Ventures business centre website developed by Great Media Enterprise" />
                <figcaption><span className="mono">02 / CEGO PRINT VENTURES</span><a className="gallery-project-link" href="https://cegoprintventures.vercel.app/" target="_blank" rel="noreferrer"><strong>Business centre website <ArrowUpRight size={14} /></strong></a><span>Web development · SEO · Digital systems</span></figcaption>
              </figure>
              <figure className="gallery-feature">
                <img src="/assets/mental-health-therapy-ai.png" alt="Mental Health Therapy AI and mental wellness support application" />
                <figcaption><span className="mono">03 / GREAT THERAPY AI</span><a className="gallery-project-link" href="https://greattherapyai.vercel.app/" target="_blank" rel="noreferrer"><strong>Mental Health Therapy AI <ArrowUpRight size={14} /></strong></a><span>AI solutions · Mental wellness support</span></figcaption>
              </figure>
              <figure className="gallery-feature gallery-video-feature">
                <div className="gallery-video"><iframe src="https://www.youtube.com/embed/qQpsKHkzNY0" title="Chapel of Transformation School Chapel live broadcast at Federal University Oye-Ekiti" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
                <figcaption><span className="mono">04 / CHAPEL OF TRANSFORMATION</span><a className="gallery-project-link" href="https://youtu.be/qQpsKHkzNY0" target="_blank" rel="noreferrer"><strong>Live Broadcast Solution <ArrowUpRight size={14} /></strong></a><span>Broadcast · Live streaming · School Chapel</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="linkedin-post-section" id="post">
          <div className="container">
            <div className="section-heading linkedin-post-heading">
              <div>
                <div className="section-kicker mono">/ FROM THE COMPANY PAGE</div>
                <h2>Our latest<br /><span>LinkedIn post.</span></h2>
              </div>
              <p>Follow Great Media Enterprise for company updates, new work, insights, and announcements.</p>
            </div>
            <div className="linkedin-post-layout">
              <div className="linkedin-post-frame">
                <article className="linkedin-post-card">
                  <div className="linkedin-post-card-top"><div className="linkedin-avatar"><img src="/assets/great-media-logo.png" alt="" /></div><div><strong>Great Media Enterprise</strong><span>Great Media Checker · LinkedIn</span></div><Linkedin size={21} /></div>
                  <p className="linkedin-post-copy">Great Media Checker is live and currently running! We are proud to have reached an important milestone with our academic integrity platform designed to support students, researchers, lecturers, institutions, and organizations with plagiarism and AI-content checking.</p>
                  <p className="linkedin-post-copy">The platform is already operational, and we are actively improving and expanding its capabilities to make it more powerful, reliable, accessible, and competitive. This is only the beginning.</p>
                  <div className="linkedin-post-tags">#GreatMediaChecker&nbsp;&nbsp; #GreatMediaEnterprise&nbsp;&nbsp; #AI&nbsp;&nbsp; #Innovation&nbsp;&nbsp; #MadeInNigeria</div>
                  <a className="linkedin-read-link" href={LINKEDIN_POST_URL} target="_blank" rel="noreferrer">Read the full post on LinkedIn <ArrowUpRight size={15} /></a>
                </article>
              </div>
              <div className="linkedin-post-side">
                <div className="linkedin-badge"><Linkedin size={20} /><span className="mono">GREAT MEDIA ENTERPRISE</span></div>
                <h3>Stay close to the work.</h3>
                <p>See the post on LinkedIn, then visit our company page to follow every new update.</p>
                <div className="linkedin-actions">
                  <a className="linkedin-primary" href={LINKEDIN_COMPANY_URL} target="_blank" rel="noreferrer">Visit company page <ArrowUpRight size={16} /></a>
                  <a className="linkedin-secondary" href={LINKEDIN_POST_URL} target="_blank" rel="noreferrer">Open this post <ArrowUpRight size={15} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="container approach-layout">
            <div className="approach-art">
              <img src="/assets/gme-showcase.webp" alt="Abstract collage of digital strategy and research elements" />
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

        <section className="testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-heading testimonials-heading">
              <div>
                <div className="section-kicker mono">/ CLIENT WORDS</div>
                <h2>Testimonials</h2>
              </div>
              <p>Real feedback from clients, collaborators, and partners who have experienced the Great Media Enterprise way of working.</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <Quote size={20} className="testimonial-quote-icon" />
                  <p>“{testimonial.quote}”</p>
                  <div><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-heading faq-heading">
              <div>
                <div className="section-kicker mono">/ NEED TO KNOW</div>
                <h2>Questions,<br /><span>answered.</span></h2>
              </div>
              <p>Find practical answers about installing the app, reaching our team, our services, and our always-open support hours.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary><span className="faq-number mono">0{index + 1}</span><strong>{faq.question}</strong><span className="faq-plus">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
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
            <div className="contact-actions"><WhatsAppButton label="Chat on WhatsApp" className="contact-cta" /><span className="or-label mono">OR</span><a className="email-link" href={`mailto:${EMAIL_ADDRESS}`}><Mail size={16} /> Email us</a></div>
            <ContactForm />
            <div className="contact-details"><span className="mono">WHATSAPP / +234 816 577 2892</span><span className="detail-separator" /><a className="email-detail mono" href={`mailto:${EMAIL_ADDRESS}`}>EMAIL / {EMAIL_ADDRESS}</a><span className="detail-separator" /><span className="mono">MON—SUN / 24 HOURS</span><span className="detail-separator" /><a className="main-site-link mono" href="https://greatmediaenterprise.vercel.app/" target="_blank" rel="noreferrer">VISIT MAIN WEBSITE <ArrowUpRight size={12} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#top" className="brand"><img className="footer-logo-image" src="/assets/great-media-logo.png" alt="Great Media Enterprise logo" /><span className="brand-name">Great Media <em>Enterprise</em></span></a>
          <p>Digital clarity for ambitious businesses.</p>
          <div className="footer-socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={16} /></a>)}</div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Great Media Enterprise</span><span className="mono">{EMAIL_ADDRESS}</span><a href="#top" className="back-top">Back to top <ArrowRight size={15} /></a></div>
      </footer>
    </div>
  );
}
