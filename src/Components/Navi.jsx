import React from 'react'

function Navi() {
  return (
    <div className='navi'>
        <div id='bar'>
          <i class="fa-solid fa-bars"></i>
          <div className='bar-content'>
            {/* <div className="inside-bar-links"> */}
            <div id='b1'>
              <a  >Categories </a>
             <div className="categories-content">
            <li>Development</li>
            <li>Business</li>
            <li>Finance & Accounting</li>
            <li>It & Software</li>
            <li>Office Productivity</li>
            <li>Personal Development</li>
            <li>Design</li>
              </div>
              </div>
              <a href="" id='b2'>Plans & Pricing</a>
              <a href="" id='b3'>Udemy Business</a>
              <a href='' id='b4'>Teach on Udemy</a>
              <a href="" >Login</a>
              <a href="">SignUp</a>
            {/* </div> */}
          </div>
        </div>
        <div><img id='udemy-img' src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="" /></div>
        <div id="categories">
          <a href="" >Categories</a>
          <div className="categories-content">
            <div className='categories-content-develop'>
            <li>Development</li>
            <div className='categories-content-develop-data'>
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Mobile Development</li>
              <li>Programing Languages</li>
              <li>Game Development</li>
              <li>Software Testing</li>
            </div>

            </div>

            <li>Business</li>
            <li>Finance & Accounting</li>
            <li>It & Software</li>
            <li>Office Productivity</li>
            <li>Personal Development</li>
            <li>Design</li>
            
          </div>
        
        </div>
        <div className="search-div">
           
            <i  id="search-icon" class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search for Anaything'/>
        </div>
        <div id='plans'><a href="">Plans & Pricing</a></div>
        <div id='business'><a href="">Udemy Business</a>
            <div id='business-popup'>
              <h2>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</h2>
              <br />
              <p>Try Udemy Business</p>
            </div>
            
        </div>
        <div id='business'><a href="">Teach on Udemy</a>
            <div id='business-popup'>
              <h2>Turn what you know in to an opportunity and reach millions around the world.</h2>
              <br />
              <p>Learn more</p>
            </div>
            
        </div>
        
        <div id='cart-icon' ><i  className="fa-solid fa-cart-shopping"></i>
            <div className="cart-block">
                <p>Your Cart is Empty <br /><br />
                    <span><b>Keep Shoping</b></span>
                </p>
            </div>
        </div>
        <div className="login"><a href="" >Login</a></div>
        <div className="signUp"><a href="" >SignUp</a></div>
        <div id="world-icon"><i className="fa-solid fa-globe"></i></div>   
    </div>
  )
}

export default Navi