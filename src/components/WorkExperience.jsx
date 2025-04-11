



// // AutoTrendingSummary.js
// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaArrowRight } from 'react-icons/fa';
// import car11 from "../Images/car11.jpg";
// import car12 from "../Images/car12.jpg";
// import car13 from "../Images/car15.png";
// import car14 from "../Images/car14.jpg";
// import car15 from "../Images/car15.png";
// import car16 from "../Images/car16.jpg";
// import car17 from "../Images/car17.jpg";
// import car18 from "../Images/car18.jpg";
// import car19 from "../Images/car19.jpg";
// import car20 from "../Images/car20.jpg";
// import car21 from "../Images/car21.jpg";
// import car22 from "../Images/car22.jpg";
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';
// import { useSelector } from 'react-redux';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slide = keyframes`
//   from {
//     transform: translateY(50%);
//   }
//   to {
//     transform: translateY(-50%);
//   }
// `;

// const Container = styled.div`
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'linear-gradient(90deg, #1e293b, #0f172a)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   padding: 2rem;
//   font-family: Arial, sans-serif;
//   text-align: center;
// `;

// const HeroSection = styled.div`
//   width: 100%;
//   height: 100px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
// `;

// const HeroText = styled.h1`
//   position: absolute;
//   z-index: 2;
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   text-align: center;
//   animation: ${fadeIn} 1s ease;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   animation: ${slide} 50s linear infinite;
//   flex-direction: column;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 200px;
//   object-fit: cover;
// `;

// const Content = styled.div`
//   margin-top: 2rem;
//   animation: ${fadeIn} 1.5s ease;

//   p {
//     font-size: 1rem;
//     line-height: 1.5;
//     max-width: 600px;
//     margin: 0 auto 2rem auto;
//   }
// `;

// const Button = styled.a`
//   display: inline-block;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
//   // font-weight: bold;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#eab308')};
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     background: ${({ theme }) => (theme === 'dark' ? '#eab308' : '#fbbf24')};
//   }

//   svg {
//     margin-left: 0.5rem;
//   }
// `;

// const AutoTrendingSummary = () => {
//   // const { theme } = useContext(Context);
//   const theme = useSelector((state)=>state.theme)
//   const navigate = useNavigate();

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       {/* Hero Section */}
//       <HeroSection theme={theme === true ? 'light' : 'dark'}>
//         <HeroText theme={theme === true ? 'light' : 'dark'}>Auto Trending News</HeroText>
//         <SlidingImages>
//           <CarImage src={car11} alt="Car 11" />
//           <CarImage src={car12} alt="Car 12" />
//           <CarImage src={car13} alt="Car 13" />
//           <CarImage src={car14} alt="Car 14" />
//           <CarImage src={car15} alt="Car 15" />
//           <CarImage src={car16} alt="Car 16" />
//           <CarImage src={car17} alt="Car 17" />
//           <CarImage src={car18} alt="Car 18" />
//           <CarImage src={car19} alt="Car 19" />
//           <CarImage src={car20} alt="Car 20" />
//           <CarImage src={car21} alt="Car 21" />
//           <CarImage src={car22} alt="Car 22" />
//         </SlidingImages>
//       </HeroSection>

//       {/* Summary Section */}
//       <Content>
//         <p>
//           Stay updated with the latest trends and advancements in the automotive world. From electric
//           vehicles (EVs) and solar-powered technologies to autonomous driving and innovative designs,
//           the auto industry is evolving rapidly. Dive into the most exciting news and breakthroughs shaping
//           the future of transportation.
//         </p>
//         <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/autotrendingnews")}>
//           Explore More <FaArrowRight />
//         </Button>
//       </Content>
//     </Container>
//   );
// };

// export default AutoTrendingSummary;


