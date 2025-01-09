import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'

// Import images for the image slider
import image1 from "../../assets/ima.png";
import image2 from "../../assets/sc2.png";
import image3 from "../../assets/sc1.png";

// Import images for the gallery
import ac1 from "../../assets/ac1.png";
import ac2 from "../../assets/ac2.png";
import ac3 from "../../assets/ac3.png";
import Footer from "./footer/Footer";

const images = [image1, image2, image3];


function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleGalleryItems, setVisibleGalleryItems] = useState([]);

  // Slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
      if (isElementInView(item)) {
        setVisibleGalleryItems(prev => [...prev, index]);
      }
    });
  };

  const isElementInView = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );



  return (
    <div className="homepage">
      {/* Main Content */}
      <main className="main-content mt-16 text-center px-5 py-10 bg-gray-100">
        {/* Welcome Section */}
        <section className="welcome-section ">
          <h2 className="text-2xl font-bold text-blue-900">Welcome to KodeBloom</h2>
          <p className="my-4 text-gray-700">
            Manage your school activities efficiently with our easy-to-use platform.
          </p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">
            Learn More
          </button>
        </section>

        <div className="main-container flex justify-between items-start gap-5 mt-10">
          {/* Image Slider */}
          <div className="image-slider flex-1 max-w-2xl relative overflow-hidden rounded-lg shadow-md h-72">
            <div
              className="slides flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              ))}
            </div>
            <div className="slider-dots text-center mt-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-2.5 h-2.5 mx-1 bg-gray-300 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-blue-900" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>

          {/* Announcement Section */}
          <div className="announcement-section flex-none w-1/3 bg-blue-900 text-white rounded-lg p-5 h-72">
            <h3 className="text-xl font-semibold pb-4">Announcements</h3>
            <div className="announcement-box overflow-hidden h-56 ">
              <ul className="announcement-list space-y-3 animate-scroll">
                <li>
                  <Link to="/admissions" className="hover:text-blue-300">
                    Admissions open for 2024!
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-blue-300">
                    Parent-teacher meeting on Dec 5, 2024
                  </Link>
                </li>
                <li>
                  <Link to="/annual-day" className="hover:text-blue-300">
                    Annual Day celebration: Dec 20, 2024
                  </Link>
                </li>
                <li>
                  <Link to="/holidays" className="hover:text-blue-300">
                    Upcoming Holidays
                  </Link>
                </li>
                <li>
                  <Link to="/exam-schedule" className="hover:text-blue-300">
                    Examination Schedule Released
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Running News Section */}
        <section className="news-section bg-blue-900 text-white border-t border-gray-200 py-2 relative overflow-hidden">
          <div className="news-container whitespace-nowrap absolute w-full animate-scroll-text">
            <p className="news-text inline-block font-semibold ">
              Important News: Admissions are open for 2024! | Parent-teacher meeting scheduled for December 5th, 2024. |
              School's Annual Day celebration on December 20th, 2024.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services text-center">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="service-boxes flex mx-[5%] justify-center gap-5">
            <div className="service-box flex-1 bg-gray-200 border border-gray-300 px-4 py-6 h-44">
              Service 1
            </div>
            <div className="service-box flex-1 bg-gray-200 border border-gray-300 px-4 py-6 h-44">
              Service 2
            </div>
            <div className="service-box flex-1 bg-gray-200 border border-gray-300 px-4 py-6 h-44">
              Service 3
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section mt-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Gallery</h2>
          <div className="gallery-container flex flex-wrap justify-center gap-5">
            {[ac1, ac2, ac3].map((src, index) => (
              <div
                key={index}
                className={`gallery-item w-1/4 opacity-0 transform scale-90 transition duration-300 ${
                  visibleGalleryItems.includes(index) ? "opacity-100 scale-100" : ""
                }`}
              >
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 rounded-lg shadow-md cursor-pointer hover:scale-110 duration-300 ease-linear " />
              </div>
            ))}
          </div>
        </section>

        <Link to="/enquiry">
          <button className="fixed bottom-5 right-5 bg-yellow-300 text-purple-900 font-bold px-5 py-2 rounded hover:bg-yellow-400">
            Enquire Now
          </button>
        </Link>
      </main>

    {/* Footer component */}
      <Footer />
    
    </div>
  );
}

export default Home;
