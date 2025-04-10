

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import car1 from '../Images4/d7.jpg';
import car2 from '../Images4/d5.jpg';
import car3 from '../Images4/d6.jpg';
import car4 from '../Images4/d11a.jpeg';
import car5 from '../Images4/d12a.jpeg';
import car6 from '../Images/car6.jpeg';
import car7 from '../Images/car7.jpeg';
import car12 from '../Images/car12.jpg';
import car13 from '../Images4/d2.jpg';
import car22 from '../Images4/p9.jpeg'; 
import car21 from '../Images4/p10.jpeg';
import car18 from '../Images4/d4.jpg';
import d11 from '../Images4/d11.jpeg'
import d12 from '../Images4/d12.jpeg'

import { useSelector } from 'react-redux';
import dp1 from '../Images4/dp12.jpeg';
import dp2 from '../Images4/dp2.jpg';



// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:50px;
  width:80%;
  // background:rgba(0,0,0,0.5);
  // padding:50px 50px;

  img{
    width:350px;
    height:350px;
    border-radius:50%;
    border:10px solid white;
    object-fit:cover;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  opacity: 0;
  transform: translateY(50px);
  animation: ${(props) => props.isVisible ? 'flyInFromBottom 3s ease-out forwards' : 'none'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

   @media (max-width: 428px) {
    font-size: 1.5rem;
  }

  @keyframes flyInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight:bold;
  line-height: 1.5;
  max-width: 600px;
  text-align:left;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${(props) => props.isVisible ? 'flyInFromTop 1s ease-out forwards' : 'none'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

   @media (max-width: 428px) {
    font-size: 1rem;
  }

  @keyframes flyInFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  height: 100vh;
  object-fit: cover;
  flex-shrink: 0;
`;

// Hero Component
const Hero = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useSelector((state)=>state.theme)

  const carImages1 = [car1, car2, car3, car4, car5 ];
  const carImages2 = [ car13,  car21, car18,d11, d12];

  const [carImages,setCarImages]=useState(carImages2)

  useEffect(()=>{
    if(theme){
      setCarImages(carImages2)
    } else{
      setCarImages(carImages1)
    }

  },[theme])
  

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = carImages.length;
        const nextPosition = (prev + 1) % totalImages;
        return nextPosition;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carImages.length]);

  // Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <HeroContainer ref={sliderRef}>
      <HeroContent>
        <img src={dp1} alt="profile"/>
        <div style={{backgroundColor:"rgba(0,0,0,0.5)", borderRadius:"10px", padding:"5px"}}>
        <HeroTitle isVisible={isVisible}>ENGR. ANIEKWENA (OBIORA) EMMANUEL</HeroTitle>
        <HeroSubtitle isVisible={isVisible}>
        D.SC, B.ENG, FIMC, CMC, ASCE, APM,COREN, MNSE,NICE
        </HeroSubtitle>
        <HeroSubtitle isVisible={isVisible} style={{fontSize:"0.8rem", fontWeight:"500", textAlign:"left"}}>
        ☎ +234 812 345 6789 <br/>📨 Emmyx2003@gmail.com <br/>📨 Emmyx2003@yahoo.com
        </HeroSubtitle>
        </div>
      </HeroContent>
      <Slider
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {carImages.concat(carImages).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero;

