import React from 'react';
import Footer from './Footer';
import about from './img/about.jpg';


const About = () => {
  return (
  <>
   <main>
      <div className="about-us-image">
        <img src={about} alt="aboutus-image" />
        <div className="heading-over-img">
          <h2>About Us</h2>
        </div>
        <div className="pera-over-img">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            saepe blanditiis in maxime asperiores possimus laboriosam odit ut
            quaerat eos accusantium animi, alias voluptates dolores officia eum
            repudiandae? Sapiente, qui!
          </p>
          <button type="button" className="btn btn-primary">More Info</button>
        </div>
        
      
      </div>
    </main>
    <Footer/>
  </>

  )
}

export default About