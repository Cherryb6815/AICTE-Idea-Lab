function SectionHeading({ eyebrow, title, lead, center = false }) {
  return (
    <>
      {eyebrow && (
        <p className={`eyebrow ${center ? 'center' : ''}`} data-reveal>
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`section-title ${center ? 'center' : ''}`} data-reveal>
          {title}
        </h2>
      )}
      {lead && (
        <p className={`section-lead ${center ? 'center' : ''}`} data-reveal>
          {lead}
        </p>
      )}
    </>
  );
}

export default SectionHeading;
