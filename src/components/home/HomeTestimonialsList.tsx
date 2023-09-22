import React from "react";
import Testimonials from "../../mocks/testimonials.json";
import HomeTestimonialsCard from "./HomeTestimonialsCard";

function HomeTestimonialsList() {
  return (
    <div className="relative lg:grid grid-cols-4 gap-4 flex overflow-x-scroll">
      {Testimonials.map((testimonial) => (
        <HomeTestimonialsCard data={testimonial} key={testimonial.id} />
      ))}
    </div>
  );
}

export default HomeTestimonialsList;
