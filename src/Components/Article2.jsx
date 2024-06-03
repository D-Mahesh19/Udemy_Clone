import React from 'react'
import Angledimg from '../Assets/2024_Angled_Trends_report_image.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'

function Article2() {
  return (
    <>
    <div className='article-2'>
        <div className='article-2-div1'>
            <h1>Top trends for the future of work</h1>
            <br />
            <p>GenAI and leadership are at the core of today's skills-based economy. 
                Get the 2024 Global Learning & Skills Trends Report to learn more.
            </p>
            <p id='get-btn'>Get Report ➜</p>
        </div>
        <div className="article-2-div2">
            <img src={Angledimg} alt="" />
        </div>
        <br />
        
     </div>

        <div className="trending">
            <h1>Trending Now</h1>
            <br />
            <p className='line'></p>
            <br />
            <div className="trend-container">
                <div className="trend-contner-box">
                    <h2>ChatGPT is a top skill</h2> <br />
                    <li>See ChatGPT Courses <br /><span className='light-color'>2,842,234 learners</span></li> <br />
                    <p id='show-trend-btn'>Show all trending Skills</p> <br />
                </div>
          
                <div className="trend-contner-box">
                    <h2>Development</h2> <br />
                    <li>Python <br /><span className='light-color'>43,868,186 learners</span></li> <br />
                    <li>Web <br />Development <span className='light-color'> <br />13,004,712 learners</span></li> <br />
                    <li>Data Science <br /><span className='light-color'>7,038,312 learners</span></li> <br />
                </div>
            
            
                <div className="trend-contner-box">
                    <h2>Design</h2> <br />
                    <li>Blender <br /><span className='light-color'>43,868,186 learners</span></li> <br />
                    <li>Graphics Design <br /><span className='light-color'>13,004,712 learners</span></li><br />
                    <li>UX Design <br /><span className='light-color'>7,038,312 learners</span></li><br />
                </div>

                <div className="trend-contner-box">
                    <h2>Business</h2><br />
                    <li>PMI PMP <br /><span className='light-color'>43,868,186 learners</span></li><br />
                    <li>Microsoft Power BI <br /><span className='light-color'>13,004,712 learners</span></li><br />
                    <li>Project Management <br /><span className='light-color'>7,038,312 learners</span></li><br />
                </div>

            </div>    
            
        </div>

       



        <div className='article-3'>
            <div className='a3-container'>
                <p className='big-font'>Booz | Allen | Hamilton</p>
                <br />
                <h3>Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h3>
                <br />

                <div className='a3-inner-container'>
                    <div className='a3-inner-container-box'>
                        <h1>93%</h1>
                        <p className='light-color'>retention rate among participating employees</p>
                    </div>
                    <div className='a3-inner-container-box'>
                        <h1>65%</h1>
                        <p className='light-color'>of learners noted a positive impact on their productivity</p>
                    </div>
                </div>
            </div>

            <div className='a3-container-img'>
                <img src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals" alt="" />
            </div>
        </div>
    </>
  )
}

export default Article2