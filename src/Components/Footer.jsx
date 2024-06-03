import React from 'react'

function Footer() {
  return (
    <div className='footer'>

        <div className="footer-div1">
          <h3>Top companies choose Udemy Business to build in-demand career skills.</h3>
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
        </div>

        <div className="footer-div2">
          <div className='footer-div2-container'>
            <div className="footer-div2-boxes">
              <li>Udemy Business</li>
              <li>Teach on Udemy</li>
              <li>Get the app</li>
              <li>About us</li>
              <li>Contact us</li>
            </div>

            <div className="footer-div2-boxes">
                <li>Careers</li>
                <li>Blog</li>
                <li>Help and Support</li>
                <li>Affiliate</li>
                <li>Investors</li>
            </div>


            <div className="footer-div2-boxes">
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Sitemap</li>
                <li>Accessibility statement</li> 
            </div>

          </div>

          <div className='footer-div2-container'>
            <div>
              <li id='english-btn'> English </li>
            </div>
          </div>

        </div>

      
      <p> <img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="" /> 
          <span id='last'>© 2024 Udemy, Inc.</span>
      </p>
    </div>
  )
}

export default Footer