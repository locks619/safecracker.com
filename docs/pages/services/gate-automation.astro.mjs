/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BZRmyhsN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout__UuPaFJ6.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_B6ZOtZzV.mjs';
export { renderers } from '../../renderers.mjs';

const $$GateAutomation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gate Automation & Mobile Welding - Safecracker", "description": "Automatic gate installation, repair, and mobile welding services. Expert troubleshooting and custom fabrication. CA License LCO 6687." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900"> <div class="absolute inset-0 opacity-20"> <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000" alt="Gate Automation" class="w-full h-full object-cover"> </div> <div class="container mx-auto px-4 z-10 relative text-center text-white" style="max-width: var(--container-max);"> <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"> <span class="text-amber-400 font-bold">GATE SERVICES</span> </div> <h1 class="text-display mb-4">Gate Automation & Welding</h1> <p class="text-body-lg text-gray-300">Custom solutions with mobile fabrication</p> </div> </section>  <section style="padding-top: var(--section-py); padding-bottom: var(--section-py);" class="bg-white"> <div class="container mx-auto px-4" style="max-width: var(--container-max);"> <div class="max-w-4xl mx-auto"> <div class="mb-16"> <h2 class="text-h2 mb-4">Automatic Gate Systems</h2> <p class="text-body-lg text-gray-700">Complete installation with operator selection and safety sensor integration. Slide gates, swing gates, and barrier arms for residential and commercial properties.</p> </div> <div class="mb-16"> <h2 class="text-h2 mb-4">Gate Troubleshooting & Repair</h2> <p class="text-body-lg text-gray-700">Diagnose intermittent failures, sensor misalignment, and operator malfunctions. Track binding and motor replacement with same-day capability.</p> </div> <div class="mb-16"> <h2 class="text-h2 mb-4">Mobile Welding Services</h2> <p class="text-body-lg text-gray-700">On-site welding for gate fabrication and hinge reinforcement. Custom metal work integrated with automation systems.</p> </div> <!-- CTA Block --> <div class="mt-16 p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-200"> <h3 class="text-h3 mb-4">Request Gate Service</h3> <p class="text-body text-gray-700 mb-6">Mobile service • 150-mile radius • Licensed CA LCO 6687</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="tel:6197948355" class="btn-primary"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
(619) 794-8355
</a> <a href="/contact" class="btn-secondary">
Get Written Quote
</a> </div> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/locks/safecracker/src/pages/services/gate-automation.astro", void 0);

const $$file = "C:/Users/locks/safecracker/src/pages/services/gate-automation.astro";
const $$url = "/services/gate-automation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GateAutomation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
