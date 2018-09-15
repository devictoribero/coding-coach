import React from 'react';

function getClassesFromProps(classes = '', direction = 'left') {
  let _classesFromProps = 'iconedSection';
  _classesFromProps += ` iconedSection--direction-${direction}`;
  _classesFromProps += ` ${classes}`;
  return _classesFromProps;
}

function IconedSection({ title, description, icon, direction, classes }) {
  return (
    <section className={`${getClassesFromProps(classes, direction)}`}>
      <div className="iconedSection__block iconedSection__block--text">
        <header className="iconedSection__header">
          <h1 className="iconedSection__title">{title}</h1>
        </header>
        <p className="iconedSection__description">{description}</p>
      </div>

      <div className="iconedSection__block iconedSection__block--media">{icon}</div>
    </section>
  );
}

IconedSection.defaultProps = {
  direction: 'left'
};

export default IconedSection;
