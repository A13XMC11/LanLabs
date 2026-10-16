import symbol from '../../img/brand/symbol.png';
import wordmarkLight from '../../img/brand/wordmark-light.png';
import wordmarkDark from '../../img/brand/wordmark-dark.png';

export default function BrandLogo({ light = false, className = '' }) {
  return (
    <span className={`brand-logo ${className}`} role="img" aria-label="LanLabs">
      <img className="brand-logo__symbol" src={symbol} alt="" aria-hidden="true" decoding="async" />
      <img className="brand-logo__wordmark" src={light ? wordmarkLight : wordmarkDark} alt="" aria-hidden="true" decoding="async" />
    </span>
  );
}
