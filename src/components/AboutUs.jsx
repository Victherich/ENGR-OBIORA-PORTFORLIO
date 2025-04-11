import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import car1 from '../Images4/d6.jpg';
import whoWeAre from '../Images4/dp14b.png';
import strategic from '../Images4/p21.jpeg';
import scope from '../Images4/d14.png';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

// Styled Components
const AboutContainer = styled.div`
  animation: ${fadeIn} 1s ease;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(180deg, #1e293b, #0f172a)'
      : 'linear-gradient(180deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  padding: 2rem;
`;

const HeroSection = styled.section`
  height: 50vh;
  background: url(${car1});
  bakground-position:bottom;
  animation: ${slideBackground} 15s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);

  @media (max-width: 884px) {
    height: 250px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  padding: 3rem 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 884px) {
    flex-direction: column;
  }
`;

const ContentColumn = styled.div`
  min-width: 300px;
  max-width: 600px;
`;

const ImageColumn = styled.div`
  animation: ${fadeIn} 1.5s ease;
  width: 50%;

  @media (max-width: 884px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  animation: ${fadeIn} 1.2s ease;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#555')};
  animation: ${fadeIn} 1.4s ease;
`;

const AboutUs = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <AboutContainer theme={theme === true ? 'light' : 'dark'}>
      <HeroSection>
        <HeroTitle>About Engr. Emmanuel Aniekwena</HeroTitle>
      </HeroSection>

      <Section>
        <ContentColumn>
          <SectionTitle theme={theme === true ? 'light' : 'dark'}>Professional Summary</SectionTitle>
          <Text theme={theme === true ? 'light' : 'dark'}>
            I am an advanced project-certified manager and a results-driven Civil Engineer with over 15 years of
            experience in infrastructure development, structural design, road construction, and project management.
            As a visionary leader and the Managing Director/CEO of Emmyx Engineering Integrated Services Ltd and
            Penuel Engineering Concept Ltd, I have successfully overseen large-scale construction projects across Nigeria.
          </Text>
          <Text theme={theme === true ? 'light' : 'dark'}>
            I excel at managing multidisciplinary teams, ensuring regulatory compliance, and delivering high-quality
            engineering solutions. I am a COREN-certified professional with a strong technical background in tools
            such as AutoCAD, Civil Soft Quick Series, SAP2000, and Microsoft Project.
          </Text>
          <Text theme={theme === true ? 'light' : 'dark'}>
            My passion lies in providing sustainable, cost-effective, and forward-thinking engineering solutions that
            drive long-term value and impact.
          </Text>
        </ContentColumn>

        <ImageColumn>
          <Img  style={{borderRadius:"50%", width:"80%"}} src={whoWeAre} alt="Engineer Summary" />
        </ImageColumn>
      </Section>

      <Section>
        <ContentColumn>
          <SectionTitle theme={theme === true ? 'light' : 'dark'}>Leadership & Vision</SectionTitle>
          <Text theme={theme === true ? 'light' : 'dark'}>
            Through Emmyx Engineering and Penuel Engineering Concept, I have led strategic projects that have transformed
            rural and urban infrastructure. My leadership combines technical excellence, innovation, and a people-first approach.
          </Text>
        </ContentColumn>

        <ImageColumn>
          <Img src={strategic} alt="Leadership & Vision" />
        </ImageColumn>
      </Section>

      <Section>
        <ImageColumn>
          <Img src={scope} alt="Scope" />
        </ImageColumn>

        <ContentColumn>
          <SectionTitle theme={theme === true ? 'light' : 'dark'}>Continental Reach</SectionTitle>
          <Text theme={theme === true ? 'light' : 'dark'}>
            My influence and collaborative efforts in civil engineering span across West Africa,
            contributing to sustainable development and resilient infrastructure in diverse environments.
          </Text>
        </ContentColumn>
      </Section>
    </AboutContainer>
  );
};

export default AboutUs;
