import SectionHeading from './SectionHeading';

function StatsSection({ stats }) {
  return (
    <section className="stats" id="stats">
      <div className="section-inner">
        <div className="stats__grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat" data-reveal>
              <div className="stat__number"><span data-count={stat.count}>0</span>+</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
