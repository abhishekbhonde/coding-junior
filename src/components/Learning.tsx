import line from '../assets/Line 125.png';
import vector from '../assets/Vector.png';
import vector13 from '../assets/Vector 33.png';
import line2 from '../assets/Line 107.png';
import line3 from '../assets/Line 105.png';
import vector43 from '../assets/Vector 43.png';
import group from '../assets/features/Group.png'
import aipng from '../assets/features/_Group_.png'
import resume from '../assets/features/Resume.png'
import group1 from '../assets/features/Vector-1.png'
import group2 from '../assets/features/Vector.png'

const Learning = () => {
  return (
    <div>
      {/* Line */}
      <div className="flex absolute ml-[50%] mt-[370px] justify-center z-10">
        <img src={line} alt="Line" />
      </div>

      {/* Card 1 - Before the Line */}
      <div className="w-[542px] h-[298px] bg-white rounded-[16px] shadow-2xl absolute mt-[450px] ml-[100px] p-6 text-left">
        <div className='bg-[#4ABCAE] w-[86px] h-[86px] rounded-full absolute -mt-[70px] ml-[200px]'>
          <p className='font-normal text-white text-[60px] text-center '>1  </p>
        </div>
        <img src={vector13} className="absolute ml-[330px] -mt-[25px]" alt="Vector 13" />
        <img src={line2} className="absolute ml-[520px] mt-[100px]" alt="Line 2" />
        <div className="flex mt-[50px] gap-2">
          <img className="w-[65px] h-[39px]" src={vector} alt="Graduation" />
          <p className="font-sans text-[#393939] font-normal text-[33px] mb-2">Custom Specialization</p>
        </div>
        <p className="mt-6 text-[15px] w-[451px] font-[500] font-sans font-normal mb-2">
          We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals.
        </p>
      </div>


      {/* Card 3 - After the Line */}
      <div className="w-[542px] h-[298px] bg-white rounded-[16px] shadow-2xl absolute mt-[550px] ml-[800px] p-6 text-left">
        <img src={vector43} className="absolute -ml-[25px] -mt-[25px]" alt="Vector 13" />
        <img src={line3} className="absolute -ml-[100px] mt-[100px]" alt="Line 2" />
        <div className="flex mt-[50px] gap-2">
          <img className="w-[58px] h-[56px]" src={group} alt="Graduation" />
          <p className="font-sans text-[#393939] font-normal text-[33px] mb-2">Virtual Labs</p>
        </div>
        <p className="mt-6 text-[15px] w-[451px] font-[500] font-sans font-normal mb-2">
        We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.
        </p>
      </div>

      <div className="w-[542px] h-[298px] bg-white rounded-[16px] shadow-2xl absolute mt-[900px] ml-[135px] p-6 text-left">
        <img src={vector13} className="absolute ml-[330px] -mt-[25px]" alt="Vector 13" />
        <img src={line2} className="absolute ml-[520px] mt-[100px]" alt="Line 2" />
        <div className="flex mt-[50px] gap-2">
          <img className="w-[50px] h-[60px]" src={aipng} alt="Graduation" />
          <p className="font-sans text-[#393939] font-normal text-[33px] mb-2">AI Tests</p>
        </div>
        <p className="mt-6 text-[15px] w-[451px] font-[500] font-sans font-normal mb-2">
        We understand that teaching alone isn't enough, so we provide our students with AI-powered tests to assess their progress.
        </p>
      </div>
      <div className="w-[542px] h-[298px] bg-white rounded-[16px] shadow-2xl absolute mt-[1000px] ml-[850px] p-6 text-left">
        <img src={vector43} className="absolute -ml-[25px] -mt-[25px]" alt="Vector 13" />
        <img src={line3} className="absolute -ml-[100px] mt-[100px]" alt="Line 2" />
        <div className="flex mt-[50px] gap-2">
          <img className="w-[69px] h-[69px]" src={resume} alt="Graduation" />
          <p className="font-sans text-[#393939] font-normal text-[33px] mb-2">Resume Builder</p>
        </div>
        <p className="mt-6 text-[15px] w-[451px] font-[500] font-sans font-normal mb-2">
        We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd.
        </p>
      </div>
      <div className="w-[542px] h-[298px] bg-white rounded-[16px] shadow-2xl absolute mt-[1350px] ml-[135px] p-6 text-left">
        <img src={vector13} className="absolute ml-[330px] -mt-[25px]" alt="Vector 13" />
        <img src={line2} className="absolute ml-[520px] mt-[100px]" alt="Line 2" />
        <div className="flex mt-[50px] gap-2">
          <img className="w-[68px] h-[56px]" src={group2} alt="Graduation" />
          <p className="font-sans text-[#393939] font-normal text-[33px] mb-2">Placement Preparation</p>
        </div>
        <p className="mt-6 text-[15px] w-[451px] font-[500] font-sans font-normal mb-2">
        We go beyond building skills, taking our students to the next level by providing them with thorough placement preparation.
        </p>
      </div>
      <div className="w-[542px] h-[298px] bg-white rounded-[16px] shadow-2xl absolute mt-[1430px] ml-[850px] p-6 text-left">
        <img src={vector43} className="absolute -ml-[25px] -mt-[25px]" alt="Vector 13" />
        <img src={line3} className="absolute -ml-[100px] mt-[100px]" alt="Line 2" />
        <div className="flex mt-[50px] gap-2">
          <img className="w-[58px] h-[51px]" src={group1} alt="Graduation" />
          <p className="font-sans text-[#393939] font-normal text-[33px] mb-2">AI Interviews</p>
        </div>
        <p className="mt-6 text-[15px] w-[451px] font-[500] font-sans font-normal mb-2">
        Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.
        </p>
      </div>
    
    </div>
  );
}

export default Learning;
