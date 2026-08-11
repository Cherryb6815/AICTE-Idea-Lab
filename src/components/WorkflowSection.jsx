import SectionHeading from './SectionHeading';

function WorkflowSection({ workflowSteps }) {
  return (
    <section className="workflow" id="workflow">
      <div className="section-inner">
        <SectionHeading eyebrow="HOW A PROJECT MOVES THROUGH THE LAB" title="Innovation Workflow" />

        <div className="timeline">
          <div className="timeline__line" id="timelineLine"><div className="timeline__line-fill" id="timelineFill" /></div>
          {workflowSteps.map((step, index) => (
            <div key={step.title} className="timeline__step" data-reveal>
              <div className="timeline__marker"><i className={`fa-solid ${step.icon}`} /></div>
              <div className="timeline__card glass">
                <span className="timeline__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection;
