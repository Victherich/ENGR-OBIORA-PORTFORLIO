
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

// Image Imports
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

import Hero4 from "./Hero4";
import { useLocation, useNavigate } from "react-router-dom";



const spaceBackgroundDark = `
  radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
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
  z-index: 999;
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
    { src: p1, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p2, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2: "1px" },
    { src: p3, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
    { src: p4, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2: "1px" },
    { src: p5, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
    { src: p6, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
    { src: p7, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2: "1px" },
    { src: p8, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p9, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2: "1px" },
    { src: p10, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
    { src: p11, columnSpan: "span 1", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p12, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p13, columnSpan: "span 1", rowSpan: "span 1", border: "25px", border2: "1px" },
    { src: p14, columnSpan: "span 1", rowSpan: "span 2", border: "10px", border2: "1px" },
    { src: p15, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
    { src: p16, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2: "1px" },
    { src: p17, columnSpan: "span 2", rowSpan: "span 1", border: "25px", border2: "1px" },
    { src: p18, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p19, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
    { src: p20, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2: "1px" },
    { src: p21, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
    { src: p22, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2: "1px" },
    { src: p23, columnSpan: "span 1", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p24, columnSpan: "span 2", rowSpan: "span 2", border: "30px", border2: "1px" },
    { src: p25, columnSpan: "span 2", rowSpan: "span 1", border: "25px", border2: "1px" },
    { src: p26, columnSpan: "span 1", rowSpan: "span 1", border: "20px", border2: "1px" },
    { src: p27, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
    { src: p28, columnSpan: "span 1", rowSpan: "span 2", border: "15px", border2: "1px" },
    { src: p29, columnSpan: "span 1", rowSpan: "span 1", border: "25px", border2: "1px" },
    { src: p30, columnSpan: "span 2", rowSpan: "span 2", border: "30px", border2: "1px" },
    { src: p31, columnSpan: "span 1", rowSpan: "span 2", border: "10px", border2: "1px" },
  ];
  

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useSelector((state)=>state.theme)
    const location = useLocation();
    const navigate = useNavigate();

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  return (
    <GalleryWrapper theme={theme === true ? 'light' : 'dark'}>
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
      {location.pathname==='/gallery'&&<GalleryGrid>
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
      </GalleryGrid>}

      {/* Irregular Image Grid */}
      {location.pathname==='/'&&<GalleryGrid>
        {images.slice(0,6).map((img, index) => (
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
      </GalleryGrid>}
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

export default Gallery;
