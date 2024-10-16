import React from "react";
import { FaLongArrowAltRight } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="faq">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 lg:leading-snug ">
            Pellentesque sescipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">Get a Demo<FaLongArrowAltRight className="inline-block ml-2"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
