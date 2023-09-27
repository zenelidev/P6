import React from 'react';
import { Link } from 'react-router-dom';

function LocationCard(props) {
  const { title, id, cover } = props;

  return (
    <Link to={`/location/${id}`} className="location-card">
        <p className="location-card-title">{title}</p>
        <img src={cover} className='location-card' alt=""></img>
    </Link>
  );
}

export default LocationCard;
