



// import React, { useEffect, useRef, useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaArrowRight, FaCarSide } from 'react-icons/fa';
// import car10 from "../Images/car10.jpg";
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
// import { Context } from './Context';
// import { useNavigate } from 'react-router-dom';
// import 'animate.css'; // For animations
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

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   padding: 2rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
// `;

// const TitleSection = styled.div`
//   width: 100%;
//   height: 100px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
// `;

// const TitleText = styled.h2`
//   position: absolute;
//   z-index: 2;
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   text-align: center;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const SlidingImages = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   width: 100%;
//   animation: ${slide} 50s linear infinite;
// `;

// const CarImage = styled.img`
//   width: 100%;
//   max-height: 300px;
//   object-fit: cover;
//   z-index: 999;
// `;

// const ContentSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   margin-top: 2rem;
//   justify-content: center;
// `;

// const Column = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
//   padding: 1rem;
//   background: ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// `;

// const IconWrapper = styled.div`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
// `;

// const Text = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
// `;

// const Button = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 1rem;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
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

// const AboutUsPreview = () => {
//   // const { theme } = useContext(Context);
// const theme = useSelector((state)=>state.theme)
//   const navigate = useNavigate();
//   const observer = useRef(null);

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const element = entry.target;
  
//           if (element.tagName === 'H1') {
//             console.log('Animating H1', element); // Debugging
//             // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slow');
            
//           } else if (element.tagName === 'H2') {
//             // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slower');
            
//           } else if (element.tagName === 'P') {
//             // element.classList.add('animate__animated', 'animate__rollIn', 'animate__slower');
            
//           }
          
//           else if (element.tagName === 'A') {
//             element.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
//           }
  
//           // Stop observing the element after animation is triggered
//           observer.current.unobserve(element);
//         }
//       });
//     };
  
//     observer.current = new IntersectionObserver(handleIntersection, {
//       threshold: 0.3, // Adjusted threshold
//     });
  
//     // Select elements
//     const titleText = document.querySelector('h1'); // Update if styled-component changes this
//     const headings = document.querySelectorAll('h2');
//     const paragraphs = document.querySelectorAll('p');
//     const button = document.querySelector('a');
  
//     if (titleText) observer.current.observe(titleText);
//     headings.forEach((heading) => observer.current.observe(heading));
//     paragraphs.forEach((paragraph) => observer.current.observe(paragraph));
//     if (button) observer.current.observe(button);
  
//     return () => {
//       if (observer.current) observer.current.disconnect();
//     };
//   }, []);
  

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       <TitleSection theme={theme === true ? 'light' : 'dark'}>
//         <TitleText theme={theme === true ? 'light' : 'dark'}>Learn More About Us</TitleText>
//         <SlidingImages>
//           <CarImage src={car10} alt="Car 10" />
//           <CarImage src={car11} alt="Car 11" />
//           <CarImage src={car12} alt="Car 12" />
//           <CarImage src={car13} alt="Car 13" />
//           <CarImage src={car14} alt="Car 14" />
//            <CarImage src={car15} alt="Car 15" />
//            <CarImage src={car16} alt="Car 16" />
//            <CarImage src={car17} alt="Car 17" />
//            <CarImage src={car18} alt="Car 18" />
//            <CarImage src={car19} alt="Car 19" />
//            <CarImage src={car20} alt="Car 20" />
//            <CarImage src={car21} alt="Car 21" />
//            <CarImage src={car22} alt="Car 22" />
//         </SlidingImages>
//       </TitleSection>

//       <ContentSection>
//         <Column theme={theme === true ? 'light' : 'dark'}>
//           <IconWrapper theme={theme === true ? 'light' : 'dark'}>
//             <FaCarSide />
//           </IconWrapper>
//           <Title theme={theme === true ? 'light' : 'dark'}>Our Vision</Title>
//           <Text>
//             To pioneer transformative infrastructure, transportation, and clean energy projects that position Africa as
//             a leader in sustainable development.
//           </Text>
//         </Column>

