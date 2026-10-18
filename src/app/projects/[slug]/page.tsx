import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/navigation";

type Project = {
  name: string;
  category: string;
  lead: string;
  description: string;
  stack: string;
  role: string;
  scope: string;
  repositories: { label: string; url: string }[];
  architecture?: { label: string; title: string; description: string }[];
  sections: { title: string; paragraphs?: string[]; points?: string[] }[];
  note?: string;
  next: string;
};

const projects: Record<string, Project> = {
  commercepilot: {
    name: "CommercePilot",
    category: "Local AI / Commerce",
    lead: "A shopping assistant that can find products, use real tools, and stop for your approval.",
    description: "A local AI shopping assistant built with Next.js, .NET, MCP, and PostgreSQL, with explicit approval before consequential actions.",
    stack: ".NET 10 · Next.js 16 · MCP · PostgreSQL / pgvector",
    role: "Full-stack development: storefront, chat, commerce services, MCP integration, and local retrieval.",
    scope: "A working local application with a fictional catalog, persistent conversations, and simulated order fulfilment.",
    repositories: [{ label: "View source", url: "https://github.com/yamanemirhan/commercepilot" }],
    sections: [
      {
        title: "A conversation connected to the application",
        paragraphs: [
          "CommercePilot combines a storefront with a persistent, streaming chat. A shopper can ask for products, refer to ‘the second one,’ add it to their bag, and prepare a checkout without leaving the conversation.",
          "The assistant works with live application data through the Model Context Protocol. The .NET API validates proposed calls, and the MCP server checks identity and scopes before invoking the same commerce services used by the storefront.",
        ],
      },
      {
        title: "A clear boundary before a change",
        paragraphs: [
          "Checkout, cancellation, and refund stop at a server-owned review. The card shows the exact terms and offers explicit Approve and Reject controls. A chat reply such as ‘yes’ cannot execute the action, and the model has no confirmation tool.",
        ],
        points: [
          "Prices, stock, ownership, and eligibility are checked again at approval time. Changed or expired terms require a new review.",
          "Confirmation commits the order, inventory, payment state, and timeline together in PostgreSQL. Repeating a completed approval returns the existing result.",
          "Typed product, bag, order, and review cards stream alongside the response; conversation records remain in the database.",
        ],
      },
      {
        title: "Local models, grounded answers",
        paragraphs: [
          "Ollama runs conversation and embedding models locally. Reviewed site guidance is published into PostgreSQL with pgvector, so answers about the product can include source excerpts, links, and version information.",
          "The responsibilities stay separate: retrieval supplies public site facts, conversation history preserves previous messages and tool results, and authenticated MCP tools supply personal shopping data. Docker Compose brings up the storefront, API, MCP server, and database.",
        ],
      },
    ],
    note: "The catalog and product specifications are fictional. Payments and delivery are simulated; this project does not process real charges or collect card details.",
    next: "inventory-management",
  },
  "inventory-management": {
    name: "InventoryManagement",
    category: "Business software / Inventory & purchasing",
    lead: "Stock, warehouses, and purchasing in a shared application with distinct company workspaces.",
    description: "A multi-company inventory and purchasing application using ASP.NET Core, Next.js, PostgreSQL, and company-scoped authorization.",
    stack: ".NET 10 · Next.js · PostgreSQL · Keycloak · SignalR",
    role: "Full-stack application development, business workflows, company-scoped access, and deployment.",
    scope: "Inventory and purchasing across multiple companies, with role-based access and a responsive Turkish / English interface.",
    repositories: [{ label: "View source", url: "https://github.com/yamanemirhan/InventoryManagement" }],
    architecture: [
      { label: "Interface", title: "Company workspace", description: "Next.js and TypeScript provide stock, purchase, and reporting workflows. Keycloak handles sign-in." },
      { label: "Application", title: "Business rules", description: ".NET endpoints check company membership and roles before MediatR handlers apply the business rules." },
      { label: "Persistence & updates", title: "Consistent records", description: "EF Core stores changes in PostgreSQL. Background workers dispatch outbox events and SignalR change notices." },
    ],
    sections: [
      {
        title: "The everyday inventory workflow",
        paragraphs: [
          "The application brings products, warehouses, suppliers, stock transfers, physical counts, and minimum-stock warnings into one workspace. Purchase orders support partial receipts and supplier returns, so the system follows the actual progress of a purchase.",
        ],
        points: [
          "Users can belong to multiple companies and switch between them, with Owner, Manager, Operator, and Viewer roles.",
          "CSV and XLSX imports offer templates, row previews, downloadable errors, and atomic company-scoped saves with duplicate-upload protection.",
          "QR and barcode lookup supports cameras, USB readers, and images; reports and activity history make changes easier to follow.",
        ],
      },
      {
        title: "Keeping company data and stock changes consistent",
        paragraphs: [
          "Companies share a database. Membership checks, company-scoped queries, write guards, and company-aware foreign keys enforce the boundaries between them. Row versions protect stock and purchase-order updates from stale writes.",
          "Business changes and audit / outbox entries commit together. SignalR sends change notices, then the interface refetches authorized data rather than treating a notification as the source of truth.",
        ],
      },
      {
        title: "From source to a running service",
        paragraphs: [
          "GitHub Actions builds ARM64 images for Oracle Cloud. Docker Compose runs the services behind Nginx and HTTPS, with separate staging and production environments. OpenTelemetry, health checks, and operational dashboards support inspection of the running application.",
        ],
      },
    ],
    next: "workgrid",
  },
  workgrid: {
    name: "WorkGrid",
    category: "Collaboration / Workspaces & tasks",
    lead: "A shared place for workspaces, boards, and tasks, with activity that reaches the people working together.",
    description: "A full-stack collaboration application with workspaces, boards, tasks, activity logs, and real-time notifications.",
    stack: ".NET 9 · Next.js 15 · PostgreSQL · RabbitMQ · SignalR",
    role: "Backend and frontend development across workspace management, task workflows, and real-time communication.",
    scope: "A collaboration application organised around workspaces, boards, tasks, activity logs, and notifications.",
    repositories: [
      { label: "Backend source", url: "https://github.com/yamanemirhan/workgrid-server" },
      { label: "Frontend source", url: "https://github.com/yamanemirhan/workgrid-client" },
    ],
    architecture: [
      { label: "Interface", title: "Shared workspace", description: "Next.js 15, React 19, and TypeScript provide the board and task interfaces." },
      { label: "Application", title: "Workspace services", description: "The .NET 9 backend handles workspaces, boards, tasks, activity records, and notifications." },
      { label: "Data & communication", title: "Connected updates", description: "PostgreSQL persists data. RabbitMQ, SignalR, and AWS S3 support messaging, live updates, and file storage." },
    ],
    sections: [
      {
        title: "Structure for collaborative work",
        paragraphs: [
          "WorkGrid organises collaboration into workspaces, boards, and tasks. The project connects the interface used to manage that work with the backend services that store it and keep track of activity.",
          "Activity logs and notifications make changes visible beyond the task itself. The frontend and backend live in separate repositories, with Next.js and React on the client and a .NET API behind it.",
        ],
      },
      {
        title: "Communication alongside persistence",
        paragraphs: [
          "PostgreSQL holds the application data, while RabbitMQ supports asynchronous messaging and SignalR delivers real-time updates to connected clients. AWS S3 provides object storage for files.",
          "This project brings several concerns together: modelling collaborative work, building the corresponding interfaces, recording activity, and carrying updates from the server back to the browser.",
        ],
      },
    ],
    next: "commercepilot",
  },
};

