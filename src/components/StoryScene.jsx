import Scene from './Scene.jsx';

function build(tl, stage) {
  const all = (s) => [...stage.querySelectorAll(s)];
  const n = all('.story__chap').length;
  tl.fromTo(stage.querySelector('.scene__media'), { scale: 1.25, xPercent: 4 }, { scale: 1, xPercent: 0, duration: 1 }, 0);
  tl.fromTo(stage.querySelector('.story__giant'), { xPercent: 10 }, { xPercent: -45, duration: 1 }, 0);
  tl.fromTo(stage.querySelector('.story__bar b'), { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0);
  all('.story__chap').forEach((el, i) => {
    const start = (i / n) * 0.94 + 0.03;
    const end = ((i + 1) / n) * 0.94 + 0.03;
    tl.fromTo(el, { opacity: 0, y: 70, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.06 }, start);
    if (i < n - 1) tl.to(el, { opacity: 0, y: -70, filter: 'blur(10px)', duration: 0.05 }, end - 0.04);
  });
}

// Generic pinned story: one monkey video scrubbed while chapter copy swaps on the left.
export default function StoryScene({ dir, chapters, giant = 'EXPLORA', height = 360, label }) {
  return (
    <Scene dir={dir} className="story" height={height} setup={build} initial={0.4}>
      <div className="story__giant" aria-hidden="true">{giant} · {giant}</div>
      <div className="wrap story__copy" aria-label={label}>
        {chapters.map((c) => (
          <div className="story__chap" key={c.n}>
            <span className="chap__kicker">{c.n} / {c.kicker}</span>
            <h2>{c.title}</h2>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      <div className="story__bar" aria-hidden="true"><b /></div>
    </Scene>
  );
}
