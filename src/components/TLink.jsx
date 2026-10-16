import { Link } from 'react-router-dom';
import { useGo } from '../lib/transitionContext.js';

// Drop-in <Link> that plays the curtain between pages.
export default function TLink({ to, onClick, children, ...rest }) {
  const go = useGo();
  const handle = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    go(to);
  };
  return <Link to={to} onClick={handle} {...rest}>{children}</Link>;
}
