import React from "react";
import Footer from "../Footer";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialForm from "./TestimonialForm";

const Testimonial = () => {
  return (
    <>
      <main>
        <TestimonialSlider />
        <TestimonialForm />
      </main>
      <Footer />
    </>
  );
};

export default Testimonial;
