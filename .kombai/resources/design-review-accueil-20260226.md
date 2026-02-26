# Design Review Results: Page d'accueil (/)

**Review Date**: 2026-02-26
**Route**: `/`
**Focus Areas**: Visual Design · UX/Usability · Responsive/Mobile · Accessibility

> **Note**: The page rendered a runtime 500 error in the browser because the Strapi backend is unreachable (videos & documents API calls fail on `VideoComponent` and `DocumentsComponent`). The live-preview analysis is therefore supplemented by full static code analysis of all components.

---

## Summary

The page has a strong design identity (deep bordeaux `#6C1C23`, warm gold `#C4A55F`, serif typography) but suffers from several structural and accessibility problems that need addressing before production. The most critical concerns are: a complete navigation failure (all links point to `/`), nested interactive elements creating invalid HTML, missing ARIA attributes, a French-language site without a `lang="fr"` attribute, and dangerously small text (9px) on mobile quick-links. Visual inconsistencies around spacing rhythm and hardcoded colours scattered across 7+ files also pose a long-term maintenance risk.

---

## Issues

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | **Runtime crash**: `VideoComponent` and `DocumentsComponent` call `useStrapi()` at the top level with `await find(...)` — if the backend is down the whole page throws 500 and renders nothing | 🔴 Critical | UX/Usability | `app/components/acceuilComponent/VideoComponent.vue:2-5`, `DocumentsComponent.vue:2-4` |
| 2 | **All nav links point to `/`**: Every `navLinks` entry has `to: '/'` — navigation is completely non-functional | 🔴 Critical | UX/Usability | `app/components/AppHeader.vue:27-35` |
| 3 | **Nested interactive elements (`<Button><NuxtLink>`)**:  Placing a `<NuxtLink>` inside a `<Button>` renders an `<a>` inside a `<button>` — invalid HTML per spec, breaks keyboard navigation & screen readers | 🔴 Critical | Accessibility | `ActualiteComponent.vue:44-46`, `EtudeComponent.vue:50-52`, `CarnetDeVoyageComponent.vue:44-46`, `VideoComponent.vue:56-58`, `DocumentsComponent.vue:37-40`, `InstitutionComponent.vue:33-39` |
| 4 | **Missing `lang="fr"` on `<html>`**: WCAG 3.1.1 (Level A) requires the primary language of the page to be declared — screen readers use this to select the correct voice and pronunciation | 🔴 Critical | Accessibility | `nuxt.config.ts` (needs `app.head.htmlAttrs.lang`) |
| 5 | **Duplicate `id="commander"`**: `CardHeader` uses `id="commander"` inside a `v-for` loop, producing one duplicate ID per card. Duplicate IDs break DOM APIs, ARIA references, and are invalid HTML | 🔴 Critical | Accessibility | `ActualiteComponent.vue:32`, `CarnetDeVoyageComponent.vue:32` |
| 6 | **Mobile quick-link labels use `text-[9px]`**: 9 px is far below the WCAG minimum readable text size and below any mobile-legibility standard (min recommended: 12 px) | 🟠 High | Responsive/Mobile | `CarouselComponent.vue:93` |
| 7 | **Mobile menu toggle button has no `aria-label`**: The hamburger/X button gives no name to assistive technology — a screen reader user has no way to know its purpose | 🟠 High | Accessibility | `AppHeader.vue:65-68`, `AppHeader.vue:81-84` |
| 8 | **Video `autoplay` without `muted`**: Browsers block unmuted autoplay; additionally, auto-playing media is disruptive UX. Should be `muted autoplay` at minimum, or remove `autoplay` entirely | 🟠 High | UX/Usability | `VideoComponent.vue:21-23` |
| 9 | **Brand colours hardcoded in 7+ files**: `#6C1C23` and `#C4A55F` appear as magic strings in every component. They should be CSS custom properties (`--color-primary`, `--color-gold`) in `main.css` and used via Tailwind theme tokens | 🟠 High | Visual Design | `main.css`, `AppHeader.vue`, `AppFooter.vue`, `InstitutionComponent.vue`, `ActualiteComponent.vue`, `EtudeComponent.vue`, `CarnetDeVoyageComponent.vue`, `VideoComponent.vue`, `DocumentsComponent.vue`, `AproposComponent.vue` |
| 10 | **No error/loading state for Strapi calls**: Even when the backend is up, there is no loading skeleton or error fallback for `VideoComponent` and `DocumentsComponent` — a slow API silently breaks the UI | 🟠 High | UX/Usability | `VideoComponent.vue:2-5`, `DocumentsComponent.vue:2-4` |
| 11 | **Section vertical rhythm is inverted**: `py-10 lg:py-8` means mobile sections have *more* top/bottom spacing than desktop — counterintuitive. Desktop sections typically need more breathing room | 🟠 High | Visual Design | All `acceuilComponent/*.vue` section wrappers |
| 12 | **`CardTitle` uses `font-mono` (Geist Mono) for content cards**: Card titles in Actualités, Etudes, Carnets de voyages, and Documents all use a monospace font. This is semantically and aesthetically inconsistent with the serif/sans design language elsewhere | 🟡 Medium | Visual Design | `ActualiteComponent.vue:33`, `EtudeComponent.vue:39`, `CarnetDeVoyageComponent.vue:33`, `DocumentsComponent.vue:28` |
| 13 | **No visible focus rings on interactive links**: `nav-link`, `scroll-link`, quick-links, and card buttons rely only on `outline-ring/50` from the global reset but have no `focus-visible:` styles — keyboard users can't track focus | 🟡 Medium | Accessibility | `main.css:121`, `AppHeader.vue:55`, `CarouselComponent.vue:86-96` |
| 14 | **`#C4A55F` (gold) on white fails WCAG AA contrast**: The gold colour has a contrast ratio of approximately 2.5:1 against white — WCAG AA requires 4.5:1 for normal text and 3:1 for large text / UI components | 🟡 Medium | Accessibility | `AproposComponent.vue:14`, `AppHeader.vue:55` |
| 15 | **Logo path missing leading slash in AproposComponent**: `src="logo4.png"` — relative paths do not resolve correctly in all server/Nuxt rendering contexts; should be `src="/logo4.png"` | 🟡 Medium | Visual Design | `AproposComponent.vue:10` |
| 16 | **Mobile drawer does not close on link click**: Clicking a nav link in the mobile menu does not set `isOpen.value = false`, so the drawer stays open after navigation | 🟡 Medium | UX/Usability | `AppHeader.vue:96-104` |
| 17 | **Section background colour creates visual islands**: `bg-[#F9F7F4]` is applied to the inner `max-w-7xl` container rather than the outer full-width element — on wide viewports the background stops at the content column, leaving mismatched strips | 🟡 Medium | Visual Design | `ActualiteComponent.vue:22`, `EtudeComponent.vue:27`, `DocumentsComponent.vue:15` |
| 18 | **`h1` in page header vs `h2` in carousel**: The `<h1>` ("Sacré-Cœur de Breteuil") is inside the sticky header element which is hidden on scroll. The carousel titles use `<h2>`. When the h1 is hidden, there's no page-level heading. Consider promoting one carousel title to `h1` | 🟡 Medium | Accessibility | `AppHeader.vue:77`, `CarouselComponent.vue:69` |
| 19 | **`<main>` has no `aria-label`**: The main landmark in `index.vue` has no label, making it indistinguishable for AT users who navigate by landmarks | 🟡 Medium | Accessibility | `app/pages/index.vue:16` |
| 20 | **Missing skip-navigation link**: No "Aller au contenu principal" skip link exists, forcing keyboard and screen reader users to tab through the entire header on every page load | 🟡 Medium | Accessibility | `app/layouts/default.vue` |
| 21 | **Section heading "Etudier au Sacré-Coeur" — missing œ ligature**: Should be "Sacré-Cœur" (with the Œ ligature), consistent with the brand name used everywhere else | 🟡 Medium | Visual Design | `EtudeComponent.vue:32` |
| 22 | **`eslint-disable` comment duplicated twice** in AppHeader | ⚪ Low | Visual Design | `AppHeader.vue:1-2` |
| 23 | **Carousel images from Cloudinary use low-res 612×612 originals**: All carousel slides use iStock thumbnails (612 × 612 px) as full-viewport backgrounds — they will appear blurry on retina/wide displays | ⚪ Low | Visual Design | `CarouselComponent.vue:20-34` |
| 24 | **Quick-link touch targets may fall below 44×44 px on mobile**: Icon wrapper is `p-2` + 24 px icon ≈ 40 px — 4 px short of the WCAG 2.5.5 recommended minimum touch target | ⚪ Low | Responsive/Mobile | `CarouselComponent.vue:88-91` |
| 25 | **`video` elements in thumbnail list have no `aria-label` or `title`**: Thumbnail videos are purely visual but have no accessible name, making them opaque to AT | ⚪ Low | Accessibility | `VideoComponent.vue:39-41` |

