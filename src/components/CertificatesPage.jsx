
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import p1 from '../Images4/cert1.jpg';
import p2 from '../Images4/cert2.jpg';
import p3 from '../Images4/p1.jpeg';
import Hero4 from "./Hero4";
import { useLocation, useNavigate } from "react-router-dom";



const spaceBackgroundDark = `
  radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
`;


const slideBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;


// Floating Animation
const floating = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
  50% { transform: translateY(20px) rotate(10deg); opacity: 1; }
  100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
`;

// Background Animation
const rotate = keyframes`
  0% { transform: rotate(0deg); opacity: 0.5; }
  100% { transform: rotate(360deg); opacity: 0.7; }
`;

// Styled Components
const GalleryWrapper = styled.div`
  position: relative;
//   background: linear-gradient(135deg, #ece9e6, #ffffff);
background: ${({ theme }) => (theme === 'dark' ? spaceBackgroundDark : 'lightgray')};
 ;
  padding: 80px 20px;
  text-align: center;
  overflow: hidden;

  @media(max-width:768px){
    padding-top:10px;
  }
`;

// Floating Artistic Backgrounds
const FloatingShape = styled.div`
  position: absolute;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  background: ${(props) => props.bgColor || "rgba(255, 0, 0, 0.3)"};
  border-radius: ${(props) => (props.circle ? "50%" : "20%")};
  top: "50%";
  left: ${(props) => props.left || "10%"};
  animation: ${floating} ${(props) => props.duration || "6s"} infinite ease-in-out;
  z-index: 2;
  filter: blur(5px);
  opacity: 0.8;
`;

const RotatingElement = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 6px solid rgba(0, 0, 255, 0.3);
  border-radius: 50%;
  top: 50%;
  right: 15%;
  animation: ${rotate} 15s linear infinite;
  z-index: 1;
`;



const HeroSection = styled.section`
  height: 50vh;
  background: url(${p3});
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


// Title
const GalleryTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 0, 255, 0.8);
  margin-bottom: 40px;
  letter-spacing: 3px;
`;

// Irregular Grid Layout
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 220px;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
`;

// Image Frame & Hover Effects
// const GalleryItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: ${(props) => props.border || "10px"};
//   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
//   grid-column: ${(props) => props.columnSpan || "span 1"};
//   grid-row: ${(props) => props.rowSpan || "span 1"};
// //   border: 6px solid rgba(0, 0, 255, 0.5); /* 🔵 Blue Frame */

//   &:hover img {
//     transform: scale(1.1);
//     filter: brightness(80%);
//   }
// `;

// const GalleryItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: ${(props) => props.border || "10px"};
//   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
//   grid-column: ${(props) => props.columnSpan || "span 1"};
//   grid-row: ${(props) => props.rowSpan || "span 1"};
//   border: ${(props) => props.border || "10px"} solid rgba(0,0,255,0.5); /* 🔵 Fixed Blue Border */
  
//   &:hover img {
//     transform: scale(1.1);
//     filter: brightness(80%);
//   }
// `;

const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${(props) => props.border || "10px"};
  border: ${(props) => props.border || "10px"} solid gray; /* 🔵 Single Blue Border */
  grid-column: ${(props) => props.columnSpan || "span 1"};
  grid-row: ${(props) => props.rowSpan || "span 1"};

  &:hover img {
    transform: scale(1.1);
    filter: brightness(80%);
  }
`;



const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
//   border-radius: ${(props) => props.border || "10px"};
`;

// Lightbox Modal
const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999999;
  overflow-y:scroll;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
`;

const LightboxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  background: white;
  color: black;
  border: none;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background: red;
    color: white;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  // font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  background: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#eab308')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => (theme === 'dark' ? '#eab308' : '#fbbf24')};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const images = [
    { src: p1, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
    { src: p2, columnSpan: "span 2", rowSpan: "span 2", border: "30px", border2: "1px" },
  ];
  

const CertificatesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useSelector((state)=>state.theme)
    const location = useLocation();
    const navigate = useNavigate();

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  return (
    <GalleryWrapper theme={theme === true ? 'light' : 'dark'}>
        <HeroSection>
        <HeroTitle>My Certifications</HeroTitle>
      </HeroSection>
        {location.pathname==="/gallery"&&<Hero4/>}
      {/* Floating Artistic Elements */}
      <FloatingShape top="5%" left="5%" size="180px" bgColor="rgba(255, 0, 0, 0.4)" circle />
      <FloatingShape top="80%" left="80%" size="200px" bgColor="rgba(0, 255, 255, 0.3)" />
      <RotatingElement />

      <GalleryTitle></GalleryTitle>
      <p style={{
  fontStyle: "italic",
  marginBottom: "20px",
  fontWeight: "bold",
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)"
}}
>(Click image to expand)</p>

      {/* Irregular Image Grid */}
      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryItem
            key={index}
            columnSpan={img.columnSpan}
            rowSpan={img.rowSpan}
            border={img.border}
            onClick={() => handleImageClick(img.src)}
          >
            <GalleryImage src={img.src} alt={`Gallery Image ${index + 1}`} border={img.border2} />
          </GalleryItem>
        ))}
      </GalleryGrid>

     
      {location.pathname==='/'&& <Button theme={theme === true ? 'light' : 'dark'} onClick={() => navigate("/gallery")}>
                Explore More <FaArrowRight />
              </Button>}

      {/* Lightbox */}
      {selectedImage && (
        <LightboxOverlay>
          <LightboxContent>
            <LightboxImage src={selectedImage} alt="Enlarged Image" />
            <CloseButton onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </CloseButton>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </GalleryWrapper>
  );
};

export default CertificatesPage;
