import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
// import { FaArrowRight, FaGlobe, FaLeaf,  } from 'react-icons/fa';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import car10 from '../Images4/d7.jpg'
import car17 from '../Images4/d11.jpeg'
import { useSelector } from 'react-redux';
// import relevant icons at top of file
import {FaChartLine, FaUserTie, FaUsers, FaLightbulb, FaTasks, FaBuilding, FaProjectDiagram, FaCogs, FaTools, FaUniversity, FaLaptopCode } from 'react-icons/fa';


// Define fade-in and slide animations
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

// Define light and dark theme colors
const lightTheme = {
//   background: 'linear-gradient(90deg, #f8fafc, #e2e8f0)',
  // background: '#f8fafc',
  background: 'rgba(255,255,255,0.8)',
  text: '#1e293b',
  primary: '#FF7133',
  secondary: '#eab308',
  accent: '#fbbf24',
  carT:car17,
  cardBackground:"rgba(255,255,255,0.5)"
};

const darkTheme = {
  background: 'linear-gradient(90deg, #0f172a, #1e293b)',
  text: '#ffffff',
  primary: '#fbbf24',
  secondary: '#eab308',
  accent: '#FF7133',
  carT:car10,
  cardBackground:"rgba(0,0,0,0.5)"
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: ${({ theme }) => theme.background};
  // background-image: url(${({ theme }) => (theme === 'dark' ? car10 : car17)});
   background-image: url(${({ theme }) => theme.carT});
   background-position:center;
   background-size:cover;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  animation: ${fadeIn} 1s ease;

`;

const TitleSection = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
`;

const TitleText = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  // color:#1e293b;
  color: ${({ theme }) => theme.primary};
  text-align: center;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 1rem;
//    background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
 
  background: ${({ theme }) => (theme === 'dark' ?  'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)')};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

// #1e293b

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  // color: ${({ theme }) => theme.primary};
  // color:${({ theme }) => (theme === 'dark' ? '#f4f4f4' : '#94a3b8')}:
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.accent};
  }

  svg {
    margin-left: 0.5rem;
  }
`;



const WhyPartnerWithUs = () => {
  const theme = useSelector((state)=>state.theme)
  const isLight = theme === true;
  const currentTheme = isLight ? lightTheme : darkTheme;

  return (
    <Container theme={currentTheme}>
      <TitleSection theme={currentTheme}>
        <TitleText theme={isLight ? 'light' : 'dark'}>My Professional & Educational Highlights</TitleText>
      </TitleSection>

      <ContentSection>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaUserTie /></IconWrapper>
          <Title theme={currentTheme}>Business Development</Title>
          <Text>GANTTWORKS Business School</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaUsers /></IconWrapper>
          <Title theme={currentTheme}>Team Building</Title>
          <Text>GANTTWORKS Business School</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaLightbulb /></IconWrapper>
          <Title theme={currentTheme}>Business Strategy</Title>
          <Text>GANTTWORKS Business School</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaTasks /></IconWrapper>
          <Title theme={currentTheme}>Project Planning</Title>
          <Text>Digital Regenesys</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaBuilding /></IconWrapper>
          <Title theme={currentTheme}>Construction Project Scheduling</Title>
          <Text>Digital Regenesys</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaChartLine /></IconWrapper>
          <Title theme={currentTheme}>Strategic Planning</Title>
          <Text>Digital Regenesys</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaUsers /></IconWrapper>
          <Title theme={currentTheme}>Supervisory Skills</Title>
          <Text>Digital Regenesys</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaTools /></IconWrapper>
          <Title theme={currentTheme}>Construction Engineering</Title>
          <Text>Chief Executive Officer at Emmyx Engineering Integrated Services Ltd</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaLaptopCode /></IconWrapper>
          <Title theme={currentTheme}>SOLIDWORKS</Title>
          <Text>Chief Executive Officer at Emmyx Engineering Integrated Services Ltd</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaCogs /></IconWrapper>
          <Title theme={currentTheme}>Project Engineering</Title>
          <Text>Chief Executive Officer at Emmyx Engineering Integrated Services Ltd</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaProjectDiagram /></IconWrapper>
          <Title theme={currentTheme}>Project Management</Title>
          <Text>Chief Executive Officer at Emmyx Engineering Integrated Services Ltd</Text>
        </Column>

        <Column theme={isLight ? 'light' : 'dark'}>
          <IconWrapper theme={currentTheme}><FaUniversity /></IconWrapper>
          <Title theme={currentTheme}>Program Management</Title>
          <Text>European-American University</Text>
        </Column>

      </ContentSection>
    </Container>
  );
};

export default WhyPartnerWithUs;
