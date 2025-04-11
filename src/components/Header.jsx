


import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes, FaCar } from 'react-icons/fa';
import carlogo from '../Images/carlogo.jpeg';
import smallCar from '../Images4/d15.png';
import smallCar2 from '../Images4/d16.png';
import smallCar3 from '../Images/smallcar3.png';
import { Context } from './Context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import faclogo2 from '../Images4/dp2.jpg';
import faclogo1 from '../Images4/dp1.jpg'

// Animation Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideFastContinuous = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(200%);
  }
`;

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => (theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)')};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.8s ease;
  position: fixed;
  top: 0px;
  z-index: 9999999999;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'rgba(255, 68, 0, 0.8)')};
  // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#1e293b')};
  cursor: pointer;
  gap: 10px;
  width:50px;
  border-radius:50%;
  svg {
    margin-right: 0.5rem;
    animation: ${fadeIn} 1s ease;
  }
`;

const Logo2 = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : 'rgba(255, 68, 0, 0.8)')};
  // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#1e293b')};
  cursor: pointer;
  gap: 10px;

  svg {
    margin-right: 0.5rem;
    animation: ${fadeIn} 1s ease;
  }

  @media (max-width:428px){
    display:none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 20px;
  text-align:center;

  @media (max-width:1280px){
    // gap:10px;
  }

  @media (max-width: 884px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => (theme === 'dark' ? '#1e293b' : '#f8fafc')};
    width: 100%;
    padding: 1rem 0;
    z-index: 10;
    // animation: ${fadeIn} 0.5s ease;
    
  }
`;

const NavItem = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : 'orangered')};
  cursor: pointer;
  transition: color 0.3s;
  font-weight:500;

  &:hover {
    // color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#94a3b8')};
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 884px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 50px;
  border-radius: 50%;
`;

const FastCar = styled.img`
  width: 80px;
  height: auto;
  animation: ${slideFastContinuous} 5s linear infinite;
   position: absolute; /* To layer the cars within the container */
`;

const CarContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 20%;
  height: 30px;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media (max-width:428px){
    width:70%;
  }
`;


const StaggeredCar = styled(FastCar)`
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 1.5s;
  }
  &:nth-child(3) {
    animation-delay: 3s;
  }
`;

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { theme, setTheme } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
const theme = useSelector((state)=>state.theme)
const sideMenuRef = useRef();
const {loading,setLoading,location2,setLocation2}=useContext(Context);

const [faclogo, setFaclogo]=useState(faclogo2)

useEffect(()=>{
  if(theme){
    setFaclogo(faclogo2)
  }else{
    setFaclogo(faclogo1)
  }
},[theme])


  // Handle click outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);



   useEffect(() => {
        setLoading(true)
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds
    
        return () => clearTimeout(timeout); // Cleanup timeout
      }, [location.pathname]);


      useEffect(()=>{
          setLocation2(!location2)
      },[location.pathname])
  

  return (
    <HeaderContainer theme={theme === true ? 'light' : 'dark'}>
      <Logo theme={theme === true ? 'light' : 'dark'} onClick={()=>navigate('/')}>
        {/* <Img src={carlogo} alt="logo" /> <Logo2 theme={theme === true ? 'light' : 'dark'} >FAC TRADE TRACK <FaCar /></Logo2> */}
        <Img src={faclogo} alt="logo" />
      </Logo>
      <CarContainer>
        {/* <FastCar src={smallCar} alt="Fast Car" />
        <FastCar src={smallCar} alt="Fast Car" />
        <FastCar src={smallCar} alt="Fast Car" /> */}
          <StaggeredCar src={smallCar} alt="Fast Car 1" />
  <StaggeredCar src={smallCar2} alt="Fast Car 2" />
  {/* <StaggeredCar src={smallCar3} alt="Fast Car 3" /> */}
      </CarContainer>
      <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Nav isOpen={isMenuOpen} theme={theme === true ? 'light' : 'dark'} ref={sideMenuRef}>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={() => {navigate('/');window.scroll(0,0);setIsMenuOpen(false)}} style={{
  textDecoration: location.pathname === '/' ? 'underline' : 'none',
  textDecorationColor: location.pathname === '/' ? '#FF7133' : 'inherit',
  textDecorationThickness: location.pathname === '/' ? '3px' : 'initial'
}}>Home</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={() => {navigate('/aboutus');setIsMenuOpen(false)}} style={{
  textDecoration: location.pathname === '/aboutus' ? 'underline' : 'none',
  textDecorationColor: location.pathname === '/aboutus' ? '#FF7133' : 'inherit',
  textDecorationThickness: location.pathname === '/aboutus' ? '3px' : 'initial'
}}>About</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=> {navigate('/gallery');setIsMenuOpen(false)}}style={{
  textDecoration: location.pathname === '/gallery' ? 'underline' : 'none',
  textDecorationColor: location.pathname === '/gallery' ? '#FF7133' : 'inherit',
  textDecorationThickness: location.pathname === '/gallery' ? '3px' : 'initial'
}}>Gallery</NavItem>
        {/* <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=>{navigate('/servicesandsupport');setIsMenuOpen(false)}} style={{textDecoration:location.pathname==='/aboutus'?"underline":""}}>Services & Support</NavItem> */}
        {/* <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=> {navigate('/brandandtechnology');setIsMenuOpen(false)}} style={{textDecoration:location.pathname==='/aboutus'?"underline":""}}>Brands & Technology</NavItem> */}
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={() =>{ navigate("/blog");setIsMenuOpen(false)}} style={{
  textDecoration: location.pathname === '/blog' ? 'underline' : 'none',
  textDecorationColor: location.pathname === '/blog' ? '#FF7133' : 'inherit',
  textDecorationThickness: location.pathname === '/blog' ? '3px' : 'initial'
}}>My Blog</NavItem>
        <NavItem theme={theme === true ? 'light' : 'dark'} onClick={()=>{navigate("/contactus");setIsMenuOpen(false)}} style={{
  textDecoration: location.pathname === '/contactus' ? 'underline' : 'none',
  textDecorationColor: location.pathname === '/contactus' ? '#FF7133' : 'inherit',
  textDecorationThickness: location.pathname === '/contactus' ? '3px' : 'initial'
}}>Contact</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
