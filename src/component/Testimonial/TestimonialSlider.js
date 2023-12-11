import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import client1 from '../img/cliet1.jpg'
import client2 from '../img/client2.jpg'
import client3 from '../img/client3.jpg'
const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div className="container-xl">
  <div className="row" style={{marginTop: '126px'}}>
    <div className="col-lg-8 mx-auto">
      <h2>Testimonials</h2>
      <h6 style={{textAlign: 'center'}}>Our clients Feedback for us..</h6>
      <br></br>
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-aos={"flip-left"} data-aos-easing={"linear"}
        data-aos-duration={"1500"}>
        {/* <!-- Carousel indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        {/* <!-- Wrapper for carousel items --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-box">
              <img src={client1} alt="" />
            </div>
            <p className="testimonial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
              dapibus nec turpis vel, semper malesuada ante. Idac bibendum
              scelerisque non non purus. Suspendisse varius nibh non
              aliquet.
            </p>
            <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src={client2} alt="" />
            </div>
            <p className="testimonial">
              Vestibulum quis quam ut magna consequat faucibus. Pellentesque
              eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
              Pellentesque viverra sagittis quam at mattis. Suspendisse
              potenti. Aliquam sit amet gravida nibh, facilisis gravida
              odio.
            </p>
            <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src={client3} alt="" />
            </div>
            <p className="testimonial">
              Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
              id lacinia. Etiam faucibus mauris id tempor egestas. Duis
              luctus turpis at accumsan tincidunt. Phasellus risus risus,
              volutpat vel tellus ac, tincidunt fringilla massa. Etiam
              hendrerit dolor eget rutrum.
            </p>
            <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
          </div>
        </div>
        {/* <!-- Carousel controls --> */}
        <Link
          className="carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </Link>
        <Link
          className="carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </Link>
      </div>
    </div>
  </div>
</div></>
  )
}

export default TestimonialSlider