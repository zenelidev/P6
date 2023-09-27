import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({ rating }) => {
  const MAX_STARS = 5; // Maximum number of stars
  const filledStars = Math.min(MAX_STARS, Math.max(0, rating)); // Limit rating to 0-5 stars

  const stars = [];
  for (let i = 1; i <= MAX_STARS; i++) {
    if (i <= filledStars) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className='stars orange' />);
    } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className='stars gray' />);
    }
  }

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
