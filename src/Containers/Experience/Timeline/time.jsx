import React from 'react'
import "./time.css"


const time = () => {
  return (
    <div>
      <header>
		<h1 style={{fontSize: 70, padding: "2rem"}}>EXPERIENCE TIMELINE </h1>
	</header>

	<section id="cd-timeline" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
			</div> 

			<div class="cd-timeline-content">
				<h2 style={{fontSize: 25}}>Network Engineer Intern</h2>
				<h3>LSI Computers</h3>
                <p>Trained in the fundamentals of networking which including configuration of Virtual CISCO devices using Packet Tracer
                    Gained hands-on experience with industry-standard networking tools and protocols, such as TCP/IP and OSPF.
                        Assisted in the maintenance and upgrading of network software and hardware. Assisted in the documentation of network diagrams, configurations, and procedures.</p>
				<a href="https://lsicomputers.com/" class="btn-head">MORE</a>
				<span class="cd-date">07/2022 - 10/2022</span>
			</div> 
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
			</div>

			<div class="cd-timeline-content">
				<h2 style={{fontSize: 25}}>Front End Developer</h2>
                <h3>Stack Technologies</h3>
				<p>Utilized JavaScript libraries and frameworks such as React, Angular, and Vue.js to build efficient and reusable components.
                        Developed interactive components using HTML/CSS/JavaScript and increased page speed performance by 50% on all sites.
                        Optimized user experience for several web pages with intuitive navigation & visual design enhancements, improving customer engagement by 20%
                        Utilized CSS preprocessors such as SASS and LESS to improve the maintainability and scalability of code.</p>
				<a href="https://www.facebook.com/StackTechnology.jo" class="btn-head">MORE</a>
				<span class="cd-date">08/2020 - 06/2022</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
			</div>

			<div class="cd-timeline-content">
				<h2 style={{fontSize: 25}}>Mobile Application Developer</h2>
                <h3>UNOVA Solutions</h3>
				<p>Creating simple interactive Mobile Applications using cross platform system.
                    UI/UX development
                    Creating and implementing the source code
                    Testing source code and debugging code.
                    Evaluating existing applications and performing updates and modifications. Developing technical handbooks to represent the design and code of new applications.</p>
				<a href="https://play.google.com/store/apps/developer?id=Deviant+Solutions+Agency" class="btn-head">MORE</a>
				<span class="cd-date">06/2018 - 07/2020</span>
			</div> 
		</div> 
		
	

	
	</section> 
    </div>
  )
}

export default time
