import React from "react";


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organizations",
      description:
        "our membership management software provides full automation of membership renewal and payments",
      image: "src/assets/service logo/1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "our membership management software provides full automation of membership renewal and payments",
      image: "src/assets/service logo/2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "our membership management software provides full automation of membership renewal and payments",
      image: "src/assets/service logo/3.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* some company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img
            src="src/assets/company logo/1.png"
            alt="Company 1"
            className="h-10"
          />
          <img
            src="src/assets/company logo/2.png"
            alt="Company 2"
            className="h-10"
          />
          <img
            src="src/assets/company logo/3.png"
            alt="Company 3"
            className="h-10"
          />
          <img
            src="src/assets/company logo/4.png"
            alt="Company 4"
            className="h-10"
          />
          <img
            src="src/assets/company logo/5.png"
            alt="Company 5"
            className="h-10"
          />
          <img
            src="src/assets/company logo/6.png"
            alt="Company 6"
            className="h-10"
          />
          <img
            src="src/assets/company logo/7.png"
            alt="Company 7"
            className="h-10"
          />
        </div>
      </div>
      {/* some service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nexxent suitable for?</p>
      </div>
      
      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5e9] h-14 w-14 mb-4 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="-ml-5"
                />
              </div>
              <h4 className="text-2xl text-neutralGrey font-bold mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
