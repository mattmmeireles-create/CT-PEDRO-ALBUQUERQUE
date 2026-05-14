# VANGUARDA.CT — Landing Page PRD

## Original Problem Statement
Build a high-conversion, modern Landing Page for a Combat Sports Training Center (CT).
Theme: Dark Mode + Electric Crimson accent. Industrial Luxury aesthetic.
Sections: Hero, Modalities Grid (Boxe/Muay Thai/Kickboxing), Authority (3 pillars), floating WhatsApp CTA.
Stack: React + Tailwind. Full mobile responsiveness + subtle fade-in scroll animations.
Language: Portuguese (Brazil).

## Brand
- Name: **VANGUARDA.CT** (placeholder — user to confirm/change)
- Accent: Electric Crimson `#FF1744`
- Typography: Archivo Black (headlines) + Inter (body)
- WhatsApp: placeholder `5511999999999`

## Architecture
- Frontend-only React SPA, single route `/`
- Components: Navbar, Hero, Modalities, Authority, WhatsappFloat, Footer
- Custom `useReveal` hook (IntersectionObserver) drives scroll fade-ins
- shadcn `Button` for CTAs; lucide-react icons (Flame, ArrowRight, ShieldCheck, Cog, Building2, MessageCircle, X)
- No backend changes — `server.py` untouched

## User Personas
- **Aspiring fighter** — wants real combat training, disciplined environment
- **Fitness seeker** — interested in high-intensity calorie burn (boxing/kickboxing)
- **Returning athlete** — values methodology + elite infrastructure

## Implemented (2025-12)
- [x] Hero with exact headline, sub-headline, CTA "GANHAR 1 SEMANA GRÁTIS", stats column (07 anos / 18 coaches / 800 cal)
- [x] Modalities 3-column grid with exact descriptions (Boxe / Muay Thai / Kickboxing)
- [x] Authority 3 pillar cards (Ambiente Blindado / Metodologia Própria / Infraestrutura de Elite) + secondary CTA strip
- [x] Sticky WhatsApp floating button (bottom-right) with pulse rings + tooltip; opens `wa.me/5511999999999` with encoded message
- [x] Sticky Navbar (transparent → blurred on scroll), smooth-scroll nav links
- [x] Scroll fade-in animations with staggered card reveals
- [x] Full mobile responsiveness (tested at 390x844)
- [x] data-testid attributes on every interactive element
- [x] Frontend testing passed 100%

## Backlog
### P1
- Replace placeholder WhatsApp number `5511999999999` with real number
- Confirm/replace brand name "VANGUARDA.CT"
- Add real lutador/treino imagery (currently no photos used — pure typographic design)

### P2
- Testimonials section (depoimentos de alunos)
- Footer with address, hours, social links
- Schedule / horários section with class times per modality
- Coaches showcase with bios + credentials
- Pricing / planos section
- SEO meta tags + Open Graph image
- Analytics events on CTA clicks (already has PostHog hook from template)

## Next Tasks
1. Collect real WhatsApp number + brand name from client
2. Add testimonials + footer sections (P2)
3. Connect form-based lead capture to backend (optional next phase)
