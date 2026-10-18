"use client";

import Image from "next/image";
import { ArrowUpRight, Compass } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";

const scenes = [
  { label: "Discover products", image: "discovery", second: "approval", alt: "CommercePilot showing two matching audio products, Tone Compact and Pebble Mini", nextAlt: "CommercePilot asking for explicit approval of a demo order", description: "Find the right products. Review the exact action before it happens." },
  { label: "Review actions", image: "approval", second: "discovery", alt: "The CommercePilot approval card showing order details and Approve and Reject buttons", nextAlt: "Product results from the CommercePilot discovery flow", description: "An explicit decision, with the items, price, and action in plain sight." },
  { label: "Site guidance", image: "guidance", second: "discovery", alt: "CommercePilot answering a site question with retrieved documentation and source citations", nextAlt: "CommercePilot product discovery conversation", description: "Answers grounded in site documentation, with sources you can inspect." },
];

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const scene = scenes[active];
  function onKey(event: KeyboardEvent<HTMLButtonElement>) {
    let next = active;
    if (event.key === "ArrowRight") next = (active + 1) % scenes.length;
    else if (event.key === "ArrowLeft") next = (active + scenes.length - 1) % scenes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = scenes.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  return (
    <div className="showcase">
      <div className="showcase-stage">
        <div className="showcase-heading">
          <a href="/projects/commercepilot/" className="showcase-brand"><Compass size={22} strokeWidth={1.7} />CommercePilot<ArrowUpRight className="brand-arrow" size={15} /></a>
          <span>Local AI shopping assistant</span>
        </div>
        <div className="screenshot-scene" id="showcase-panel" role="tabpanel" aria-labelledby={`showcase-tab-${active}`} tabIndex={0}>
          <div className={`screenshot-pair scene-${active}`} key={active}>
            <div className="screen screen-back">
              <Image src={`/projects/commercepilot/${scene.second}.jpg`} alt={scene.nextAlt} width={462} height={718} sizes="(max-width: 600px) 52vw, (max-width: 1000px) 43vw, 27vw" priority={active === 0} />
            </div>
            <div className="screen screen-front">
              <Image src={`/projects/commercepilot/${scene.image}.jpg`} alt={scene.alt} width={462} height={718} sizes="(max-width: 600px) 58vw, (max-width: 1000px) 48vw, 30vw" priority={active === 0} />
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-tabs" role="tablist" aria-label="CommercePilot walkthrough">
        {scenes.map((item, i) => <button key={item.label} ref={(element) => { tabs.current[i] = element; }} id={`showcase-tab-${i}`} type="button" role="tab" aria-selected={active === i} aria-controls="showcase-panel" tabIndex={active === i ? 0 : -1} onKeyDown={onKey} onClick={() => setActive(i)}>{item.label}</button>)}
      </div>
      <p className="showcase-caption" aria-live="polite">{scene.description}</p>
    </div>
  );
}
