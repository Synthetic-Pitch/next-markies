
import React from 'react'
import Slider from './components/landingPage/smallScreen/scroller'
import SmallScreen from './components/landingPage/smallScreen/smallScreen'
import Sales from './components/landingPage/smallScreen/sales'
import Footer from './components/landingPage/smallScreen/footer'
import MediumScreen from './components/landingPage/mediumScreen/mediumScreen'
import SalesMedium from './components/landingPage/mediumScreen/sales'
import ScrollerLarger from './components/landingPage/mediumScreen/scroller'
import Sales2 from './components/landingPage/mediumScreen/sales2'



const Page:React.FC = async () => {
    
    return (
    <div className='relative z-0 overflow-y-scroll '>

        {/* FOR SMALL SCREEN */}
        <div className='sm:hidden' >
            <SmallScreen/>
            <Slider/>
            <Sales/>
            <Footer/>
        </div>

        {/* {FOR MEDIUM SCREEN} */}
        <div className='relative z-0 hidden sm:block lg:hidden'>
            <MediumScreen/>
            <Slider/>
            <SalesMedium/>
            <Footer/>
        </div>

        {/* {FOR LARGE SCREEN} */}
        <div className='hidden relative z-0 lg:block '>
            <MediumScreen/>
            <ScrollerLarger/>
            <SalesMedium/>
            <Sales2/>
        </div>
    </div>
   )
}

export default Page