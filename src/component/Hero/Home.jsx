import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"


const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PAGE</h3>
            <h1>
              Hi, I’m <span>Julian Dominguez</span>
            </h1>
            

            <p>I create both web sites and applications, as well as solutions for problems that may arise in them.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                    <a href="https://www.facebook.com/Julipdominguez/" target="_blank">
                  <button className='btn_shadow'>
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  </a>
                  <a href="https://www.instagram.com/_juliandom/">
                  <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                  </a>
                  <a href="https://www.linkedin.com/in/julian-pablo-dominguez-b143151a2/?locale=en_US">
                  <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
