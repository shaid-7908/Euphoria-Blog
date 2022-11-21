import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
       <div className="footerLeft">
        <h4 className='footerLeftTitle'>Techno Blog.op</h4>
        <p className='footerLeftPara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio. Omnis voluptatum repellendus quae sed ex error laborum dolor autem.</p>
       </div>

       {/*Footer Center  =====================      */}
       <div className="footerCenter">
        <h4 className='footerCenterTitle'>Navigation</h4>
        <ul className='footerMenu'>
            <li className='footerMenueItems'>Home</li>
            <li className='footerMenueItems'>About</li>
            <li className='footerMenueItems'>Contact</li>
            <li className='footerMenueItems'>Write</li>
            <li className='footerMenueItems'>Login</li>
            <li className='footerMenueItems'>Register</li>
        </ul>
    
       </div>
        {/*Footer Right  =====================      */}
       <div className="footerRight">
        <h4 className='footerRightTitle'>Developers</h4>
        <ul className='footerRightDevInfo'>
            <li className='footerRightDevNames'>Shahid</li>
            <li className='footerRightDevNames'>Sayan</li>
            <li className='footerRightDevNames'>Tejodip</li>
            <li className='footerRightDevNames'>Chiranjeev</li>
            <li className='footerRightDevNames'>Ayshik</li>

            </ul> 
       </div>

    </div>
  )
}
