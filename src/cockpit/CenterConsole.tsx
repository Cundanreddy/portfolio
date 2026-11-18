export default function CenterConsole() {
  return (
    <div className="cockpit-console cockpit-parallax" aria-hidden="true">
      <div className="cockpit-start-button">
        <span className="cockpit-start-ring" />
        <span>START</span>
      </div>
      <div className="cockpit-console-bridge">
        <div className="cockpit-console-control cockpit-console-control-one" />
        <div className="cockpit-console-control cockpit-console-control-two" />
      </div>
      <div className="cockpit-pedal">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
