import React from 'react';

const Card = ({
  title,
  text,
  imgSrc,
  imgAlt = 'Card image',
  header,
  footer,
  bg,
  textColor,
  horizontal = false,
  children,
  className = ''
}) => {
  const cardClasses = `card ${bg || ''} ${textColor || ''} ${className}`.trim();

  const renderCardBody = () => (
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {text && <p className="card-text">{text}</p>}
      {children}
    </div>
  );

  const renderImage = () => {
    if (!imgSrc) return null;

    if (horizontal) {
      return (
        <div className="col-md-4">
          <img 
            src={imgSrc} 
            className="img-fluid rounded-start h-100 object-fit-cover" 
            alt={imgAlt} 
            style={{ minHeight: '100%' }} 
          />
        </div>
      );
    }

    return <img src={imgSrc} className="card-img-top" alt={imgAlt} />;
  };

  if (horizontal) {
    return (
      <div className={cardClasses}>
        <div className="row g-0 h-100">
          {renderImage()}
          <div className="col-md-8">
            {header && <div className="card-header">{header}</div>}
            {renderCardBody()}
            {footer && <div className="card-footer text-muted">{footer}</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      {renderImage()}
      {header && <div className="card-header">{header}</div>}
      {renderCardBody()}
      {footer && <div className="card-footer text-muted">{footer}</div>}
    </div>
  );
};

export default Card;