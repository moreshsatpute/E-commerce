import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const slides = [
  {
    title: "Payments tool for software companies",
    description: "From checkout to global sales tax compliance.",
    imgSrc: "https://cdn.pixabay.com/photo/2015/01/20/12/51/ipad-605420_1280.jpg",
    cta1: { text: "Get Started", link: "/" },
    cta2: { text: "Speak to Sales", link: "/speak-to-sales" },
  },
  {
    title: "A Complete Payment Solution",
    description: "Manage your business with a fully integrated payment system.",
    imgSrc: "https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg",
    cta1: { text: "Learn More", link: "/" },
    cta2: { text: "Contact Us", link: "/contact" },
  },
  {
    title: "Streamline Your Payments",
    description: "Optimize your payment process for efficiency.",
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    cta1: { text: "Discover More", link: "/" },
    cta2: { text: "Get in Touch", link: "/contact" },
  },
  {
    title: "Global Payment Solutions",
    description: "Expand your business with global payment capabilities.",
    imgSrc: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    cta1: { text: "Start Now", link: "/" },
    cta2: { text: "Learn How", link: "/learn" },
  },
];

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center">
              <div className="border-2 border-gray-300 rounded-lg m-2" style={{ height: "250px", width: "90%" }}>
                <div className="grid lg:grid-cols-2 items-center h-full">
                  <div className="mr-auto lg:col-span-1 p-4">
                    <h1 className="text-xl font-extrabold mb-2 tracking-tight dark:text-white">{slide.title}</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{slide.description}</p>
                    <div className="mt-2">
                      <Link to={slide.cta1.link} className="px-3 py-1 mr-2 text-white bg-primary-700 rounded-lg hover:bg-primary-800 text-sm">
                        {slide.cta1.text}
                      </Link>
                      <Link to={slide.cta2.link} className="px-3 py-1 text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 text-sm">
                        {slide.cta2.text}
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <img src={slide.imgSrc} alt="mockup" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
