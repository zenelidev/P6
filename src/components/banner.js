import '../styles/output.css';
import React from 'react';



function Banner(props) {
  const { title, imageSrc } = props;

  const bannerImgStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '223px',
    borderRadius: '15px',
        };

  return (
    <div className='banner-div'>
      <div className='banner-img' style={bannerImgStyle}>
        <h1 className='banner-text'>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;

