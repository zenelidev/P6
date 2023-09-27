import React, { useState } from 'react';

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        <div className="accordion-title">
            {props.title}
        <i className={`fa fa-chevron-${isOpen ? 'down' : 'up'} arrow`} />
        </div>
      <div className="accordion-content">
          {props.description}
      </div>
    </div>
  );
}

export default Accordion;