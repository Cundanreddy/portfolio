PROJECT: Personal portfolio for Cundan, redesigned as the inside of a car.
Concept: the page is a car cockpit viewed from the driver's seat. The infotainment
screen is the main stage; the resume, projects and other info are "apps" on it.
The steering wheel, paddle shifters and a throttle are interactive. An engine sound
(synthesized) responds to throttle and paddle gear shifts.

STACK: React 19 + TypeScript (strict) + Vite + Tailwind CSS + React Router DOM.
Deployed to GitHub Pages with gh-pages. No Material UI, no Emotion (being removed).

ARCHITECTURE RULES
- Folder layout:
  src/cockpit/        Dashboard scene, SteeringWheel, Paddles, Cluster, Pedal
  src/infotainment/   Shell, StatusBar, Launcher, AppWindow, apps/*
  src/engine/         Engine simulation (pure TS model + React hook/store)
  src/audio/          EngineAudio interface + implementations
  src/data/           All portfolio content as typed data (resume, projects, skills...)
  src/theme/          Design tokens (CSS variables), day/night theme
- Engine state (rpm, gear, throttle, speed) lives in an external store or refs, NOT in
  React state that re-renders every frame. Gauges read it via requestAnimationFrame or
  CSS variables. Never re-render the whole tree at 60fps.
- All audio goes through the `EngineAudio` interface (src/audio/EngineAudio.ts).
  Implementations are swappable. A C++/WASM implementation will be added later by me.
- Content is data-driven: adding a project or skill must only require editing src/data/*.
- Never invent facts about me. Use clearly marked placeholder text ("TODO: ...") for
  any personal content that is not provided.

QUALITY RULES
- TypeScript strict, no `any`, no ts-ignore. ESLint must pass.
- Accessible: real <button>/<a> elements, aria-labels, visible focus, keyboard support,
  respects prefers-reduced-motion.
- Audio never starts without a user gesture and always has a visible mute control.
- Mobile portrait must work (simplified layout, see Phase 2).
- Prefer small focused components (<200 lines). No giant files.
- After each task: run `npm run build` and `npm run lint` and fix all errors.
- Do not add dependencies unless the phase prompt allows it. Ask first.

WORKFLOW RULES
- Do only what the current phase asks. Do not start later phases.
- At the end of each phase, print: files changed, how to test, anything left undone.