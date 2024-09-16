import HomeScreen from '@/components/Homescreen/HomeScreen'
import React from 'react'
import '../../styles/common.css'
import AboutPage from '../about/page'
import MarqueeComponent from '@/components/Marquee/Marquee'

const Encapsulation = () => {
  return (
    <div  >
        <HomeScreen/>
        <MarqueeComponent/>
    </div>
  )
}

export default Encapsulation