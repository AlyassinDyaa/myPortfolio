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
				<h2 style={{fontSize: 25}}>Title of section 1</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
				<a href="#0" class="btn-head">Read more</a>
				<span class="cd-date">Jan 14</span>
			</div> 
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie"/>
			</div>

			<div class="cd-timeline-content">
				<h2 style={{fontSize: 25}}>Title of section 1</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
				<a href="#0" class="btn-head">Read more</a>
				<span class="cd-date">Jan 18</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
			</div>

			<div class="cd-timeline-content">
				<h2 style={{fontSize: 25}}>Title of section 1</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
				<a href="#0" class="btn-head">Read more</a>
				<span class="cd-date">Jan 24</span>
			</div> 
		</div> 
		
	

	
	</section> 
    </div>
  )
}

export default time
