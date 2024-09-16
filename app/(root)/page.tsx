import HomeScreen from '@/components/Homescreen/HomeScreen'
import React from 'react'
import '../../styles/common.css'
import AboutPage from '../about/page'
import MarqueeComponent from '@/components/Marquee/Marquee'
import MySkills from '@/components/Skills/MySkills'

const Encapsulation = () => {
  return (
    <div  >
        <HomeScreen/>
        <MarqueeComponent/>
        <AboutPage/>
        <MySkills/>
        <br/><br/><br/>
    </div>
  )
}

export default Encapsulation