

// // Footer.js
// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { Context } from './Context';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

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
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'linear-gradient(90deg, #1e293b, #0f172a)' : 'linear-gradient(90deg,rgb(217, 217, 218),rgb(191, 197, 206))'};
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#111')};
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   animation: ${fadeIn} 1s ease;
//   // box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.9);
//   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'orangered')};
//   text-decoration: none;
//   font-size: 1rem;
//   transition: color 0.3s;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 1rem;

//   svg {
//     font-size: 1.5rem;
//     color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'orangered')};
//     transition: transform 0.3s, color 0.3s;

//     &:hover {
//       color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//       transform: scale(1.2);
//     }
//   }
// `;

// const Copyright = styled.p`
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   opacity: 0.8;
//   text-align:center;
// `;

// const Strong = styled.strong`
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'orangered')};
// `


// const ContactWrap = styled.div`
//   width:100%;
//   display:flex;
//   justify-item:center;
//   align-items:center;
//   flex-direction:column;
//   text-align:center;
//   gap:20px;
//   // padding:20px;

//   strong{
//   // color:yellow;
//   }
// `



// // Footer Component
// const Footer = () => {
//   // const { theme } = useContext(Context);
//   const theme = useSelector((state)=>state.theme)
//   const navigate = useNavigate();

//   return (
//     <FooterContainer theme={theme === true ? 'light' : 'dark'}>
//       <FooterContent>
//         <FooterDescription>
//         <Strong theme={theme === true ? 'light' : 'dark'}>FAC Trade Track Ltd.</Strong> is more than a business; we are a movement driving Africa’s transformation. Our solutions not only address today’s challenges but also lay the foundation for a cleaner, smarter, and more prosperous future.  
//         </FooterDescription>
//         <FooterDescription>
//         <ContactWrap>
//           <p><strong>Address:</strong> Km 3 Apapa / Oshodi Exp. Way By Coker Bus stop.Coker Lagos Nigeria.</p>
//           <p><strong>Email:</strong> info@facafrica.com</p>
//           <p><strong>Phone:</strong> 08138842889</p>
//         </ContactWrap>
//         </FooterDescription>
       
//         <FooterLinks>
//           <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/")}>Home</FooterLink>
//           <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/aboutus")}>About Us</FooterLink>
//           <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/carshowroompage2")}>Show Room</FooterLink>
//           <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/")}>Terms and Conditions</FooterLink>
//           <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/")}>Privacy Policy</FooterLink>
//           <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate("/contactus")}>Contact us</FooterLink>
//         </FooterLinks>
//         <SocialIcons theme={theme === true ? 'light' : 'dark'}>
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

//       <Copyright>
//       Join us in shaping the future of transportation, energy, and infrastructure across Africa. Together, we can create a continent that thrives sustainably.
//       </Copyright>
//       <Copyright>
//         © {new Date().getFullYear()} FAC TRADE TRACK LTD. All Rights Reserved.
//       </Copyright>
//       {/* <Copyright>
//         © {new Date().getFullYear()} FAC TRADE TRACK LTD. All Rights Reserved.
//       </Copyright> */}
//     </FooterContainer>
//   );
// };

// export default Footer;


// Footer.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Animation
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
    theme === 'dark' ? '#0f172a' : '#f5f5f5'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#111')};
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

const FooterTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#e63946')};
`;

const FooterDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 600px;
  opacity: 0.9;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#e63946')};
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#e63946')};
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
      transform: scale(1.2);
    }
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: bold;
`;

const Strong = styled.strong`
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#e63946')};
`;

// Footer Component
const Footer = () => {
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate();

  return (
    <FooterContainer theme={theme === true ? 'light' : 'dark'}>
      <FooterContent>
        <FooterTitle theme={theme === true ? 'light' : 'dark'}>ENGR. ANIEKWENA (OBIORA) EMMANUEL</FooterTitle>
        <FooterDescription>
          A visionary leader in Civil Engineering, Infrastructure Development, and Project Management.
          Passionate about delivering sustainable and cost-effective engineering solutions.
        </FooterDescription>

        <ContactInfo>
          <p><Strong theme={theme === true ? 'light' : 'dark'}>Email:</Strong> Emmyx2003@gmail.com | Emmyx2003@yahoo.com</p>
          <p><Strong theme={theme === true ? 'light' : 'dark'}>Phone:</Strong> +234 803 476 6089</p>
          {/* <p><Strong theme={theme === true ? 'light' : 'dark'}>Location:</Strong> Lagos, Nigeria</p> */}
        </ContactInfo>

        <FooterLinks>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/")}>Home</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/aboutus")}>About</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/gallery")}>Gallery</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/blog")}>My Blog</FooterLink>
          <FooterLink theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/contactus")}>Contact</FooterLink>
    
        </FooterLinks>

        <SocialIcons theme={theme === true ? 'light' : 'dark'}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/aniekwena-emmanuel-55026b310/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </SocialIcons>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} ENGR. ANIEKWENA (OBIORA) EMMANUEL. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
