'use client';

function LiveEventSection({ onRegister }) {
  return (
    <section className="live-event" id="live-event">
      <div className="section-inner">
        <div className="live-event__content" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title center">IDEATHON 2026: Prototyping the Future</h2>
          <p className="section-lead center">
            The annual flagship hardware development challenge is officially underway. Teams are designing, printing, programming, and wiring working prototypes under a 24-hour countdown.
          </p>

          <div className="event-date-card glass" style={{ margin: '24px auto', maxWidth: '360px', padding: '18px 24px', borderRadius: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-400)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>EVENT DATE</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '700', color: 'var(--white)', display: 'block', lineHeight: 1.1 }}>17 August 2026</span>
          </div>

          <div className="live-event__actions">
            <button onClick={onRegister} className="btn btn--gold">
              Register for Wild-Card Entry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveEventSection;
