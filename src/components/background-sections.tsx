import { ArrowDownRight, ArrowUpRight, ChevronDown, Download, Mail } from "lucide-react";
import styles from "./background-sections.module.css";

const skillGroups = [
  { name: "Backend", tools: ["C# / .NET", "Entity Framework", "MediatR"] },
  { name: "Interfaces", tools: ["Next.js / React / Blazor", "TypeScript"] },
  { name: "Data", tools: ["PostgreSQL", "SQL Server", "Redis"] },
  { name: "Connections & delivery", tools: ["RabbitMQ / SignalR", "Docker", "Microsoft Graph"] },
];

export default function BackgroundSections() {
  return (
    <div className={styles.backgroundSections}>
      <section className={styles.section} id="experience" aria-labelledby="experience-heading">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>The work behind the work</p>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <p className={styles.sectionIntro}>
            Building software for energy, sustainability, and the people who use it every day.
          </p>
        </div>

        <div className={styles.experienceList}>
          <article className={styles.experience}>
            <div className={styles.period}>
              <span className={styles.year}>2024 — Now</span>
              <span>October 2024 — Present</span>
              <span className={styles.current}><span aria-hidden="true" />Current role</span>
            </div>
            <div className={styles.role}>
              <div className={styles.roleHeading}>
                <div>
                  <h3>Tekhnelogos <span>/ Enerwise</span></h3>
                  <p className={styles.roleTitle}>Software Engineer <span>· Freelance</span></p>
                </div>
                <ArrowDownRight aria-hidden="true" className={styles.roleArrow} size={28} strokeWidth={1.4} />
              </div>
              <p className={styles.roleDescription}>
                Working across .NET services and React interfaces for energy management and
                sustainability software. My work connects application logic, data, and the
                everyday workflows of the product.
              </p>
              <details className={styles.details}>
                <summary>What I work on <ChevronDown size={16} aria-hidden="true" /></summary>
                <ul>
                  <li>.NET APIs and background workers, with React and TypeScript interfaces for energy management.</li>
                  <li>Carbon reporting features supporting CBAM and GRI workflows, using .NET, Entity Framework, SQL, and Blazor.</li>
                  <li>Database query optimization and Microsoft Graph integrations with SharePoint and Microsoft Entra ID.</li>
                </ul>
              </details>
            </div>
          </article>

          <article className={styles.experience}>
            <div className={styles.period}>
              <span className={styles.year}>2024</span>
              <span>July — August</span>
            </div>
            <div className={styles.role}>
              <div className={styles.roleHeading}>
                <div>
                  <h3>Asis Elektronik</h3>
                  <p className={styles.roleTitle}>Software Engineering Intern</p>
                </div>
                <ArrowDownRight aria-hidden="true" className={styles.roleArrow} size={28} strokeWidth={1.4} />
              </div>
              <p className={styles.roleDescription}>
                Worked with distributed backend architecture, from domain modelling and
                application handlers to messaging between services.
              </p>
              <details className={styles.details}>
                <summary>A closer look <ChevronDown size={16} aria-hidden="true" /></summary>
                <ul>
                  <li>Domain-driven design, CQRS, and the Mediator pattern for structuring application logic.</li>
                  <li>Service communication using RabbitMQ, gRPC, and REST, alongside Entity Framework and Docker.</li>
                </ul>
              </details>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.about}`} id="about" aria-labelledby="about-heading">
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>A little more about me</p>
          <h2 id="about-heading">Behind the code.</h2>
          <p className={styles.aboutLead}>
            I’m Emirhan, a software engineer based in Istanbul. I focus on the backend,
            and enjoy taking a feature all the way to the interface.
          </p>
          <p className={styles.aboutText}>
            Most of my work sits where APIs, data, and product decisions meet. I work
            primarily with .NET, Next.js, React, Blazor, and TypeScript, choosing the rest of the stack
            around what the application needs.
          </p>
        </div>
        <div className={styles.toolbox}>
          <div className={styles.toolboxHeader}>
            <h3>Tools I work with</h3>
            <span>Across the stack</span>
          </div>
          <div className={styles.skillGrid}>
            {skillGroups.map((group) => (
              <div className={styles.skillGroup} key={group.name}>
                <h4>{group.name}</h4>
                <ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contact}`} id="contact" aria-labelledby="contact-heading">
        <div className={styles.contactTop}>
          <div>
            <p className={styles.eyebrow}>Get in touch</p>
            <h2 id="contact-heading">Have something<br /><span>in mind?</span></h2>
          </div>
          <div className={styles.contactAside}>
            <p>Tell me what you’re building.<br />I’d like to hear about it.</p>
            <a href="/Emirhan_Yaman_CV.pdf" target="_blank" rel="noreferrer" className={styles.resumeLink}>
              View my resume <Download size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <a className={styles.emailLink} href="mailto:yaman.emrhn@gmail.com">
          <span><Mail size={24} strokeWidth={1.5} aria-hidden="true" />yaman.emrhn@gmail.com</span>
          <span className={styles.emailArrow}><ArrowUpRight aria-hidden="true" strokeWidth={1.5} /></span>
        </a>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Emirhan Yaman <span>· Istanbul, Türkiye</span></p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/yamanemirhan" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/emirhanyaman" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </footer>
      </section>
    </div>
  );
}
