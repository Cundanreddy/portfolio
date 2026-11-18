# Infotainment

The infotainment shell provides the status bar, startup screen, launcher, app
windows, and bottom navigation dock. Its routes are defined in `src/routes/index.tsx`;
`nav.ts` exposes the keyboard/navigation event API for launcher controls.

The shell keeps app navigation and theme state independent of the cockpit artwork.
Engine state, audio, and real vehicle controls are intentionally outside this phase.
