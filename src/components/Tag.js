import React from 'react';

function tag(props) {
  const { title } = props;

  return (
    <div className="location-tag">
        <div className="location-tag-title">{title}</div>
    </div>
  );
}

export default tag;
