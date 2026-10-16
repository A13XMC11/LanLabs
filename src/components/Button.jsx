import TLink from './TLink.jsx';

// Pill button. `to` = internal route (with page curtain), `href` = external link.
export default function Button({ to, href, variant = 'solid', arrow = true, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && <span className="btn__arrow" aria-hidden="true">↗</span>}
    </>
  );
  if (to) return <TLink to={to} className={cls} data-magnetic {...rest}>{inner}</TLink>;
  return <a href={href} className={cls} data-magnetic target="_blank" rel="noopener noreferrer" {...rest}>{inner}</a>;
}
