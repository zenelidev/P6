import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/output.css';

function LocationCard(props) {
  const { title, id, cover } = props;

  return (
    <Link to={`/location/${id}`} className="location-card">
        <p className="location-card-title">{title}</p>
        <img src={cover} className='location-card'></img>
    </Link>
  );
}

export default LocationCard;
