import SectionHeading from './SectionHeading';

function GallerySection({ galleryItems, openLightbox }) {
  return (
    <section className="gallery" id="gallery">
      <div className="section-inner">
        <SectionHeading eyebrow="MOMENTS FROM THE LAB" title="Gallery" lead="Workshops, builds, and the people behind them." center />
      </div>

      <div className="masonry" id="masonryGrid">
        {galleryItems.map((item, index) => (
          <div key={item.seed} className="masonry__item" data-index={index} onClick={() => openLightbox(index)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && openLightbox(index)}>
            <img src={`https://picsum.photos/seed/${item.seed}/600/${280 + (index % 3) * 40}`} alt={item.caption} loading="lazy" width="600" height={280 + (index % 3) * 40} />
            <div className="masonry__overlay"><span>{item.caption}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
