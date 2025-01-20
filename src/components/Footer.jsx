// // Footer.js
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// // Animation Keyframes
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

// // Styled Components
// const FooterContainer = styled.footer`
//   background: linear-gradient(90deg, #1e293b, #0f172a);
//   color: #ffffff;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   animation: ${fadeIn} 1s ease;
//   box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
// `;

// const FooterContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   gap: 1.5rem;

//   @media (max-width: 768px) {
//     padding: 0 1rem;
//   }
// `;

// const FooterDescription = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
//   max-width: 600px;
//   opacity: 0.9;
// `;

// const FooterLinks = styled.div`
//   display: flex;
//   gap: 2rem;
//   margin: 1rem 0;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const FooterLink = styled.a`
//   color: #fbbf24;
//   text-decoration: none;
//   font-size: 1rem;
//   transition: color 0.3s;
//   cursor:pointer;

//   &:hover {
  
//     text-decoration:underline;
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 1rem;

//   svg {
//     font-size: 1.5rem;
//     color: #fbbf24;
//     transition: transform 0.3s, color 0.3s;

//     &:hover {
//       color: #ffffff;
//       transform: scale(1.2);
//     }
//   }
// `;

// const Copyright = styled.p`
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   opacity: 0.8;
// `;

// // Footer Component
// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterDescription>
//           FAC TRADE TRACK LTD is a global leader in car manufacturing and trade. Our mission is to provide high-quality vehicles and exceptional customer service, ensuring a seamless experience for our valued clients. From innovative designs to sustainable practices, we are dedicated to shaping the future of the automotive industry.
//         </FooterDescription>
//         <FooterLinks>
//           <FooterLink >Home</FooterLink>
//           <FooterLink >About Us</FooterLink>
//           <FooterLink>Services</FooterLink>
//           <FooterLink >Terms and Conditions</FooterLink>
//           <FooterLink >Privacy Policy</FooterLink>
//           <FooterLink>Contact us</FooterLink>
   
//         </FooterLinks>
//         <SocialIcons>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//           </a>
//         </SocialIcons>
//       </FooterContent>
//       <Copyright>© {new Date().getFullYear()} FAC TRADE TRACK LTD. All Rights Reserved.</Copyright>
//     </FooterContainer>
//   );
// };

// export default Footer;


// Footer.js
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Animation Keyframes
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

// Styled Components
const FooterContainer = styled.footer`
  background: ${({ theme }) =>
    theme === 'dark' ? 'linear-gradient(90deg, #1e293b, #0f172a)' : 'linear-gradient(90deg,rgb(217, 217, 218),rgb(191, 197, 206))'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#111')};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease;
  // box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.9);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 600px;
  opacity: 0.9;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'orangered')};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'orangered')};
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
      transform: scale(1.2);
    }
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
  text-align:center;
`;

const Strong = styled.strong`
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'orangered')};
`

// Footer Component
const Footer = () => {
  // const { theme } = useContext(Context);
  const theme = useSelector((state)=>state.theme)
  const navigate = useNavigate();

  return (
    <FooterContainer theme={theme === true ? 'light' : 'dark'}>
      <FooterContent>
        <FooterDescription>
        <Strong theme={theme === true ? 'light' : 'dark'}>FAC Trade Track Ltd.</Strong> is more than a business; we are a movement driving Africa’s transformation. Our solutions not only address today’s challenges but also lay the foundation for a cleaner, smarter, and more prosperous future.  </FooterDescription>
        <FooterLinks>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/")}>Home</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/aboutus")}>About Us</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/carshowroompage2")}>Show Room</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/")}>Terms and Conditions</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/")}>Privacy Policy</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/contactus")}>Contact us</FooterLink>
        </FooterLinks>
        <SocialIcons theme={theme === true ? 'light' : 'dark'}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </FooterContent>

      <Copyright>
      Join us in shaping the future of transportation, energy, and infrastructure across Africa. Together, we can create a continent that thrives sustainably.
      </Copyright>
      <Copyright>
        © {new Date().getFullYear()} FAC TRADE TRACK LTD. All Rights Reserved.
      </Copyright>
      {/* <Copyright>
        © {new Date().getFullYear()} FAC TRADE TRACK LTD. All Rights Reserved.
      </Copyright> */}
    </FooterContainer>
  );
};

export default Footer;


