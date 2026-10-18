"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navigation({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const prefix = home ? "" : "/";
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) { setOpen(false); trigger.current?.focus(); }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <header className="header container" id="top">
      <a href="/" className="identity" aria-label="Emirhan Yaman, home">
        <span className="monogram" aria-hidden="true">EY</span><span>Emirhan Yaman</span>
      </a>
      <button ref={trigger} className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav id="navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
        <a href={`${prefix}#work`} onClick={() => setOpen(false)}>Work</a>
        <a href={`${prefix}#experience`} onClick={() => setOpen(false)}>Experience</a>
        <a href={`${prefix}#about`} onClick={() => setOpen(false)}>About</a>
        <a href={`${prefix}#contact`} className="contact-button" onClick={() => setOpen(false)}>Get in touch</a>
      </nav>
    </header>
  );
}
