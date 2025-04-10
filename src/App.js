
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import AutoTrendingNews from './components/AutoTrendingNews';
import Hero2 from './components/Hero2';
import ThemeSwitch from './components/ThemeSwitch';
import CarShowroomPage2 from './components/CarShowRoomPage2';
import ScrollAnimation from './components/scrollAnimation';
import ContactUs from './components/ContactUs';
import ServicesAndSupport from './components/ServicesAndSupport';
import BrandAndTechnology from './components/BrandAndTechnology';
import { useContext, useEffect , useState} from 'react';
import Snowfall2 from './components/snowFall';
import { Context } from './components/Context';
import AutoRefresh from './components/AutoRefresh';

import LoadingSpinner from './components/LoadingSpinner';
import LiveChat from './components/Chat';
import wp from './Images4/whatsapplogo.png'
import wp2 from './Images4/linkedIn.webp'
import wp3 from "./Images4/d14.png"
import Gallery from './components/Gallery';
import BlogsPage from './components/Blog';
import CertificatesPage from './components/CertificatesPage';


function App() {

  
  const {loading,setLoading,location2}=useContext(Context)
  

 
  const [reRender,setRerender]=useState(true)
 console.log(reRender, "rerender")

 useEffect(()=>{

    const interalId = setTimeout(()=>{
        setRerender(false)
    },200)

    const interalId2 = setTimeout(()=>{
        setRerender(true)
    },1000)

    return ()=>{clearInterval(interalId) ; clearInterval(interalId2)}

  },[])


  return (
  <BrowserRouter>
  <ScrollToTop/>
  <Snowfall2/>
{/* {<AutoRefresh/>} */}
  {reRender&&<Header/>}
 
  {loading && <LoadingSpinner onComplete={() => setLoading(false)} />}
 { reRender&&<Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/autotrendingnews' element={<AutoTrendingNews/>}/>
     <Route path='/carshowroompage2' element={<CarShowroomPage2/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/servicesandsupport' element={<ServicesAndSupport/>}/>
     <Route path='/brandandtechnology' element={<BrandAndTechnology/>}/>
     <Route path='/blog' element={<BlogsPage/>}/>
     <Route path='/certificates' element={<CertificatesPage/>}/>
    </Routes>}

   
   {reRender&& <ThemeSwitch/>}
   { reRender&& <Hero2/>}
    {reRender && <Footer/>}
    {/* <LiveChat/> */}
    {/* <a><img src={wp3} alt="logo" className="WhatsAppIcon3" /></a>  */}
    {/* <a><img src={wp2} alt="logo" className="WhatsAppIcon2" onClick={() => window.open("https://www.linkedin.com/in/aniekwena-emmanuel-55026b310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} /></a>  */}
    <a href='/certificates'><p className="WhatsAppIcon4" >View<br/>Certifications</p></a>
    <a><img src={wp} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/+2348034766089", "_blank")} /></a> 
    <a><img src={wp2} alt="logo" className="WhatsAppIcon2" onClick={() => window.open("https://www.linkedin.com/in/aniekwena-emmanuel-55026b310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} /></a> 
     
  </BrowserRouter>
    
    
  );
}

export default App;
