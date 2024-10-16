import React from 'react'
import productImg from "../assets/products logo/1.png";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { SiTesla } from "react-icons/si";

const Products = () => {
  return (
    <div>
    {/* about text */}
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={productImg} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            How to design your site footer like we did
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
          Donec blandit placerat ante, eget vestibulum quam vulputate in. Maecenas purus urna, tristique porttitor lectus id, efficitur malesuada felis. Nulla convallis in turpis eu aliquam. Nulla et commodo lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id augue sit amet tellus maximus blandit. Donec at pharetra lorem. Suspendisse dictum laoreet malesuada. Nam cursus nibh nec massa ultrices interdum. Vivamus suscipit ultricies turpis eu fringilla. Vestibulum et massa at nulla accumsan consequat. Pellentesque blandit quis lacus sed vestibulum.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
    </div>

    {/* company stats */}
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/3">
        <SiTesla className='h-60 w-80'/>
 </div>

        {/* stats */}
        <div className="md:w-2/3 max-auto">
        <div className="">
          <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
          Quisque bibendum tortor ligula. Phasellus pellentesque ut felis vitae auctor. Aenean aliquam interdum diam id maximus. Suspendisse feugiat sapien non purus blandit, et lobortis nulla vulputate. Praesent fringilla justo ut turpis maximus viverra. Nulla risus magna, eleifend sit amet iaculis nec, fermentum at orci. Nullam id elit urna. Sed vitae velit et tellus egestas interdum. Vestibulum facilisis ipsum sed euismod gravida. In porta nulla est, et sollicitudin nibh condimentum a. Cras quis mauris sit amet ligula venenatis pharetra. Curabitur et turpis pharetra, facilisis risus vitae, maximus justo. Phasellus odio sem, convallis tincidunt pharetra eget, hendrerit id odio. Nunc porta dictum mauris, ut egestas odio rhoncus sit amet.
          </p>
          <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
          <p className="text-base text-neutralGrey mb-8">British Dragon Boat Racing Association</p>
          <div className="">
            <div className="flex items-center gap-8 flex-wrap">
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
          <div className="flex items-center gap-8">
            <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers <FaLongArrowAltRight className='inline-block ml-2'/></a>
          </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products