//         <Column theme={theme === true ? 'light' : 'dark'}>
//           <IconWrapper theme={theme === true ? 'light' : 'dark'}>
//             <FaCarSide />
//           </IconWrapper>
//           <Title theme={theme === true ? 'light' : 'dark'}>Our Mission</Title>
//           <Text>
//             FAC Trade Track Ltd. introduces cutting-edge technologies like electric vehicles, solar-powered charging
//             stations, and CNG-powered trucks to the African market.
//           </Text>
//         </Column>
//       </ContentSection>

//       <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate('/aboutus')}>
//         View More <FaArrowRight />
//       </Button>
//     </Container>
//   );
// };

// export default AboutUsPreview;



import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaCarSide } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Images
import car10 from "../Images4/d14.png";
import car11 from "../Images4/dp12.jpeg";
import car12 from "../Images4/dp13.jpeg";
import car13 from "../Images4/dp1.jpg";
import car14 from "../Images4/dp2.jpg";
import car15 from "../Images4/dp12.jpeg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// const cubeRotate = keyframes`
//   0% { transform: rotateY(0deg) rotateX(0deg); }
//   25% { transform: rotateY(90deg) rotateX(0deg); }
//   50% { transform: rotateY(90deg) rotateX(90deg); }
//   75% { transform: rotateY(180deg) rotateX(90deg); }
//   100% { transform: rotateY(360deg) rotateX(360deg); }
// `;

const cubeRotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;  


// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) =>
    theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  padding: 80px 10px;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
`;

const TitleText = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : '#FF7133')};
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  animation: ${fadeIn} 1s ease-in;
`;

const CubeContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${cubeRotate} 20s infinite linear;
`;

const Face = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  opacity: 0.95;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 1rem;
  background: ${({ theme }) => (theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#eab308')};
  color: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#1e293b')};
  border-radius: 6px;
  margin-top: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => (theme === 'dark' ? '#eab308' : '#fbbf24')};
    transform: scale(1.05);
  }

  svg {
    margin-left: 0.5rem;
  }
`;


const Div = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
gap:100px;
`

// Cube face transforms
const faces = [
  { img: car10, transform: 'rotateY(0deg) translateZ(150px)' },
  { img: car11, transform: 'rotateY(90deg) translateZ(150px)' },
  { img: car12, transform: 'rotateY(180deg) translateZ(150px)' },
  { img: car13, transform: 'rotateY(-90deg) translateZ(150px)' },
  { img: car14, transform: 'rotateX(90deg) translateZ(150px)' },
  { img: car15, transform: 'rotateX(-90deg) translateZ(150px)' },
];

const AboutUsPreview = () => {
  const theme = useSelector((state) => state.theme); // true = light, false = dark
  const navigate = useNavigate();
  const displayTheme = theme === true ? 'light' : 'dark';

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3, p, a');
    elements.forEach(el => {
      el.classList.add('animate__animated', 'animate__fadeInUp');
    });
  }, []);

  return (
    <Container theme={displayTheme}>
      <TitleText theme={displayTheme}>About the Engineer</TitleText>
<Div>


      <CubeContainer>
        <Cube>
          {faces.map((face, idx) => (
            <Face key={idx} style={{ backgroundImage: `url(${face.img})`, transform: face.transform }} />
          ))}
        </Cube>
      </CubeContainer>

      <ContentSection>
        <Column theme={displayTheme}>
          <Title theme={displayTheme}>Professional Summary</Title>
          <Text>
          I am an advanced project-certified manager and a results-driven Civil Engineer with over 15 years of experience in infrastructure development, structural design, road construction, and project management. As a visionary leader and the Managing Director/CEO of Emmyx Engineering Integrated Services Ltd and Penuel Engineering Concept Ltd, I have successfully overseen large-scale construction projects across Nigeria.
<br/><br/>
I excel at managing multidisciplinary teams, ensuring regulatory compliance, and delivering high-quality engineering solutions. I am a COREN-certified professional with a strong technical background in tools such as AutoCAD, Civil Soft Quick Series, SAP2000, and Microsoft Project. My passion lies in providing sustainable, cost-effective, and forward-thinking engineering solutions that drive long-term value and impact.</Text>
        </Column>

      </ContentSection>
      </Div>
    </Container>
  );
};

export default AboutUsPreview;

