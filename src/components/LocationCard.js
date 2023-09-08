import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/output.css';

function LocationCard(props) {
  const { title, id } = props;


  return (
    <Link to={`/location/`} className="location-card">
        <div className="location-card-title">{title}</div>
    </Link>
  );
}

export default LocationCard;
