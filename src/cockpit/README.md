# Cockpit

`CockpitStage` composes the static dashboard layers and screen slot. The scene uses
inline SVG and CSS only; `cockpit.css` provides the 16:9 desktop stage, parallax, and
the compact portrait layout. Parallax is skipped when reduced motion is requested.

The steering wheel, shifters, start button, and throttle are visual placeholders only.
Interactions, engine simulation, and audio are intentionally left for later phases.
