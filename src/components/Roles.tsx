import React from 'react'
import aiengineer from '../assets/rolesimages/aiengineer.png'
import data from '../assets/rolesimages/data.png'
import softwareeng from '../assets/rolesimages/software.png'
import qa from '../assets/rolesimages/qa.png'
import vector3 from '../assets/rolesimages/Vector.png'
import halfelipse from '../assets/halfelipse.png'
const Roles = () => {
  return (
    <div>
          <div>
          <div className='mt-[1880px] flex gap-10 justify-center relative'>
            <img src={qa} className='' alt="" />
            <img src={softwareeng} className='-ml-[100px] m  w-[365px] h-[261px]' alt="" />
            <img src={data} alt="" className='w-[359px] h-[225px]'/>
            <img src={aiengineer} className='w-[294px] h-[311px]' alt="" />

        </div>
        <div>
          <img src={vector3} className='absolute -mt-[300px] -z-10' alt="" />
        </div>
        <div>
            <img src={halfelipse} className='absolute -mt-[100px]' alt="" />
        </div>
      </div>
      <div className='w-[1530px] h-[935px]' style={{ background: 'linear-gradient(195.65deg, #0196F9 15.35%, #2B95ED 28.04%, rgba(20, 203, 213, 0.7) 83.04%)' }}>
        <p className='text-center mt-[200px] absolute text-[50px] ml-[30%] font-[500] text-white'>And our students agree . . .</p>
      <div className="w-[603px] h-[307px] bg-white absolute mt-[400px] ml-[30%]  rounded-[25px] shadow-lg flex flex-col items-center text-center">
      {/* Paragraph */}
      <img
        className="w-[88px] h-[88px] rounded-full border-4 border-gray-200 -mt-[50px]"
        src="https://via.placeholder.com/120"
        alt="Person"
      />
      <p className="text-[#393939] text-[18px] font-sans font-[500] mt-6 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      {/* Image */}
      

      {/* Name */}
      <p className="text-[26px] font-[500] text-[#1C408E] mb-2">John Doe</p>

      {/* Position */}
      <p className="text-[#1C408E] text-[12px]">Software Engineer</p>
    </div>
   
    
</div>

    </div>
  )
}

export default Roles