---

## Criticality Legend
- 🔴 **Critical**: Breaks functionality or violates accessibility standards (Level A)
- 🟠 **High**: Significantly impacts user experience or design quality
- 🟡 **Medium**: Noticeable issue that should be addressed
- ⚪ **Low**: Nice-to-have improvement

---

## Next Steps

### Immediate (Critical — before launch)
1. Add error/loading fallbacks to `VideoComponent` and `DocumentsComponent` (wrap in try/catch or use `useLazyAsyncData`)
2. Fix all nav link `to` values with real routes
3. Replace `<Button><NuxtLink>` with `<Button as-child><NuxtLink>` (shadcn `asChild` pattern) or invert to `<NuxtLink class="..."><Button>` 
4. Add `app: { head: { htmlAttrs: { lang: 'fr' } } }` to `nuxt.config.ts`
5. Remove `id="commander"` from inside `v-for` loops

### Short-term (High priority)
6. Define `--color-primary: #6C1C23` and `--color-gold: #C4A55F` in `main.css` and update all components to use Tailwind tokens
7. Increase quick-link label font size to at minimum `text-[11px]` → `text-xs` (12 px)
8. Add `aria-label="Ouvrir le menu"` / `aria-label="Fermer le menu"` to hamburger buttons
9. Remove `autoplay` from the main video or at minimum add `muted`
10. Move section background colours to the outer full-width `<section>` element

### Medium-term
11. Add `focus-visible:` styles for all interactive elements
12. Replace `font-mono` on CardTitles with `font-sans` or `font-serif`
13. Fix section `py-10 lg:py-16` spacing rhythm
14. Add close-on-link-click logic to the mobile drawer
15. Add a skip-navigation link in `default.vue`
16. Move `h1` to the carousel hero or promote it properly in the page landmark hierarchy
