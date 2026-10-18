import { ArrowRight, ArrowUpRight, Box, Check, LayoutGrid, ListFilter, Search } from "lucide-react";
import BackgroundSections from "@/components/background-sections";
import Navigation from "@/components/navigation";
import ProjectShowcase from "@/components/project-showcase";
import { SITE_URL } from "@/lib/site";

const person = {
  "@context": "https://schema.org", "@type": "Person", name: "Emirhan Yaman",
  jobTitle: "Software Engineer", url: SITE_URL,
  sameAs: ["https://github.com/yamanemirhan", "https://www.linkedin.com/in/emirhanyaman"],
};

export default function Home() {
  return (
    <>
      <Navigation home />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">Software engineer <span>·</span> Istanbul</p>
            <h1 id="hero-title">Emirhan<br />Yaman<span className="name-period">.</span></h1>
            <p className="hero-statement">Backend-focused.<br />Full-stack capable.</p>
            <p className="hero-description">I build applications with .NET, Next.js, React, Blazor, and TypeScript, from the APIs and data to the interface.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <ArrowRight size={19} /></a>
              <a className="text-link" href="/Emirhan_Yaman_CV.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <ProjectShowcase />
        </section>

        <section className="work container" id="work" aria-labelledby="work-title">
          <div className="section-topline">
            <h2 id="work-title">Selected work</h2>
            <div className="socials"><a href="https://github.com/yamanemirhan" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/emirhanyaman" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
          </div>
          <div className="work-layout">
            <article className="featured-project">
              <div className="project-overline"><span>01 / Featured project</span><span className="latest-dot">Latest work</span></div>
              <a href="/projects/commercepilot/" className="project-title-link"><h3>CommercePilot</h3><ArrowUpRight size={28} strokeWidth={1.4} /></a>
              <p className="project-description">A shopping assistant powered by local models,<br className="desktop-break" /> with real tools and explicit approval before checkout.</p>
              <p className="project-tech">.NET 10 <span>/</span> Next.js <span>/</span> MCP <span>/</span> PostgreSQL</p>
              <a className="text-link case-link" href="/projects/commercepilot/">Explore the case study <ArrowRight size={17} /></a>
              <ol className="project-flow" aria-label="CommercePilot shopping workflow">
                <li><span className="flow-icon"><Search size={22} strokeWidth={1.5} /></span><div><strong>Discover</strong><span>Find the right products</span></div></li>
                <li><span className="flow-icon"><ListFilter size={22} strokeWidth={1.5} /></span><div><strong>Review</strong><span>Check exact items</span></div></li>
                <li><span className="flow-icon"><Check size={22} strokeWidth={1.5} /></span><div><strong>Approve</strong><span>Confirm the action</span></div></li>
              </ol>
            </article>
            <div className="other-projects">
              <article className="project-row">
                <span className="project-icon"><Box size={29} strokeWidth={1.3} /></span>
                <div><span className="project-number">02 / Business software</span><h3>InventoryManagement</h3><p>Multi-company stock and purchasing.</p><span className="project-tech">.NET / Next.js / PostgreSQL</span><a href="/projects/inventory-management/" className="project-row-link">View project <ArrowRight size={16} /></a></div>
              </article>
              <article className="project-row">
                <span className="project-icon"><LayoutGrid size={29} strokeWidth={1.3} /></span>
                <div><span className="project-number">03 / Collaboration</span><h3>WorkGrid</h3><p>Workspaces, boards, and real-time activity.</p><span className="project-tech">.NET / Next.js / SignalR / PostgreSQL</span><a href="/projects/workgrid/" className="project-row-link">View project <ArrowRight size={16} /></a></div>
              </article>
            </div>
          </div>
          <div className="work-footnote"><span><span className="status-dot" />Currently building energy and sustainability software at Enerwise.</span><a href="#experience">More about my work <ArrowDownRightIcon /></a></div>
        </section>
        <BackgroundSections />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    </>
  );
}

function ArrowDownRightIcon() { return <ArrowUpRight size={15} className="down-arrow" aria-hidden="true" />; }
