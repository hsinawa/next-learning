import HomeScreen from '@/components/Homescreen/HomeScreen'
import React from 'react'
import '../../styles/common.css'
import AboutPage from '../about/page'
import MarqueeComponent from '@/components/Marquee/Marquee'
import ProjectPage from '../projects/page'



const Encapsulation = () => {
  return (
    <div  >
        <HomeScreen/>
        <MarqueeComponent/>
        <AboutPage/>
        <ProjectPage/>
        
        <br/><br/><br/>
    </div>
  )
}

export default Encapsulation