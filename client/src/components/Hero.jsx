import React from "react";
import mansion from "../assets/nice.jpg";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${mansion})`,
      }}
      className="h-[450px] bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center"
    >
      <div className="">
        <h1 className="text-center text-white text-2xl lg:text-5xl">
          MODERN HOMES FOR SALE
        </h1>
        <div className="w-full lg:flex lg:justify-center ">
          <p className="text-center text-white mt-5 lg:w-6/12 lg:text-xl">
            Welcome to SuCasa, your number one real estate marketplace. Our
            properties each have their own unique design aesthetic, providing an
            aspirational lifestyle within a thriving community, supported by
            SuCasa’s community management team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
