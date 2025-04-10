// CoreOfferingsPage.js
import React, { useContext, useState } from 'react';
import styled, {ThemeProvider, keyframes } from 'styled-components';
import { FaCar, FaWrench, FaLeaf, FaBus, FaCogs, FaTruck, FaSun, FaMoon } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import car1 from '../Images/car1.jpeg';
import car2 from '../Images/car2.jpeg';
import car3 from '../Images/car3.jpeg';
import car4 from '../Images/car4.jpeg';
import car5 from '../Images/car5.jpeg';
import car6 from '../Images/car6.jpeg';
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


import { Context } from './Context';
import tiresolution from '../Images/tire solution.png'
import leasing from '../Images/leasing.png'
import busstop from '../Images/busstop.png'
import media1 from '../media/media1.mp4'
import media3 from '../media/media3.mp4'
import { useSelector } from 'react-redux';
import structure from '../Images/structure.jpeg'
import Gallery from './Gallery';

const lightTheme = {
  background: '#f8fafc',
  color: '#1e293b',
  highlight: 'rgba(255, 68, 0, 0.8)',
  secondary: '#e5e7eb',
};

const darkTheme = {
  background: '#0f172a',
  color: '#f1f5f9',
  highlight: '#eab308',
  secondary: '#1e293b',
};


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slide = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(-50%);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-family: Arial, sans-serif;
  transition: background 0.3s, color 0.3s;
  width:100%;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
`;

const HeroText = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  text-align: center;
  animation: ${fadeIn} 1s ease;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SlidingImages = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  animation: ${slide} 50s linear infinite;
  flex-direction: column;
`;

const CarImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SectionImage = styled.div`
width:50%;
  animation: ${slideIn} 1s ease;

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Video = styled.video`
    width:100%;
`

const SectionContent = styled.div`
  flex: 1;
  animation: ${slideIn} 1s ease;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.highlight};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;



const offerings = [
//   {
//     title: "Clean Energy & Green Transportation Solutions",
//     icon: <FaLeaf />,
//     image: car1,
//     details: [
//       "Electric Vehicles (EVs): Leading Africa's shift to zero-emission mobility with robust EV infrastructure, including solar-powered charging stations.",
//       "CNG, LPG, and Hybrid-Powered Vehicles: Offering diverse options for fuel-efficient and eco-friendly transportation.",
//       "Solar-Powered Infrastructure: Deploying renewable energy solutions to reduce carbon emissions and drive sustainability.",
//     ],
//   },
//   {
//     title: "Comprehensive Automotive Services",
//     icon: <FaWrench />,
//     image: car2,
//     details: [
//       "Vehicle Repair and Maintenance Trading Workshops: State-of-the-art facilities providing expert diagnostics, repairs, and maintenance for all Dongfeng vehicles and other brands.",
//       "Automotive Spare Parts: Direct access to genuine Dongfeng spare parts, ensuring quality, reliability, and longevity.",
//     ],
//   },
  {
    title: "Advanced Tyre and Rubber Solutions",
    icon: <FaCogs />,
    image: tiresolution,
    details: [
      "Tyre Manufacturing & Sales: Establishing world-class tire production plants to support the growing automotive market.",
      "Rubber Recycling: Promoting circular economies by converting used tires into valuable products.",
      "Natural Rubber Plantations: Driving local industrial growth through plantation development and processing centers.",
    ],
  },
  {
    title: "Vehicle Leasing & Hailing Solutions",
    icon: <FaTruck />,
    image: leasing,
    details: [
      "Leasing & Hiring Services: Affordable leasing and hiring options for vehicles and machinery to support businesses and individuals.",
      "Ride-Hailing Business Support: Offering fleet solutions and operational support for ride-hailing companies.",
    ],
  },
  {
    title: "Infrastructure & Urban Development",
    icon: <FaBus />,
    image: structure,
    details: [
      "Bus Stop Design and Construction: Modern, eco-friendly bus stops equipped with solar panels and smart features.",
      "CNG and Mini CNG Stations: Convenient refueling infrastructure to support the growing demand for alternative fuels.",
      "Logistics Hubs: Integrated solutions for urban logistics, ensuring efficient goods movement across the continent.",
    ],
  },
];



const offerings2 = [
    {
      title: "Clean Energy & Green Transportation Solutions",
      icon: <FaLeaf />,
      media: media1,
      details: [
        "Electric Vehicles (EVs): Leading Africa's shift to zero-emission mobility with robust EV infrastructure, including solar-powered charging stations.",
        "CNG, LPG, and Hybrid-Powered Vehicles: Offering diverse options for fuel-efficient and eco-friendly transportation.",
        "Solar-Powered Infrastructure: Deploying renewable energy solutions to reduce carbon emissions and drive sustainability.",
      ],
    },
    {
      title: "Comprehensive Automotive Services",
      icon: <FaWrench />,
      media: media3,
      details: [
        "Vehicle Repair and Maintenance Trading Workshops: State-of-the-art facilities providing expert diagnostics, repairs, and maintenance for all Dongfeng vehicles and other brands.",
        "Automotive Spare Parts: Direct access to genuine Dongfeng spare parts, ensuring quality, reliability, and longevity.",
      ],
    },
   
  ];

const CoreOfferingsPage = () => {

// const {theme,setTheme}=useContext(Context);
const theme = useSelector((state)=>state.theme)

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <Container>
        {/* <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </ThemeToggle> */}

   
            <HeroSection theme={theme === true ? 'light' : 'dark'}>
                  <HeroText theme={theme === true ? 'light' : 'dark'}>Explore My Project Gallery</HeroText>
                  <SlidingImages>
                  <CarImage src={p1} alt="p1" />
<CarImage src={p2} alt="p2" />
<CarImage src={p3} alt="p3" />
<CarImage src={p4} alt="p4" />
<CarImage src={p5} alt="p5" />
<CarImage src={p6} alt="p6" />
<CarImage src={p7} alt="p7" />
<CarImage src={p8} alt="p8" />
<CarImage src={p9} alt="p9" />
<CarImage src={p10} alt="p10" />
<CarImage src={p11} alt="p11" />
<CarImage src={p12} alt="p12" />
<CarImage src={p13} alt="p13" />
<CarImage src={p14} alt="p14" />
<CarImage src={p15} alt="p15" />
<CarImage src={p16} alt="p16" />
<CarImage src={p17} alt="p17" />
<CarImage src={p18} alt="p18" />
<CarImage src={p19} alt="p19" />
<CarImage src={p20} alt="p20" />
<CarImage src={p21} alt="p21" />
<CarImage src={p22} alt="p22" />
<CarImage src={p23} alt="p23" />
<CarImage src={p24} alt="p24" />
<CarImage src={p25} alt="p25" />
<CarImage src={p26} alt="p26" />
<CarImage src={p27} alt="p27" />
<CarImage src={p28} alt="p28" />
<CarImage src={p29} alt="p29" />
<CarImage src={p30} alt="p30" />
<CarImage src={p31} alt="p31" />

                  </SlidingImages>
                </HeroSection>
          

<Gallery/>

      </Container>
    </ThemeProvider>
  );
};

export default CoreOfferingsPage;
