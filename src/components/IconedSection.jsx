import React from 'react'

function getClassesFromProps(classes = '', direction = 'left') {
    let _classesFromProps = classes;
    _classesFromProps += ` iconedSection--direction-${direction}`;
    
    return _classesFromProps;
}

function IconedSection({
    title,
    description,
    actions,
    icon,
    direction,
    classes
}) {
    return (
        <section className={`iconedSection ${getClassesFromProps(classes, direction)}`}>
            <div className="iconedSection__block iconedSection__block--text">
                <header className="iconedSection__header">
                    <h1 className="iconedSection__title">{title}</h1>
                </header>
                <p className="iconedSection__description">{description}</p>
                {actions && (
                    <div className="iconedSection__actions">{actions}</div>
                )}
            </div>
    
            <div className="iconedSection__block iconedSection__block--media">
                {icon}
            </div>
    
        </section>
    )
}

export default IconedSection;