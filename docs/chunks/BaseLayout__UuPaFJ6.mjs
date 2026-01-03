import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_BZRmyhsN.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://safecracker.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  const description = Astro2.props.description || "Professional locksmith, safe, and gate automation services. CA License LCO 6687. Mobile service across 150-mile radius from Fallbrook, CA.";
  const canonical = Astro2.props.canonical || Astro2.url.pathname;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute("https://locks619.github.io/safecracker.com" + canonical, "href")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute("https://locks619.github.io/safecracker.com" + canonical, "content")}><meta name="twitter:card" content="summary"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="antialiased" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/locks/safecracker/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
