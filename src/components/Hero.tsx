import mac from "../assets/mac.png";
import university from "../assets/university.png";
import office from "../assets/Office.png";
import GraduationCap from "../assets/landing Page/GraduationCap.png";
import indiaNDSC from '../assets/IndiaNDSCLogo.png'
import goverment from '../assets/govermentofindia.png'
import startuplogo from '../assets/startuplogo.png'
const Hero = () => {
  return (
    <div>
      <div className="flex mt-[20px] justify-center gap-6">
        {/* Left Section - Image */}
        <div>
          <img className="w-[626px] h-[484px]" src={mac} alt="" />
        </div>

        {/* Right Section - Text and Cards */}
        <div>
          {/* Heading */}
          <div className="w-[656px] h-[164px]">
            <p className="text-[72px] font-bold text-[#4C5856]">
              Where The World <br />
              Learns To Code
            </p>
          </div>

          {/* Cards Section */}
          <div className="mt-[50px] flex gap-4">
            {/* Campus Training Card */}
            <div className="w-[289px] h-[264px] flex flex-col items-center p-4 border-2 rounded-[12px] bg-white drop-shadow-md">
              <img className="w-[56px] h-[55px] mb-4" src={university} alt="" />
              <p className="text-[22px] font-semibold text-[#1C408E] mb-2">
                Campus Training
              </p>
              <p className="text-[12px] text-[#4C5856] text-center mb-4">
                Designed for college students with a focus on xyz, xyz, xyz.
                Lorem ipsum dolor.
              </p>
              <button className="w-[164px] h-[53px] text-white rounded-[13px] bg-[#2B95ED] font-semibold">
                Explore →
              </button>
            </div>

            {/* Office Training Card */}
            <div className="w-[289px] h-[264px] flex flex-col items-center p-4 border-2 rounded-[12px] bg-white drop-shadow-md">
              <img className="w-[56px] h-[55px] mb-4" src={office} alt="" />
              <p className="text-[22px] font-semibold text-[#1C408E] mb-2">
                Office Training
              </p>
              <p className="text-[12px] text-[#4C5856] text-center mb-4">
                Tailored for professionals aiming to upskill. Lorem ipsum dolor
                sit amet.
              </p>
              <button className="w-[164px] h-[53px] text-white rounded-[13px] bg-[#2B95ED] font-semibold">
                Explore →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px] gap-16">
        <div className="w-[280px] flex items-center gap-4 p-4 rounded-[12px] border-2 bg-white h-[122px]">
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center rounded-full bg-slate-200 w-[89px] h-[80px]">
            <img
              src={GraduationCap}
              className="w-[56px] h-[56px]"
              alt="Graduation Cap"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-bold text-[28px] text-[#2B95ED] leading-tight">
              50+ <br /> Cities
            </p>
          </div>
        </div>
        <div className="w-[280px] flex items-center gap-4 p-4 rounded-[12px] border-2 bg-white h-[122px]">
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center rounded-full bg-slate-200 w-[89px] h-[80px]">
            <img
              src={GraduationCap}
              className="w-[56px] h-[56px]"
              alt="Graduation Cap"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-bold text-[28px] text-[#2B95ED] leading-tight">
              50+ <br /> Cities
            </p>
          </div>
        </div>
        <div className="w-[280px] flex items-center gap-4 p-4 rounded-[12px] border-2 bg-white h-[122px]">
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center rounded-full bg-slate-200 w-[89px] h-[80px]">
            <img
              src={GraduationCap}
              className="w-[56px] h-[56px]"
              alt="Graduation Cap"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-bold text-[28px] text-[#2B95ED] leading-tight">
              50+ <br /> Cities
            </p>
          </div>
        </div>
        <div className="w-[280px] flex items-center gap-4 p-4 rounded-[12px] border-2 bg-white h-[122px]">
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center rounded-full bg-slate-200 w-[89px] h-[80px]">
            <img
              src={GraduationCap}
              className="w-[56px] h-[56px]"
              alt="Graduation Cap"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-bold text-[28px] text-[#2B95ED] leading-tight">
              50+ <br /> Cities
            </p>
          </div>
        </div>
      </div>
      <div className="justify-center gap-16 h-[208px] flex items-center mt-[70px] bg-[#C5E5FF33] px-6 gap-6">
  {/* Government Logo */}
  <div className="flex-shrink-0">
    <img className="w-[298px] h-[85px]" src={goverment} alt="Government Logo" />
  </div>

  {/* Divider */}
  <div className="w-[1px] h-[190px] bg-black"></div>

  {/* Recognition Section */}
  <div className="flex w-[443px] h-[168px] flex-col items-center gap-2">
    <p className="text-[18px] font-semibold text-[#53607B]">RECOGNISED BY</p>
    <img src={indiaNDSC} className="w-[193px] mt-[10px] h-[74px]" alt="India NDSC" />
  </div>
  <div className="w-[1px] h-[190px] bg-black"></div>
  {/* Placeholder Section for Additional Logo */}
  <div className="flex-shrink-0">
    <img src={startuplogo} className="w-[221px] h-[127px]" alt="Placeholder Logo" />
  </div>
</div>

    </div>
  );
};

export default Hero;
