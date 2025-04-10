import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import AboutUsPreview from './AboutUsPreview'
import AutoTrendingSummary from './AutoTrendingSummary'
import CoreOfferingsPage from './CoreOfferingsPage'
import WhyPartnerWithUs from './WhyPartnerWithUs'
import CarShowroomPage from './CarShowRoomPage'
import Hero3 from './Hero3'
import { useState, useEffect } from 'react'
import CoreCompetencies from './CoreCompetence'
import QualificationsSpace from './QualificationsSpace'
import EducationSection from './EducationSection'


const LandingPage = () => {

  const [reRender,setRerender]=useState(true)
  console.log(reRender, "rerender")
 
  useEffect(()=>{
 
     const interalId = setTimeout(()=>{
         setRerender(false);
     },400)
 
     const interalId2 = setTimeout(()=>{
         setRerender(true)
     },1000)
 
     return ()=>{clearInterval(interalId) ; clearInterval(interalId2)}
 
   },[])
 


  return (
  reRender&&<div>

      <Hero/>
      <AboutUsPreview/>
      
      <CoreCompetencies/>
      <QualificationsSpace/>
      <EducationSection/> 
      <CoreOfferingsPage/>
      {/* <Hero3/> */}
      {/* <CarShowroomPage/> */}
      <AutoTrendingSummary/>
      <WhyPartnerWithUs/>



    </div>
  )
}

export default LandingPage
