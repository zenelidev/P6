import React, { useState, useEffect } from 'react';
import LocationCard from '../../components/LocationCard';
import Banner from '../../components/Banner';

const Home = () => {
    const bannerImageSrc = process.env.PUBLIC_URL + '/beach.png';
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.PUBLIC_URL + '/bdd.json');
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <Banner imageSrc={bannerImageSrc} title='Chez vous, partout et ailleurs' />
            <div className='home-cards-container'>
                {data.map((item, index) => (
                    <LocationCard
                        key={index}
                        title={item.title}
                        cover={item.cover}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;