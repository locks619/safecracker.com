/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZRmyhsN.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
---
${renderComponent($$result, "BaseLayout", BaseLayout, { "title": "Safecracker Inc - Licensed Locksmith & Safe Services", "description": "Professional locksmith and safe services in Southern California. CA License LCO 6687. Call, text, or email us today." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", Header, {})}${maybeRenderHead()}<section class="hero-forced"><div class="hero-grid"><div class="hero-img-wrap" aria-hidden="true"><img src="/hero/phones.webp" alt="Safecracker Inc mobile preview" width="900" height="1200" loading="eager" decoding="async"></div></div></section>` })}`;
}, "C:/Users/locks/safecracker/src/pages/index.astro", void 0);

const $$file = "C:/Users/locks/safecracker/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
