import React from 'react'

function Article() {
  return (
    <div className='article'>
        <h1>See what others are achieving through learning</h1> <br /><br />
        <div className="article-div1">
            
            <div className="article-div1-box">
                <h1>❛❛</h1>
                <p>Udemy was rated the most popular online course or certification program for learning how to code according to</p>
                <a href="">StackOverflow’s 2023 Developer survey.</a>
                <br /><br />
                <img id='stackOverflow-img' src="https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg" alt="" />
                <p className='light-color'>37,076 responses collected</p>
            </div>
            <div className="article-div1-box">
                <h1>❛❛</h1>
                <p>Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.</p>
                <br /><br />
                <div>
                    <img src="https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg" alt="" />
                    <p className='light-color'>Alvin Lim <br />Technical Co-Founder, CTO at <br />Dimensional</p>
                </div>
                
            </div>
            <div className="article-div1-box">
                <h1>❛❛</h1>
                <p>Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.</p>
                <br /><br />
                <div>
                    <img src="https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg" alt="" />
                    <p className='light-color'>William A.  <br />Partner Account Manager at Amazon <br />Web Services
                    </p>
                </div>
            </div>
            <div className="article-div1-box">
                <h1>❛❛</h1>
                <p>With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.</p>
                <br /><br />
                <div>
                    <img src="https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png" alt="" />
                    <p className='light-color'>Ian Stevens <br />Head of Capability Development, <br /> North America at Publicis Sapient</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Article