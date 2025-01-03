
const FeatureBox = ({ iconClass, imgSrc, title, description }) => {
  return (
    <div className="col-md-4 col-lg-4">
      <div className="abox-4 text-center mb-40">
        <div className="abox-4-ico">
          {imgSrc ? (
            <img src={imgSrc} alt={title} className="feature-image" />
          ) : (
            <span className={iconClass} aria-hidden="true"></span>
          )}
        </div>
        <h5 className="h5-lg">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
