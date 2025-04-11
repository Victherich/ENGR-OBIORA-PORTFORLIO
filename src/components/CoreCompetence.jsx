import React from 'react';
import styled, {keyframes} from 'styled-components';
import { useSelector } from 'react-redux'; // To fetch theme state
import cc1 from '../Images4/cc1.png'
import cc2 from '../Images4/cc2.png'
import cc3 from "../Images4/cc3.png"
import cc4 from '../Images4/cc4.png'
import cc5 from '../Images4/cc5.jpg'
import cc6 from '../Images4/cc6.jpg'
import cc7 from '../Images4/cc7.jpg'
import cc8 from '../Images4/p26.jpeg'
import ct1 from "../Images4/ct4.jpg"


// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components for dark and light modes
const Container = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-image: url(${ct1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; /* This creates the parallax effect */
  min-height: 100vh;
  position:relative;


  &::before{
  content:"";
  top:0;
  left:0;
  position:absolute;
  background-color:rgba(0,0,0,0.5);
  width:100%;
  height:100%;

  }

`;




const TitleText = styled.h2`
 position:relative;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align:center;    
  color: ${({ theme }) => (theme === 'dark' ? 'white' : '#FF7133')};
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
//   animation: ${fadeIn} 1s ease-in;

@media(max-width:884px){
  font-size:2rem;
}

`;


const Grid = styled.div`
 position:relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const Card = styled.div`
  background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#ffffff')};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#d1d5db' : '#475569')};
`;

const data = [
  {
    title: 'Civil & Structural Engineering Design',
    desc: 'Innovative and sustainable solutions for complex civil and structural projects.',
    img: cc1,
  },
  {
    title: 'Project Management & Supervision',
    desc: 'Leading diverse teams to deliver projects on time, within budget, and to the highest standards.',
    img: cc2,
  },
  {
    title: 'Road & Bridge Construction',
    desc: 'Pioneering modern road and bridge infrastructure with a focus on sustainability.',
    img: cc3,
  },
  {
    title: 'Water Reticulation & Quality Control',
    desc: 'Designing efficient water distribution systems and ensuring compliance with safety standards.',
    img: cc4,
  },
  {
    title: 'Contract Negotiation & Vendor Management',
    desc: 'Expert in contract negotiations, ensuring favorable terms for all stakeholders.',
    img: cc5,
  },
  {
    title: 'Renewable Energy & Solar Power Installation',
    desc: 'Integrating green energy solutions, including solar power, for sustainable infrastructure.',
    img: cc6,
  },
  { 
    title: 'Risk Assessment & Mitigation',
    desc: 'Identifying risks and implementing solutions to minimize project disruptions.',
    img: cc7,
  },
  {
    title: 'Team Leadership & Stakeholder Engagement',
    desc: 'Leading teams and engaging stakeholders to achieve project goals with transparency.',
    img: cc8,
  },
];

const CoreCompetencies = () => {
  // Fetching the current theme from Redux store
  const theme = useSelector((state) => state.theme);
  const displayTheme = theme === true ? 'light' : 'dark';

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
        <TitleText theme={displayTheme}>My Core Competencies</TitleText>
      <Grid>
        {data.map((item, index) => (
          <Card key={index} theme={theme === true ? 'light' : 'dark'}>
            <CardImage src={item.img} alt={item.title} />
            <CardBody>
              <Title theme={theme === true ? 'light' : 'dark'}>{item.title}</Title>
              <Description theme={theme === true ? 'light' : 'dark'}>{item.desc}</Description>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default CoreCompetencies;
