# Cockpit Portfolio: Vibecoding Prompt Pack

Car-interior portfolio with an infotainment screen as the main stage, interactive steering wheel and paddles, and engine sound that responds to the paddles.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS, React Router, GitHub Pages (gh-pages).

## How to use this file

1. Put the **Global Context** block into `AGENTS.md` (or paste it at the start of every session). It keeps the agent consistent across phases.
2. Run **one phase at a time**. Paste the phase prompt, let the agent finish, run `npm run dev` and `npm run build`, check the acceptance list yourself, then `git commit`.
3. If a phase goes wrong, `git reset --hard` to the last commit and re-run it with a tighter prompt. Don't stack fixes on a bad generation.
4. Never skip the "Acceptance criteria". If something fails, paste the failing item back to the agent as the next prompt.
5. Real content (resume text, project descriptions) is yours to fill in `src/data/*`. Prompts use placeholders so the agent never invents facts about you.

---

## Global Context (paste once into AGENTS.md)

````text
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
````

---

## Phase 0: Audit and plan (no code changes)

Goal: let the agent read the real repo before touching it.

````text
Read the whole repository first and DO NOT modify any files yet.

Report back:
1. Current structure: pages, components, routes, data, styles, assets.
2. Where Material UI / Emotion are used (list every file and component).
3. Current router setup (BrowserRouter vs HashRouter), vite `base` setting, and how
   gh-pages deployment is configured (package.json scripts, branch, homepage).
4. Tailwind setup status (config file, content globs, directives in CSS).
5. Existing portfolio content (resume, projects, skills, contact) and where it lives,
   so we can migrate it into src/data/*.
6. Anything risky for the redesign (global CSS that will clash, big dependencies,
   outdated config).

Then propose a short migration plan to reach the folder layout in AGENTS.md. Wait for
my approval before changing anything.
````

**Acceptance:** you get a clear inventory and plan. Fix anything it misunderstood before moving on.

---

## Phase 1: Foundation cleanup

Goal: remove MUI/Emotion, fix routing and base path for GitHub Pages, create the folder structure and data files.

````text
Phase 1: Foundation. Do only this phase.

Tasks:
1. Remove Material UI and Emotion dependencies and every usage of them. Where a MUI
   component was used for existing pages, replace it with a plain element styled with
   Tailwind so nothing breaks. Keep FontAwesome/React Icons only if used.
2. Make sure Tailwind is correctly configured (content globs cover src/**/*.{ts,tsx},
   directives present). Remove CSS that will clash with a full-viewport app
   (default body margins, global font overrides, scroll-behavior hacks).
3. Routing: switch to HashRouter (simplest for GitHub Pages) unless the repo already
   has a working 404.html redirect strategy. Set vite `base` correctly for the repo
   name and verify `npm run build && npm run preview` works with deep links.
4. Create the folder structure from AGENTS.md (empty index files / README stubs are OK).
5. Create typed data files with placeholder content, migrating anything that already
   exists in the repo:
   - src/data/profile.ts   (name, title, tagline, location, contact links)
   - src/data/resume.ts    (experience[], education[], resumePdfUrl)
   - src/data/projects.ts  (id, title, summary, tags[], links[], status)
   - src/data/skills.ts    (categories with skills and a 0-100 level)
   - src/data/timeline.ts  (career/education milestones for the "Maps" app)
   Seed projects.ts with two entries from my real work:
   * Carcade: maps real vehicle control signals to game controller input for driving games.
   * Convoy Protocol: in-car feature combining group intercom with CAN-bus telemetry relay for vehicle convoys.
   Everything else must be "TODO" placeholders.
6. Add design tokens in src/theme/tokens.css as CSS variables (colors, radii, glow,
   font stacks) with a day and a night palette switched by [data-theme].
7. Add a placeholder route for each future app: /, /resume, /projects, /skills,
   /media, /contact, /maps, /settings. Each renders a simple "TODO" component.