// WorkExperience.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import emmyLogo from "../Images4/emmylogo.jpg"; // replace with actual image path
import lentoLogo from "../Images4/lentologo.jpg"; // replace with actual image path
  
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  background: ${({ theme }) =>
    theme === "dark" ? "#0f172a" : "#f8fafc"};
  color: ${({ theme }) => (theme === "dark" ? "#f8fafc" : "#0f172a")};
  padding: 4rem 2rem;
  font-family: 'Segoe UI', sans-serif;


  @media(max-width:884px){
    padding: 40px 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => (theme === "dark" ? "#fbbf24" : "#FF7133")};
  margin-bottom: 3rem;
  animation: ${fadeUp} 1s ease;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ExperienceCard = styled.div`
  display: flex;
  background: ${({ theme }) =>
    theme === "dark" ? "#1e293b" : "#ffffff"};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  animation: ${fadeUp} 1s ease;

  &:hover {
    transform: scale(1.015);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 1rem;
  border-radius: 0.5rem;
  background: white;
`;

const Info = styled.div`
  padding: 1rem 1.5rem;
  flex: 1;

  h3 {
    font-size: 1.3rem;
    margin: 0;
    font-weight: 700;
    color:${({ theme }) => (theme === "dark" ? "#f8fafc" : "#1e293b")}; 
  }

  p {
    margin: 0.3rem 0;
    line-height: 1.6;
  }

  ul {
    margin-top: 0.8rem;
    padding-left: 1.2rem;
    list-style-type: disc;
    font-size: 0.95rem;
  }

  .location-date {
    font-size: 0.85rem;
    font-style: italic;
    color: ${({ theme }) => (theme === "dark" ? "#cbd5e1" : "#475569")};
  }
`;

const WorkExperience = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Container theme={theme ? "light" : "dark"}>
      <Title theme={theme ? "light" : "dark"}>Professional Experience</Title>

      <CardGrid>
        {/* Emmyx CEO */}
        <ExperienceCard theme={theme ? "light" : "dark"}>
          <Logo src={emmyLogo} alt="Emmyx Logo" />
          <Info theme={theme ? "light" : "dark"}>
            <h3 theme={theme ? "light" : "dark"}>Managing Director / CEO</h3>
            <p className="location-date">
              Emmyx Engineering Integrated Services Ltd · 2015 – Present · Abuja, Nigeria
            </p>
            <ul>
              <li>Led design and construction of Central Admin Building & E-Library at FUPRE.</li>
              <li>Delivered the Zoological Garden at Nnamdi Azikiwe University.</li>
              <li>Oversaw infrastructure projects across Niger Delta and Uyo (NDDC & Ministry of Works).</li>
              <li>Promoted solar energy with streetlight installations in various Nigerian cities.</li>
              <li>Built strategic partnerships across private and public sectors.</li>
            </ul>
          </Info>
        </ExperienceCard>

        {/* Emmyx Civil Engineer */}
        <ExperienceCard theme={theme ? "light" : "dark"}>
          <Logo src={emmyLogo} alt="Emmyx Logo" />
          <Info theme={theme ? "light" : "dark"}>
            <h3>Civil Engineer (Freelance)</h3>
            <p className="location-date">
              Emmyx Engineering Integrated Services Ltd · 2015 – 2025 · Abuja, Nigeria
            </p>
            <ul>
              <li>Project planning, construction supervision, and structural design.</li>
              <li>Worked closely with MD on roadworks, water reticulation, and electricity layouts.</li>
              <li>Supported delivery of green engineering and sustainable infrastructure.</li>
            </ul>
          </Info>
        </ExperienceCard>

        {/* Lento Group */}
        <ExperienceCard theme={theme ? "light" : "dark"}>
          <Logo src={lentoLogo} alt="Lento Logo" />
          <Info theme={theme ? "light" : "dark"}>
            <h3>Project Manager</h3>
            <p className="location-date">
              Lento Group · 2008 – 2010 · Abuja, Nigeria
            </p>
            <ul>
              <li>Monitored all on-site civil engineering activities for bridges and drainage systems.</li>
              <li>Ensured adherence to COREN and NSE standards.</li>
              <li>Led contractor compliance checks and safety monitoring.</li>
            </ul>
          </Info>
        </ExperienceCard>
      </CardGrid>
    </Container>
  );
};

export default WorkExperience;

