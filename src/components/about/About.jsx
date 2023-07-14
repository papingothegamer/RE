import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to our Housing Agency!</p>
<p>At our agency, we are passionate about helping you find your dream home. With years of experience and a dedicated team of professionals, we are committed to providing exceptional service and making your housing journey a seamless and enjoyable one.</p>
<p>At the heart of our agency is a deep understanding that finding the perfect home is about more than just four walls and a roof. It's about creating a space where memories are made, where families grow, and where dreams come true. That's why we go above and beyond to match you with a property that meets your unique needs, preferences, and lifestyle.</p>
<p>Our extensive property database is carefully curated to offer a wide range of options, from cozy apartments in bustling urban centers to spacious family homes in tranquil suburban neighborhoods. Whatever your vision of a perfect home is, we strive to turn it into a reality.</p>
<p>When you choose our agency, you gain access to a team of dedicated professionals who are passionate about real estate. Our experienced agents are not just knowledgeable about the local market trends and property values, but also have a keen eye for detail, helping you discover hidden gems and potential investment opportunities.</p>
<p>From the moment you step into our office or visit our user-friendly website, you will experience our commitment to exceptional customer service. Our friendly staff is here to listen to your needs, answer your questions, and guide you through every step of the process. We believe that buying, selling, or renting a property should be an exciting and stress-free experience, and we are here to make that happen.</p>
<p>As a full-service agency, we offer a range of services beyond property transactions. Whether you need assistance with property management, investment advice, or legal guidance, we have the expertise and resources to support you every step of the way.</p>
<p>We understand that finding a home is a personal journey, and we are honored to be a part of it. Trust us to be your reliable partner in your housing endeavors, and let us help you find a place you'll love to call home.</p>
<p>Get in touch with our agency today, and let's embark on this exciting housing adventure together!</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About