

// HeroSection.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import car1 from '../Images/car1.jpeg';
import car2 from '../Images/car2.jpeg';
import car3 from '../Images/car3.jpeg';
import car4 from '../Images/car4.jpeg';
import car5 from '../Images/car5.jpeg';
import car6 from '../Images/car6.jpeg';
import car7 from '../Images/car7.jpeg';
import car11 from "../Images/car11.jpg";
import car12 from "../Images/car12.jpg";
import car13 from "../Images/car15.png";
import car14 from "../Images/car14.jpg";
import car15 from "../Images/car15.png";
import car16 from "../Images/car16.jpg";
import car17 from "../Images/car17.jpg";
import car18 from "../Images/car18.jpg";
import car19 from "../Images/car19.jpg";
import car20 from "../Images/car20.jpg";
import car21 from "../Images/car21.jpg";
import car22 from "../Images/car22.jpg";
import { useLocation } from 'react-router-dom';
import globe from '../Images/globe.gif'
import p1 from '../Images4/p1.jpeg';
import p2 from '../Images4/p2.jpeg';
import p3 from '../Images4/p3.jpeg';
import p4 from '../Images4/p4.jpeg';
import p5 from '../Images4/p5.jpeg';
import p6 from '../Images4/p6.jpeg';
import p7 from '../Images4/p7.jpeg';
import p8 from '../Images4/p8.jpeg';
import p9 from '../Images4/p9.jpeg';
import p10 from '../Images4/p10.jpeg';
import p11 from '../Images4/p11.jpeg';
import p12 from '../Images4/p12.jpeg';
import p13 from '../Images4/p13.jpeg';
import p14 from '../Images4/p14.jpeg';
import p15 from '../Images4/p15.jpeg';
import p16 from '../Images4/p16.jpeg';
import p17 from '../Images4/p17.jpeg';
import p18 from '../Images4/p18.jpeg';
import p19 from '../Images4/p19.jpeg';
import p20 from '../Images4/p20.jpeg';
import p21 from '../Images4/p21.jpeg';
import p22 from '../Images4/p22.jpeg';
import p23 from '../Images4/p23.jpeg';
import p24 from '../Images4/p24.jpeg';
import p25 from '../Images4/p25.jpeg';
import p26 from '../Images4/p26.jpeg';
import p27 from '../Images4/p27.jpeg';
import p28 from '../Images4/p28.jpeg';
import p29 from '../Images4/p29.jpeg';
import p30 from '../Images4/p30.jpeg';
import p31 from '../Images4/p31.jpeg';
import car32d from "../Images/car32d.jpeg";
import car33d from "../Images/car33d.jpeg";

import car35d from "../Images/car35d.jpeg";


import carnow1 from "../Images2/carnow (1).jpeg";
import carnow2 from "../Images2/carnow (2).jpeg";
import carnow3 from "../Images2/carnow (3).jpeg";
import carnow4 from "../Images2/carnowedited1.png";
import carnow5 from "../Images2/carnow (5).jpeg";
import carnow6 from "../Images2/carnow (6).jpeg";
import carnow7 from "../Images2/carnow (7).jpeg";
import carnow8 from "../Images2/carnow (8).jpeg";
import carnow9 from "../Images2/carnow (9).jpeg";
import carnow10 from "../Images2/carnow (10).jpeg";


// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 650px;
  background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
 


@media(max-width:768px){
  height:250px;
   padding-top:120px;
}

`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  padding-top:80px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;


const Slider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s linear;
`;

const CarImage = styled.img`
  width: 100vw;
  // height: 100vh;
  object-fit: cover;
  // object-position: bottom;  // This will align the image's bottom edge to the container's bottom edge
  flex-shrink: 0;
`;

const Img = styled.img`
    border-radius:50%;
    // object-fit:cover:
`

// Hero Component
const Hero4 = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const locattion = useLocation();

  const carImages = [
    p1,p2, p3, p4, p5, p6, p7, p8, p9, p10, p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22, p23, p24, p25, p26, p27, p28, p29, p30, p30, p31];


useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = carImages.length;
        // Decrement the position and ensure it wraps around (circular behavior)
        const nextPosition = (prev - 1 + totalImages) % totalImages;
        return nextPosition;
      });
    }, 3000); // Change image every 3 seconds
  
    return () => clearInterval(interval);
  }, [carImages.length]);
  


  return (
    <HeroContainer>
      <HeroContent>
        {locattion.pathname==='/carshowroompage2'&&<HeroTitle>OUR SHOW ROOM</HeroTitle>}
        <HeroTitle>MY PROJECTS <br/> GALLERY </HeroTitle>
        {/* {locattion.pathname==='/autotrendingnews'&&<Img src={globe} alt="globe"/>} */}
        {/* <HeroSubtitle>Explore our innovative cars designed for performance, luxury, and sustainability. Your dream car awaits!</HeroSubtitle> */}
        {/* <HeroSubtitle>Transforming Africa’s Transportation, Infrastructure & Energy Landscape.</HeroSubtitle> */}
    
      </HeroContent>
      <Slider
        ref={sliderRef}
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {carImages.concat(carImages).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero4;
