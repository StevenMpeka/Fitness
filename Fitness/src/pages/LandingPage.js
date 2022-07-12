import React from 'react'
import Navbar from '../components/Navbar'
import Categories from './Categories'
import Slider from './Slider'
import Newsletter from './Newsletter'
import Footer from '../components/Footer'


const LandingPage = () => {
    return (
        <div>
        {/* <Navbar /> */}
        <Slider />
        <Categories />
        <Newsletter/>
        {/* <Footer/> */}
        </div>
    )
}

export default LandingPage