const gallery = [
  { file: "discovery", title: "Find the right product", description: "Live catalog results with prices, available stock, and product actions.", alt: "CommercePilot chat showing two in-stock audio products under 100 dollars, with product cards and add-to-bag buttons." },
  { file: "approval", title: "Review before committing", description: "Exact items and terms, with a separate decision to approve or reject.", alt: "CommercePilot checkout review for a Pebble Mini with a 69-dollar total, expiration time, and explicit Reject and Approve buttons." },
  { file: "guidance", title: "Answers with references", description: "Site guidance backed by retrieved, versioned source cards.", alt: "CommercePilot explaining where to track orders, alongside site reference cards with source information." },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${slug}/` },
    openGraph: {
      title: `${project.name} — Emirhan Yaman`,
      description: project.description,
      url: `/projects/${slug}/`,
      type: "article",
    },
    twitter: { card: "summary", title: `${project.name} — Emirhan Yaman`, description: project.description },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();
  const next = projects[project.next];

  return (
    <>
      <Navigation />
      <main className="container" id="main">
        <header className="case-hero">
          <a href="/#work" className="back-link"><ArrowLeft size={15} aria-hidden="true" />All projects</a>
          <div className="case-heading">
            <div><p className="case-kicker">{project.category}</p><h1>{slug === "inventory-management" ? "Inventory Management" : project.name}</h1></div>
            <p className="case-lead">{project.lead}</p>
          </div>
          <div className="case-meta">
            <p><strong>Built with</strong>{project.stack}</p>
            <div className="case-links">
              {project.repositories.map((repository) => (
                <a key={repository.url} href={repository.url} target="_blank" rel="noreferrer">{repository.label}<ArrowUpRight size={15} aria-hidden="true" /></a>
              ))}
            </div>
          </div>
        </header>

        {slug === "commercepilot" ? (
          <div className="case-gallery" role="group" aria-label="Real CommercePilot conversations">
            {gallery.map((screen, index) => (
              <figure key={screen.file}>
                <Image src={`/projects/commercepilot/${screen.file}.jpg`} alt={screen.alt} width={462} height={718} sizes="(max-width: 640px) calc(100vw - 86px), (max-width: 900px) 27vw, 360px" priority={index === 0} />
                <figcaption><strong>{screen.title}</strong>{screen.description}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="architecture" role="group" aria-label={`${project.name} application architecture`}>
            {project.architecture?.map((layer) => (
              <div key={layer.label}><span>{layer.label}</span><h2>{layer.title}</h2><p>{layer.description}</p></div>
            ))}
          </div>
        )}

        <div className="case-body">
          <aside className="case-sidebar" aria-label="Project context">
            <h2>My contribution</h2>
            <p>{project.role}</p>
            <h2>Project scope</h2>
            <p>{project.scope}</p>
          </aside>
          <div className="case-content">
            {project.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            {project.note && <section className="case-note" aria-label="Demo scope"><p>{project.note}</p></section>}
          </div>
        </div>

        <footer className="case-bottom">
          <a href="/#work" className="back-link"><ArrowLeft size={15} aria-hidden="true" />Back to selected work</a>
          <a href={`/projects/${project.next}/`} className="text-link">Next: {next.name}<ArrowRight size={17} aria-hidden="true" /></a>
        </footer>
      </main>
    </>
  );
}