Constraints: no cockpit visuals yet. No new dependencies besides removing old ones.

Acceptance criteria:
- `npm run build`, `npm run lint`, `npm run preview` all succeed.
- Refreshing on /#/projects works in preview.
- No imports from @mui/* or @emotion/* remain.
- Existing portfolio content is preserved in src/data/*.
````

**Acceptance (you check):** app runs, no MUI left, your old content is not lost.

---

## Phase 2: Static cockpit scene and screen frame

Goal: the car interior as layered SVG/CSS with a screen slot. No interactions yet.

````text
Phase 2: Static cockpit layout. Do only this phase.

Build the cockpit scene in src/cockpit/ as a fixed-aspect "stage".

STAGE
- A 16:9 stage that scales to fit the viewport using CSS (letterboxed), design
  coordinates 1920x1080. All cockpit art is inline SVG / CSS (no raster images, no 3D
  libraries, no new dependencies).
- Layers from back to front: (a) windshield view: soft gradient sky and a stylized
  dark road/horizon, subtle; (b) A-pillars and roof edge; (c) dashboard body with
  stitched-leather-like texture via CSS gradients; (d) instrument cluster housing
  (left, behind wheel); (e) center infotainment slot (large, landscape, ~38% of stage
  width, slightly angled via CSS perspective); (f) steering wheel (SVG, centered in
  front of the cluster, placeholder only); (g) two paddle shifters behind the wheel
  (left/right, placeholder shapes); (h) center console hint at the bottom with a
  start/stop button placeholder and a throttle pedal placeholder at bottom-right.
- Subtle parallax: layers shift 4-10px with pointer movement (disabled if
  prefers-reduced-motion).
- Style direction: premium dark interior, thin accent glow (use --accent token),
  carbon/matte surfaces. Pick ONE of these and implement it via tokens so I can switch
  later: "sport" (red accent), "luxury" (amber/wood), "ev" (cool cyan, minimal).
  Default: "ev".

SCREEN SLOT
- Create <ScreenSlot> component that renders children inside the infotainment bezel.
  For now render the router <Outlet /> placeholder text "Infotainment goes here".

MOBILE / PORTRAIT
- Below 768px wide or in portrait: do NOT show the full cockpit. Show the infotainment
  screen full-width (top), and a compact control bar at the bottom (placeholder boxes
  for paddles, throttle, start button). Same components, different layout.

Constraints: no engine, no audio, no wheel rotation yet.

Acceptance criteria:
- Looks coherent at 1920x1080, 1366x768, 2560x1080 and a phone portrait viewport.
- No horizontal scrollbars; stage never overflows.
- Reduced motion disables parallax.
- Layers are separate components so they can be edited independently.
- build + lint pass.
````

**Acceptance (you check):** screenshot at three sizes. Tweak the art direction now; it is cheapest here.

---

## Phase 3: Infotainment shell and app navigation

Goal: Android-Automotive-style home screen and app windows.

````text
Phase 3: Infotainment shell. Do only this phase.

Build src/infotainment/ so <ScreenSlot> shows a real car OS.

SHELL
- StatusBar: clock (updates each minute), a fake signal/Wi-Fi/Bluetooth icon set,
  outside temperature placeholder, and a day/night toggle that sets
  document.documentElement.dataset.theme.
- Launcher (home route "/"): grid of app tiles for Resume, Projects, Skills, Media,
  Phone (contact), Maps (timeline), Settings. Large touch-friendly rounded tiles with
  icon + label, a hero widget on the left ("Hi, I'm <name>", title, tagline from
  src/data/profile.ts, and a "View resume" button).
- Dock at the bottom: Home, Back, and the three most recent apps.
- AppWindow: wrapper for each app route with a title bar, back button, and a smooth
  open/close transition (scale+fade, 200ms, disabled for reduced motion).
- "Expand" button on AppWindow that enlarges the screen to ~90% of the viewport over the
  cockpit (CSS transform, not layout reflow) with a dimmed cockpit behind it. Esc or
  the same button collapses it. Persist expanded state in a React context.
- Boot sequence: on first load the screen shows a brief boot logo ("Cundan OS",
  ~1.5s) before the launcher. Skippable by click. Make this component accept an
  `ignited` prop; for now treat it as always true (ignition comes in Phase 6).

NAV INPUT SERVICE
- Create src/infotainment/nav.ts with a small event interface:
  navNext(), navPrev(), navSelect(), navBack(), navHome(). The launcher focus moves
  between tiles using it. Keyboard arrows/Enter/Esc call these. Later, steering-wheel
  thumb buttons will call the same functions.

Constraints: apps can still be TODO stubs; no engine/audio.

Acceptance criteria:
- All routes reachable by mouse, touch and keyboard (arrows, Enter, Esc).
- Focus ring visible on tiles; screen reader labels on all icon buttons.
- Day/night toggle changes the whole palette.
- Expand/collapse works without layout jumps.
- build + lint pass.
````

---

## Phase 4: Engine simulation and instrument cluster

Goal: a pure, testable engine model plus gauges. Still silent.

````text
Phase 4: Engine simulation and cluster. Do only this phase.

Allowed new dev dependency: vitest (for model unit tests). Nothing else.

ENGINE MODEL (src/engine/model.ts, pure TypeScript, no React, no DOM)
- State: { rpm, throttle (0..1), gear (1..6), speedKph, ignition: boolean, limiter: boolean }
- Constants in ONE config object (src/engine/config.ts) so I can tune feel:
  idleRpm 900, redlineRpm 7000, limiterRpm 7200, gearRatios [3.6,2.2,1.5,1.1,0.9,0.75],
  finalDrive 3.7, wheelRadiusM 0.33, vehicleMass-ish accel scale, drag, engine inertia,
  shiftDurationMs 250.
- step(state, dtSeconds, inputs) -> newState:
  * With ignition off: rpm decays to 0.
  * Throttle raises rpm toward a target with inertia; releasing it falls toward idle
    (engine braking proportional to gear).
  * Speed integrates from torque-ish curve (peaks mid-rpm), drag and gear ratio.
  * rpm is derived from speed and gear when "in gear", blended with throttle-driven
    rpm so rev-blipping in low gears feels alive (arcade model is fine, not realistic).
  * Upshift: rpm drops according to ratio change during shiftDurationMs, brief torque cut.
  * Downshift: rpm rises (optionally with a rev-match blip), refuse if it would exceed
    redline (limiter bounce instead).
  * Limiter: when rpm >= limiterRpm, throttle is cut for ~80ms repeatedly (bounce).
  * Gear clamps at 1 and 6; ignoring paddle presses at the ends.
- Emit discrete events: 'shiftUp' | 'shiftDown' | 'limiterHit' | 'ignitionOn' | 'ignitionOff'
  through a typed event list returned by step().

STORE / HOOK (src/engine/store.ts)
- Create an external store (useSyncExternalStore-compatible) that runs the model on a
  requestAnimationFrame loop (pauses when document is hidden).
- Expose imperative API: setThrottle(v), shiftUp(), shiftDown(), setIgnition(on).
- Expose `getSnapshot()` for low-frequency UI (gear, ignition) and `readLive()` that returns
  the mutable live values (rpm, speed, throttle) WITHOUT triggering React renders.
- Provide `subscribeEvents(cb)` so audio can react to shift/limiter events.

CLUSTER (src/cockpit/Cluster.tsx)
- SVG gauges: tachometer (0-8k, red zone from redline), speedometer (0-260 km/h),
  digital gear indicator (P/N before ignition, 1-6 after), small readouts for time and
  a fake odometer.
- Needles are driven by requestAnimationFrame writing CSS variables / SVG transforms
  directly (no React re-render per frame). Needle smoothing with a spring.
- Ignition on triggers the classic needle sweep (min -> max -> idle) over ~1.2s.
- Optional: use rpm and speed in the Skills app later; keep the store importable anywhere.

TESTS (vitest) for the model: idle holds ~idleRpm, throttle raises rpm, upshift lowers
rpm, downshift raises it, limiter triggers at limiterRpm, gear never leaves 1..6,
ignition off decays rpm to 0.

Temporary dev controls: a small hidden-by-default debug panel (toggle with backtick key)
with throttle slider, shift buttons and ignition toggle, so the model can be tested
before real inputs exist.

Acceptance criteria:
- Tests pass. Gauges animate smoothly. React DevTools profiler shows no per-frame
  re-render of the cockpit tree.
- Tuning constants only requires editing config.ts.
- build + lint pass.
````

---

## Phase 5: Steering wheel, paddles and throttle interactions

Goal: make the cockpit physically interactive.

````text
Phase 5: Interactions. Do only this phase. No new dependencies.

STEERING WHEEL (src/cockpit/SteeringWheel.tsx)
- Replace the placeholder with a detailed SVG wheel (flat-bottom, stitched rim, center
  hub with a start/stop-style badge area, left and right thumb-button clusters).
- Drag to rotate with Pointer Events: compute angle with atan2 relative to the wheel
  center, use pointer capture, clamp rotation to +-120 degrees, and spring back to 0 on
  release (critically damped, ~300ms). Works for mouse and touch.
- Rotation also gently skews the dashboard/parallax layers (+-2 degrees) for feedback.
- Wheel is a role="slider" with aria-valuemin/max/now and keyboard support
  (ArrowLeft/ArrowRight rotate, release returns).

THUMB BUTTONS (on the wheel)
- Left cluster: Home, Back. Right cluster: Prev, Next, Select (OK).
- They call the navigation functions from src/infotainment/nav.ts from Phase 3.
  Small press animation and an optional click sound hook (no sound yet).

PADDLES (src/cockpit/Paddles.tsx)
- Left paddle = downshift (-), right paddle = upshift (+). Pivot animation on press
  (rotate a few degrees toward the wheel, spring back).
- Buttons with aria-label "Downshift" / "Upshift". Call engine store shiftDown()/shiftUp().
- Show a transient gear flash on the cluster when a shift happens.
- Paddles do NOT change infotainment apps; that is the thumb buttons' job.

THROTTLE
- Add src/cockpit/Pedal.tsx: a pedal at the bottom-right. Pointer down and hold ramps
  throttle from 0 to 1 over ~600ms; release ramps back down. Use pointer capture so
  dragging off the element doesn't stick.
- Keyboard: hold Space or ArrowUp = throttle; X/] = upshift; Z/[ = downshift;
  ArrowLeft/Right = rotate wheel; Enter = select; Esc = back; H = home.
  Show a small, dismissible "Controls" hint overlay (bottom-left) listing these keys.
- Touch layout (mobile portrait bar from Phase 2): same paddles, a big throttle button,
  and a start button.

IGNITION
- Wire the Start/Stop button on the console to engine setIgnition(true/false). Before
  ignition: cluster dark except for the P gear, infotainment in "boot" state. After
  ignition: needle sweep, screen boot sequence from Phase 3 (`ignited` prop now real).

Acceptance criteria:
- All controls work with mouse, touch (test via devtools device mode) and keyboard.
- Wheel never gets stuck after pointer leaves the window or on touchcancel.
- Holding throttle visibly revs the cluster; paddles visibly change gear.
- No console errors or warnings; no layout shift from animations.
- build + lint pass.
````

---

## Phase 6: Audio interface and placeholder engine sound

Goal: the full audio pipeline with a stand-in sound, ready for my C++ engine.

````text
Phase 6: Audio. Do only this phase. No new dependencies.

INTERFACE (src/audio/EngineAudio.ts)
```ts
export interface EngineAudio {
  /** Must be called from a user gesture (the Start button). Creates/resumes AudioContext. */
  start(): Promise<void>;
  stop(): void;
  /** Continuous parameters; called frequently, must be cheap and click-free. */
  setParams(p: { rpm: number; throttle: number; load: number }): void;
  /** Discrete events. */
  onEvent(e: 'shiftUp' | 'shiftDown' | 'limiterHit'): void;
  setMuted(muted: boolean): void;
  setVolume(v: number): void; // 0..1
  dispose(): void;
}
```

PLACEHOLDER (src/audio/PlaceholderEngineAudio.ts) implementing EngineAudio with Web Audio:
- Firing frequency for a 4-cylinder 4-stroke: f = rpm / 60 * 2.
- Voices: sawtooth at f, sawtooth/triangle at 2f (quieter), square sub at 0.5f (quiet).
  Sum -> lowpass filter (cutoff rises with rpm and throttle) -> waveshaper (mild
  saturation) -> gain -> master (with a DynamicsCompressor) -> destination.
- Throttle raises gain and filter cutoff; off-throttle is quieter with slight
  "overrun" crackle (short filtered noise bursts at random intervals above ~3500rpm).
- onEvent('shiftUp'/'shiftDown'): short noise "pop" and a brief gain dip (about 120ms
  duck on upshift; a small blip on downshift).
- onEvent('limiterHit'): very short gain cut.
- Use setTargetAtTime for ALL parameter changes (time constant ~0.03-0.08s) so there
  are no clicks. No allocations in the high-frequency setParams path.

PROVIDER (src/audio/AudioProvider.tsx + useEngineAudio hook)
- Holds one EngineAudio instance chosen from a single factory `createEngineAudio()`
  in src/audio/index.ts (returns the placeholder now; a one-line change will return
  the WASM version later).
- On ignition ON (from the Start button user gesture): `await audio.start()`.
  On ignition OFF: `audio.stop()` with a short fade.
- Subscribes to engine store events and a rAF/interval loop (~30Hz is plenty) that calls
  setParams with readLive() values. Pause when the tab is hidden.
- Mute toggle (visible on the status bar, speaker icon, aria-pressed) and a volume
  slider in the Settings app stub. Persist mute/volume in localStorage with try/catch.
- Default volume moderate (about 0.5). Never autoplay.

WASM STUB (src/audio/WasmEngineAudio.ts + public/worklet/engine-processor.js)
- Create a stub class implementing EngineAudio that currently throws "not implemented"
  from start(), and an AudioWorkletProcessor skeleton 'engine-processor' documenting
  the message protocol below. Do NOT implement synthesis.
- Document in src/audio/README.md the contract the C++ side must meet:
  * Exports: engine_init(sampleRate), engine_set_params(rpm, throttle, load),
    engine_event(type), engine_process(outPtr, frames) (stereo or mono float32).
  * Params reach the worklet via port.postMessage({type:'params', rpm, throttle, load});
    events via {type:'event', name}.
  * Single-threaded WASM only (GitHub Pages cannot send COOP/COEP headers, so no
    SharedArrayBuffer/pthreads). No heap allocation inside engine_process.

Acceptance criteria:
- Pressing Start plays an engine idle; throttle changes pitch/brightness; paddles
  produce audible shift events; limiter bounce audible at redline.
- No clicks or pops when changing params; no audio before the first user gesture.
- Mute and volume persist across reloads.
- Swapping the factory to the stub class fails loudly with a clear message (and the
  app should fall back gracefully to the placeholder).
- build + lint pass.
````

---

## Phase 7: Infotainment apps (real content)

Goal: the apps your visitors actually use. Fill `src/data/*` first.

````text
Phase 7: Apps. Do only this phase. Content comes ONLY from src/data/*; show a visible
"TODO" badge on any field still containing placeholder text. No new dependencies.

APPS (src/infotainment/apps/*), each wrapped in AppWindow, each navigable with
Prev/Next/Select/Back from the nav service, each with deep-linkable routes.

1. Resume: two-column layout (experience timeline, education/skills summary), a
   "Download PDF" button using resumePdfUrl, and a print-friendly stylesheet.
2. Projects: grid of cards (title, summary, tags, status). Selecting opens a detail
   view with description, links, and a "Tech" chip row. Tag filter chips on top.
   List is driven by src/data/projects.ts.
3. Skills ("Vehicle Diagnostics"): grouped skill bars styled like a diagnostics panel
   with a "Scan complete: N modules OK" header. Optional: bars react to the live
   rpm via a CSS variable (subtle pulse), cheaply.
4. Media: faux music player (track list from src/data/media.ts: placeholders for my
   playlist / interests), play/pause is cosmetic unless I add audio files; album art
   as generated gradients. Do not use copyrighted audio.
5. Phone (Contact): contact cards (email, LinkedIn, GitHub), a "Call me" style
   dial-pad animation that actually opens mailto:, and a copy-to-clipboard button
   with a toast.
6. Maps (Timeline): vertical route-style timeline from src/data/timeline.ts with
   waypoints for education and jobs; selecting a waypoint shows details.
7. Settings: theme (day/night), accent style (sport / luxury / ev) via data-style on
   <html>, reduce motion override, volume and mute (from Phase 6), "Show controls
   hint" toggle, and an "About this site" section describing the stack.

COMMON
- Each app has loading-safe, empty-state and error-safe rendering.
- All images/icons are inline SVG or React Icons.
- Page <title> and meta description update per route.

Acceptance criteria:
- Every route works by direct URL, by launcher, and by thumb buttons.
- Content updates by editing only src/data/*.
- Keyboard-only user can reach every control.
- build + lint pass.
````

---

## Phase 8: Polish, accessibility, performance, plain fallback

````text
Phase 8: Polish. Do only this phase. No new dependencies.

1. PLAIN VERSION: add a route /#/plain that renders the same content as a simple,
   fast, semantic, single-page layout (no cockpit, no audio). Add a visible
   "Skip to plain version / resume" link as the first focusable element. Recruiters
   must be able to reach the resume in one click without learning the controls.
2. REDUCED MOTION: with prefers-reduced-motion, disable parallax, needle sweep spring,
   and wheel spring; keep functionality.
3. ACCESSIBILITY PASS: audit with keyboard only; make sure focus order is sensible
   (screen first, then controls), all controls have names, color contrast >= 4.5:1 in both
   themes, and live region announces gear changes politely ("Gear 3").
4. PERFORMANCE: lazy-load app routes with React.lazy, preload the launcher; verify no
   per-frame React re-renders; keep initial JS reasonable; check Lighthouse (aim
   Performance >= 90 on desktop, Accessibility >= 95).
5. VISUAL POLISH: ambient glow that reacts subtly to throttle, dashboard light flicker at
   ignition, soft vignette, consistent easing tokens, subtle sound cues for UI taps
   (short, quiet, muted by the global mute) through the placeholder audio engine
   only if they are cheap.
6. EASTER EGGS (small): horn on wheel hub click (short synth beep), a burnout-style
   screen-shake at redline hold, "Lap time" mini-widget in Media app is optional. Keep
   each behind reduced-motion checks.
7. SEO/SHARE: meta tags, Open Graph image (static screenshot of the cockpit), and a
   <noscript> fallback with core contact info.

Acceptance criteria: run Lighthouse and list scores; list any remaining issues.
build + lint pass.
````

---

## Phase 9: Swap in the C++/WASM engine (when your code is ready)

````text
Phase 9: Integrate my C++ engine synthesis as WebAssembly. My C++ source is in
/engine-cpp (I will add it). Do only this phase.

1. Read the C++ API first and propose how it maps to the EngineAudio contract in
   src/audio/README.md. Wait for my approval if anything is ambiguous (mono vs stereo,
   fixed block size, params).
2. Provide an Emscripten build script (scripts/build-wasm.sh) producing a
   single-threaded, SIMD-optional WASM + glue as a standalone module (MODULARIZE,
   no pthreads, no SharedArrayBuffer, EXPORTED_FUNCTIONS for engine_init,
   engine_set_params, engine_event, engine_process, malloc/free, ALLOW_MEMORY_GROWTH=0
   with a sensible fixed memory).
3. Implement public/worklet/engine-processor.js: load the WASM inside the
   AudioWorkletGlobalScope (instantiate from bytes passed via port or fetched),
   process() calls engine_process each 128-frame block, copies from WASM memory into
   the output buffers, applies param smoothing on the JS side, receives
   {type:'params'|'event'} messages. No allocations in process().
4. Implement WasmEngineAudio.ts: creates AudioContext, addModule(), AudioWorkletNode,
   sends params at ~30-60Hz, forwards events, handles mute/volume via a GainNode,
   and falls back to PlaceholderEngineAudio if WASM fails to load (with a console
   warning).
5. Switch the factory in src/audio/index.ts to the WASM implementation, keep a
   `?audio=placeholder` query flag to force the placeholder for debugging.
6. Ensure Vite copies the .wasm and worklet files with the correct base path for GitHub
   Pages and correct MIME types (application/wasm).
7. Add a small dev-only audio debug overlay: current rpm/throttle/load values being sent,
   CPU load estimate, underrun counter if available.

Acceptance criteria:
- Works in Chrome, Firefox and Safari (note any limitations, particularly Safari's
  AudioWorklet and WASM quirks).
- No glitches at 60fps with rapid shifting; CPU use stays low.
- Production build served via `npm run preview` with the correct base path plays audio.
- Placeholder fallback works when WASM is blocked or fails.
````

---

## Phase 10: Deploy and verify

````text
Phase 10: Deployment. Do only this phase.

1. Verify package.json `homepage`/vite `base`, gh-pages scripts (predeploy: build,
   deploy: gh-pages -d dist) and HashRouter deep links on a production build.
2. Add a .nojekyll file if needed and confirm .wasm/.js worklet assets load from the
   deployed path.
3. Add a GitHub Actions workflow (optional) that builds and deploys on push to main
   using the official Pages actions; if you add it, remove the manual gh-pages flow or
   explain how both coexist.
4. Create a README section: concept, controls table, how to edit content in src/data/*,
   how to swap the audio engine, build and deploy commands, screenshots placeholder.
5. Final checklist run: build, lint, tests, Lighthouse, mobile device-mode check,
   keyboard-only run, mute-by-default behavior before ignition.
Report anything that fails.
````

---

## Handy "repair" prompts

**Something looks off visually**
````text
Here is a screenshot and what's wrong: <describe>. Change ONLY the relevant component
(<file>). Keep props and behavior the same. Do not refactor anything else.
````

**Feel tuning (engine/wheel)**
````text
Tune the feel without changing code structure: <e.g. "revs fall too slowly when I
release throttle, shifts feel too snappy, wheel springs back too bouncy">. Adjust ONLY
constants in src/engine/config.ts (or the wheel spring constants) and tell me the old
and new values.
````

**Performance regression**
````text
Profile with React DevTools and find components re-rendering per frame. Fix by moving
values to refs/external store reads. Show before/after render counts. Don't change visuals.
````

**Bug report format**
````text
Bug: <what happened>. Expected: <expected>. Steps: <1,2,3>. Browser/device: <x>.
Console errors: <paste>. Find the root cause first, explain it in 3 sentences, then fix it
with the smallest possible change and add a test if the bug is in src/engine/model.ts.
````