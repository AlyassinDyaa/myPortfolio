import React from 'react';
import "./work.css";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import IMG1 from "../../Assets/portfolio1.png";
import IMG2 from "../../Assets/portfolio2.png";
import IMG3 from "../../Assets/rest.png";
import IMG4 from "../../Assets/meta.png";
import IMG5 from "../../Assets/netclone.png";
import IMG6 from "../../Assets/fitness1.png";
import IMG7 from "../../Assets/unovaFit.png";
import IMG8 from "../../Assets/portfolio3.png";

const cardsData = [
  {
    title: "Portfolio 1",
    imageSrc: IMG1,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "Portfolio 2",
    imageSrc: IMG2,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "Portfolio 3",
    imageSrc: IMG8,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "Restaurant",
    imageSrc: IMG3,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "MetaWorld",
    imageSrc: IMG4,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "NetClone",
    imageSrc: IMG5,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "UNOVA Fit",
    imageSrc: IMG7,
    links: {
      demo: "",
      github: ""
    }
  },
  {
    title: "Fitness",
    imageSrc: IMG6,
    links: {
      demo: "",
      github: ""
    }
  },
  // add more objects as needed
];

function Card({ title, imageSrc, links }) {
  return (
    <div className='card-container'>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title" style={{fontSize: "large"}}>{title}</p>
            <p>Hover Me</p>
            <img src={imageSrc} alt="card" className="img" />
          </div>
          <div className="flip-card-back">
            <p className="title">Links</p>
            <p>Leave Me</p>
            <div className="comp">
              <div className="container__links">
                <div className="container__eye">
                  <h1>DEMO</h1>
                  <a href={links.demo} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                </div>

                <div className="container__git">
                  <h1>GITHUB</h1>
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <>
    <div className='container__work'>
      <h1 className='container__work-title'> WORK </h1>
      <h2 className='container__work-sub'> See Demos belows</h2>
    </div>


      <div className="work">
        {cardsData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            imageSrc={card.imageSrc}
            links={card.links}
          />
        ))}
      </div>

    </>
  );
}

export default Work;