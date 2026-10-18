import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";

export default function NotFound() {
  return <><Navigation /><main id="main" className="container not-found"><span className="case-kicker">404 / Page not found</span><h1>A wrong turn.</h1><p>This page doesn’t exist. The work is back this way.</p><a className="button primary" href="/"><ArrowLeft size={17} />Back to the portfolio</a></main></>;
}
