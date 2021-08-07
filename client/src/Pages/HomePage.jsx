import React,{useEffect} from 'react';
import AllApartments from '../components/AllApartments';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LocationSection from '../components/LocationSection';


function HomePage() {

useEffect(() => {
  handleScrollPosition();
  document.title="SuCasa | Home"
}, []);

//function to maintain scroll position of productList on the HomePage
const handleScrollPosition = () => {
  const scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition));
    sessionStorage.removeItem("scrollPosition");
  }
};

//click event passed to view button on product card on Homepage
const handleClick = (e) => {
  sessionStorage.setItem("scrollPosition", window.pageYOffset);
};

    return (
      <div>
          <Hero />
        <LocationSection />
        <AllApartments handleClick={handleClick}/>
        <Footer/>
      </div>
    );
}

export default HomePage;
