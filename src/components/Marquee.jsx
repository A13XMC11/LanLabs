// Giant words that slide sideways as the page scrolls (see data-drift in lib/fx.js).
export default function Marquee({ rows, className = '' }) {
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      {rows.map((row, i) => (
        <div className="marquee__row" key={row.join('-')} data-drift={i % 2 === 0 ? -1 : 1}>
          {[...row, ...row, ...row].map((word, j) => <span key={`${word}-${j}`}>{word}<b>✦</b></span>)}
        </div>
      ))}
    </div>
  );
}
