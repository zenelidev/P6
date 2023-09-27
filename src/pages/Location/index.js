
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Tag from '../../components/Tag'; 
import Accordion from '../../components/Accordion'; 
import Stars from '../../components/Stars'; 
import { useNavigate } from "react-router-dom";

const Location = () => {
  const { id } = useParams();
  const [locationData, setLocationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/bdd.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const foundLocationData = jsonData.find((item) => item.id === id);

        if (!foundLocationData) {
          setLocationData(null);
          navigate("/error");
        } else {
          setLocationData(foundLocationData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (locationData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="location-details">
      <Carousel images={locationData.pictures} />
      
      <div className='location-container-div'>
        <div className='location-div-left'>
        <h2>{locationData.title}</h2>
        <h3>{locationData.location}</h3>
        <div className="location-tags">
            {locationData.tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        </div>

        <div className='location-div-right'>
          <div className='location-div-right-host'>
            <p className='location-host-name'>{locationData.host.name}</p> <img className='location-host-img' src={locationData.host.picture}
            alt=""></img>
          </div>
          <Stars rating={locationData.rating} />
        </div>
      </div>

      <div className='location-accordions'>
        <Accordion title='Description' description={locationData.description}/>
        <Accordion title='Equipements' description={locationData.equipments}/>
      </div>


    </div>
  );
};

export default Location;
