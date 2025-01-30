
import React from 'react'
import Slider from './components/landingPage/smallScreen/scroller'
import SmallScreen from './components/landingPage/smallScreen/smallScreen'
import Sales from './components/landingPage/smallScreen/sales'
import Footer from './components/landingPage/smallScreen/footer'


const Page:React.FC = async () => {
    
    return (
    <div className='relative z-0'>
        {/* FOR SMALL SCREEN */}
        <div className=''>
            <SmallScreen/>
            <Slider/>
            <Sales/>
            <Footer/>
        </div>
        {/* {FOR MEDIUM SCREEN} */}

        {/* {FOR LARGE SCREEN} */}

       
    </div>
   )
}

export default Page