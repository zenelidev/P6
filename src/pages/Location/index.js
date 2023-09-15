import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel'; // Import your Carousel component

const Location = () => {
  const { id } = useParams();
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Fetch data based on the 'id' parameter
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/bdd.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const locationData = jsonData.find((item) => item.id === id);
        setLocationData(locationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);



  return (
    <div className="location-details">
    {/* <Carousel images={locationData.pictures} /> {/* Use the Carousel component */}

      {/* <h2>{locationData.title}</h2>
      <img src={locationData.cover} alt={locationData.title} />
      <p>{locationData.description}</p> */}
    </div>
  );
};

export default Location;
