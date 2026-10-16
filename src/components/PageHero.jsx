// Inner-page hero: huge headline over a dimmed, parallaxed loop of the monkey videos.
export default function PageHero({ number, eyebrow, title, lead, video = 'globe', children }) {
  return (
    <section className="phero">
      <div className="phero__bg" aria-hidden="true">
        <video src={`/media/${video}.mp4`} poster={`/frames/${video}/075.webp`} autoPlay muted loop playsInline preload="auto" data-parallax="0.18" />
      </div>
      <div className="wrap phero__inner">
        <div className="phero__meta"><span>{number}</span><span>{eyebrow}</span></div>
        <h1 data-words data-await>{title}</h1>
        <div className="phero__bottom">
          <p data-reveal data-delay="0.5">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
