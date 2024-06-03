import React from 'react'
import organizations from '../Assets/organizations-2.png'
import emptyState from '../Assets/empty-state-1.png'
import handsOnPractice from '../Assets/hands-on-practice.png'
import certificate from '../Assets/certificate.png'
function Section2() {
  return (
    <div className='section-2'>
        {/* <div className='img-logos'>
          <img src="" alt="1" />
          <img src="" alt="2" />
          <img src="" alt="3" />
          <img src="" alt="4" />
          <img src="" alt="5" />
          <img src="" alt="6" />
          <img src="" alt="7" />
          <img src="" alt="8" />
        </div> */}
            <h1>
                Learning focused on your goals
            </h1>
            <br />
            <div className="divide">
                <div className='goals'>
                    <div className="goals-content">
                        <div>
                          <img src={handsOnPractice} alt="" />
                        </div>
                        <div>
                          <h3>Hands-on training</h3><br />
                          <p> Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.</p>
                        </div>
                    </div>
                    <div className="goals-content">
                        <div>
                          <img src={certificate} alt="" />
                        </div>
                        <div>
                          <h3>Certification prep</h3><br />
                          <p>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</p>
                        </div>
                    </div>
                    <div className="goals-content">
                        <div>
                          <img src={emptyState} alt="" />
                        </div>
                        <div>
                          <h3>Insights and analytics</h3><br />
                          <p>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
                        </div>
                    </div>
                    <div className="goals-content">
                        <div>
                          <img src={organizations} alt="" />
                        </div>
                        <div>
                          <h3>Customizable content</h3><br />
                          <p>Create tailored learning paths for team and organization goals and even host your own content and resources.</p>
                        </div>
                     </div>
                </div>

                <div className='goal-img'>
                    <img src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png" alt="" />
                </div>
            </div>

        </div>
  )
}

export default Section2