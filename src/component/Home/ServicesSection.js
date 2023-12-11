import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import js from '../img/js.png';
import react from '../img/react.png'
import mongodb from '../img/mongo.webp'
import nodejs from '../img/node.jpg'
import python from '../img/python.jpg'
import django from '../img/django.png'
import vuejs from '../img/vue.png'
import angular from '../img/angular.png'
import flutter from '../img/flutter.png'
import {Link} from 'react-router-dom'

const ServicesSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
       <main>
        <div className="service-heading">
          <span>
            <h1>Our Services</h1>
            <h2>100% Custom Design</h2>
            <h5>We never use pre-made templates. Ever.</h5>
          </span>
        </div>

        <section className="our-services">
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={js}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Java Script</h5>
              <p className="card-text">
                JavaScript is a scripting or programming language that allows
                you to implement complex features on web pages — every time a
                web page does more than just sit there and display static
                information for you to look at..
              </p>
            </div>
            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={react}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">React js</h5>
              <p className="card-text">
                React.js, more commonly known as React, is a free, open-source
                JavaScript library. It works best to build user interfaces by
                combining sections of code (components) into full websites.
                Originally built by Facebook
              </p>
            </div>
            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={mongodb}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">MongoDb</h5>
              <p className="card-text">
                MongoDB’s document model is simple for developers to learn and
                use, while still providing all the capabilities needed to meet
                the most complex requirements at any scale. We provide drivers
                for 10+ languages, and the community has built dozens more.
              </p>
            </div>
            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}> 
            <img
              className="card-img-top"
              src={nodejs}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Node Js</h5>
              <p className="card-text">
                Node.js is an open source server environment Node.js is free
                Node.js runs on various platforms (Windows, Linux, Unix, Mac OS
                X, etc.) Node.js uses JavaScript on the server Node.js can
                generate dynamic page content Node.js can create, open, read,
                write...
              </p>
            </div>

            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={python}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Python</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={django}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Django</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={vuejs}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Vue Js</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={angular}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Angular</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <div className="card" data-aos={"zoom-out-up"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
            <img
              className="card-img-top"
              src={flutter}
              alt="Card img cap"
            />
            <div className="card-body">
              <hr />
              <h5 className="card-title">Flutter</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServicesSection