import React from 'react'
import "./work.css"
import {motion} from "framer-motion"
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


import IMG1 from "../../Assets/portfolio1.png";
import IMG2 from "../../Assets/portfolio2.png";
import IMG3 from "../../Assets/rest.png";
import IMG4 from "../../Assets/meta.png";
import IMG5 from "../../Assets/netclone.png";
import IMG6 from "../../Assets/about01.png";
import IMG7 from "../../Assets/unovaFit.png";

const work = () => {
  return (
    <div id='work' className='container__work' >
  
       

          <div id="carousel" class="carousel">

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">Portfolio 1</p>
                    <p>Hover Me</p>
                    <img src={IMG1} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={"https://alyassinprotfolio1.netlify.app"} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={"https://github.com/AlyassinDyaa/portfolio1"} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>

{/********************* 2 *********************/}
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">Portfolio 2</p>
                    <p>Hover Me</p>
                    <img src={IMG2} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={"https://alyassinportfolio2.netlify.app"} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={"https://github.com/AlyassinDyaa/portfolio2"} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
{/******************************************/}



{/******************** 3 **********************/}
<div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title"> Restaurant </p>
                    <p>Hover Me</p>
                    <img src={IMG3} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={"https://alyassinrest.netlify.app"} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={"https://github.com/AlyassinDyaa/restauarntGh"} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
{/******************************************/}




{/********************* 4 *********************/}
<div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title"> METAWORLD</p>
                    <p>Hover Me</p>
                    <img src={IMG4} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={""} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={"https://github.com/AlyassinDyaa/metaWorld"} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
{/******************************************/}



{/********************* 5 *********************/}
<div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title"> NETClone</p>
                    <p>Hover Me</p>
                    <img src={IMG5} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={"https://alyassinnetflix.netlify.app"} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={""} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
{/******************************************/}


{/********************* 6 *********************/}
<div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title"> Fitness</p>
                    <p>Hover Me</p>
                    <img src={IMG6} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={""} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={""} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
{/******************************************/}



{/********************* 7 *********************/}
<div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title"> UNOVA Fit</p>
                    <p>Hover Me</p>
                    <img src={IMG7} 
                    alt='img1'
                    placeholder='w1' 
                    className='img'/>
                  </div>


                  <div class="flip-card-back">
                    <p class="title">Links</p>
                    <p>Leave Me</p>

                    <div className="comp" >
                          <div className="container__links">

                            <div className='container__eye'>
                                <h1> DEMO</h1>
                                <a href={"https://play.google.com/store/apps/details?id=com.unova_fit"} target="_blank" rel="noreferrer">
                                <motion.div
                                  whileInView={{ scale: [0, 1] }}
                                  whileHover={{ scale: [1, 0.90] }}
                                  transition={{ duration: 0.25 }}>
                                  <AiFillEye />
                                </motion.div>
                              </a>
                            </div>
                            
                            <div className='container__git'>
                                <h1> GITHUB</h1>
                                <a href={"https://play.google.com/store/apps/details?id=com.unova_fit"} target="_blank" rel="noreferrer">
                                  <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}>
                                    <AiFillGithub />
                                  </motion.div>
                              </a>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
{/******************************************/}


      </div>
            

      
    </div>
  )
}

export default work
