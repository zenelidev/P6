import React from 'react';
import '../styles/output.css';

function tag(props) {
  const { title } = props;

  return (
    <div className="location-tag">
        <div className="location-tag-title">{title}</div>
    </div>
  );
}

export default tag;
