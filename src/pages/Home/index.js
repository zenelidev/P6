import '../../styles/output.css';
import React from 'react';
import LocationCard from '../../components/LocationCard';
import Banner from '../../components/banner';
import data from '../../data/bdd.json'

const Home = () => {
    const bannerImageSrc = process.env.PUBLIC_URL +'/beach.png'
    return (

        <div className="container">
            <Banner imageSrc={bannerImageSrc} title='Chez vous, partout et ailleurs'/>
            <div className='home-banner-container'>

            {data.map((item, index) => (
                <LocationCard
                key={index} // Use a unique key for each card
                title={item.title}
                imageSrc={item.cover} //TODO
                />
            ))}

            </div>

        </div>
        
    );
  };
  
  export default Home;