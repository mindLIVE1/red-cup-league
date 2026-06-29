# Red Cup League Berlin

Landing page for an underground Berlin beer-pong tournament series. Dark Berlin
varsity identity, with a signature scroll-film: the Fernsehturm sphere detaches,
crossfades into a beer-pong ball, arcs across the page, and lands in a red cup —
revealing the upcoming events.

## Stack

- **Astro** — static landing page, component-per-section
- **GSAP** + **ScrollTrigger** + **MotionPathPlugin** — the pinned scroll animation
- **Fontsource** (self-hosted) — Anton / Hanken Grotesk / DM Mono
- No external runtime requests; everything bundles locally.

## Run

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the build
```

## Design system

| Role | Token | Use |
| --- | --- | --- |
| Ground | `--berlin-black #090A0F` | page background |
| Brand | `--cup-red #E63946` | cups, CTAs, active states |
| Secondary | `--varsity-blue #1D4ED8` | badges, accents |
| Text | `--off-white #F8F7F2` | primary text |
| Winner | `--warm #FACC15` | leader row, gold moments only |

- **Anton** — athletic poster display (hero, section titles, stats)
- **Hanken Grotesk** — body / UI
- **DM Mono** — the "scoreboard voice": data, timestamps, badges, ranking digits

All tokens live in [`src/styles/global.css`](src/styles/global.css).

## Editing content

Events, leaderboard, rules, and FAQ are data-driven in
[`src/data/league.ts`](src/data/league.ts) — edit there, no layout changes needed.

## The hero animation

[`src/components/HeroAnimation.astro`](src/components/HeroAnimation.astro) holds the
layered SVG scene and the GSAP timeline. Layers use developer-friendly IDs
(`#tv-tower-sphere-metal`, `#beer-pong-ball`, `#ball-dimples`, `#red-cup`,
`#cup-splash`, `#ball-path`) so each element is animated directly.

- **Desktop / tablet:** pinned, scroll-scrubbed timeline (`gsap.matchMedia`).
- **Mobile:** shorter pin, lighter movement.
- **`prefers-reduced-motion`:** no pin/scrub — a calm static tableau (the tower
  sphere shown as the ball, the cup waiting below, all copy legible).

## Sections

Nav · Hero scroll-film · Upcoming Events · How It Works · Rules · Hall of Fame ·
Recap · Register CTA · FAQ · Footer.
