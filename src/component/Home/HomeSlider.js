import React from 'react'
import {Link} from 'react-router-dom'
import carousal1 from '../img/1carousal.jpg'
import carousal2 from '../img/2carousal.jpg'
import carousal3 from '../img/3carousal.jpg'
const HomeSlider = () => {
  return (
    <>
      <slider>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item slids active">
              <img
                className="d-block w-100"
                src={carousal1}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={carousal2}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={carousal3}
                alt="Third slide"
              />
            </div>
          </div>
          <Link
            className="carousel-control-prev"
            to="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            to="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </slider></>
  )
}

export default HomeSlider