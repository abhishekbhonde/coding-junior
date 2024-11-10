import React from 'react';
import graduation from '../assets/landing Page2/Graduation Invitation.png';
import imagegenerator from '../assets/landing Page2/imgaegenerate.png';
import image13 from '../assets/landing Page2/image 13.png'
import kindle from '../assets/landing Page2/Kindle.png'
import OpenBook from '../assets/landing Page2/Open Book.png'
import StopMotion from '../assets/landing Page2/Stop Motion Studio.png'
const Feature = () => {
  return (
    <div className="bg-gradient-to-r from-[#2B95ED] to-[#185587] py-12">
      <div className=" mb-10">
        <p className="text-white ml-[170px] mt-[30px] text-[50px] font-semibold">What sets us apart?</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="w-[372px] h-[280px] bg-white rounded-[16px] shadow-lg p-6 text-left">
          <img className="w-[138px] h-[138px] -ml-[20px] mb-4" src={graduation} alt="Graduation" />
          <p className="font-sans text-[#2B95ED] font-semibold text-[24px] mb-2">Created by IIT-IIM Alumni</p>
          <p className="text-[15px] font-[500] font-sans font-normal mb-2">
            We’ve learnt from the best and strive to bring you the best.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[372px] h-[280px] bg-white rounded-[16px] shadow-lg p-6 text-left">
          <img className="w-[138px] h-[138px] -ml-[20px] mb-4" src={imagegenerator} alt="Graduation" />
          <p className="font-sans text-[#2B95ED] font-semibold text-[24px] mb-2">Created by IIT-IIM Alumni</p>
          <p className="text-[15px] font-[500] font-sans font-normal mb-2">
            We’ve learnt from the best and strive to bring you the best.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[372px] h-[280px] bg-white rounded-[16px] shadow-lg p-6 text-left">
          <img className="w-[138px] h-[138px] -ml-[20px] mb-4" src={image13} alt="Graduation" />
          <p className="font-sans text-[#2B95ED] font-semibold text-[24px] mb-2">Created by IIT-IIM Alumni</p>
          <p className="text-[15px] font-[500] font-sans font-normal mb-2">
            We’ve learnt from the best and strive to bring you the best.
          </p>
        </div>

        {/* Card 4 */}
        <div className="w-[372px] h-[280px] bg-white rounded-[16px] shadow-lg p-6 text-left">
          <img className="w-[138px] h-[129px] mb-4" src={OpenBook} alt="Graduation" />
          <p className="font-sans text-[#2B95ED] font-semibold text-[24px] mb-2">Created by IIT-IIM Alumni</p>
          <p className="text-[15px] font-[500] font-sans font-normal mb-2">
            We’ve learnt from the best and strive to bring you the best.
          </p>
        </div>

        {/* Card 5 */}
        <div className="w-[372px] h-[280px] bg-white rounded-[16px] shadow-lg p-6 text-left">
          <img className="w-[138px] h-[138px]  mb-4" src={StopMotion} alt="Graduation" />
          <p className="font-sans text-[#2B95ED] font-semibold text-[24px] mb-2">Created by IIT-IIM Alumni</p>
          <p className="text-[15px] font-[500] font-sans font-normal mb-2">
            We’ve learnt from the best and strive to bring you the best.
          </p>
        </div>

        {/* Card 6 */}
        <div className="w-[372px] h-[280px] bg-white rounded-[16px] shadow-lg p-6 text-left">
          <img className="w-[138px] h-[138px] -ml-[20px] mb-4" src={kindle} alt="Graduation" />
          <p className="font-sans text-[#2B95ED] font-semibold text-[24px] mb-2">Created by IIT-IIM Alumni</p>
          <p className="text-[15px] font-[500] font-sans font-normal mb-2">
            We’ve learnt from the best and strive to bring you the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
