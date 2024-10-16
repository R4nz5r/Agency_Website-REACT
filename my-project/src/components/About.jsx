import React from "react";
import aboutImg from "../assets/about logo/1.png";

const About = () => {
  return (
    <div id="about">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years of Pixelrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              voluptatum molestiae vitae ea voluptatibus, ipsum cumque
              repudiandae necessitatibus, consequuntur incidunt porro? Vero amet
              ad sapiente, similique aliquid unde quia cumque!
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itseft
              </span>
            </h2>
            <p className="">We reached here with our hard and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20"
                  src="src/assets/service logo/1.png"
                  alt=""
                />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,244,321
                  </h4>
                  <p className="">Members</p>
                </div>
              </div>
             
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20"
                  src="src/assets/service logo/3.png"
                  alt=""
                />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    44,333
                  </h4>
                  <p className="">Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20"
                  src="src/assets/about logo/event.png"
                  alt=""
                />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    444,321
                  </h4>
                  <p className="">Event Bookings</p>
                </div>
              </div>
           
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20"
                  src="src/assets/about logo/payment.png"
                  alt=""
                />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,244,321
                  </h4>
                  <p className="">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
