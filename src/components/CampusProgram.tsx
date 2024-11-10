import ornament from '../assets/campusProgram/Ornament.jpg'
import image12 from '../assets/campusProgram/image.png'
import image113 from '../assets/campusProgram/image 112.png'
import ornament1 from '../assets/efforts/Ornament 117.jpg'
import ornament2 from '../assets/efforts/Ornament 119.jpg'
import gamers from '../assets/Gamers.png'
import maskgroup from '../assets/Mask group.png'
import group from '../assets/Group 1261152797.png'
import ellipse from '../assets/elipse/Ellipse 100.png'
import ellipse1 from '../assets/elipse/Ellipse 99.png'
import ellipse2 from '../assets/elipse/RemoveBG Preview (3) 2.png'
import ornament112 from '../assets/Ornament 122.jpg'
const CampusProgram = () => {
  return (
    <div>
        <img src={ornament} className='w-[180px] h-[180px] -z-10 absolute ml-[220px] -mt-[50px]' alt="" />
        <div className='mt-[90px] text-center  font-[500] text-[48px] flex justify-center items-center font-sans'>
            <h1>Check out our <span className='text-[#008D8F]'>holistic programs</span> designed <br />
            to help you reach your <span className='text-[#008D8F]'>goals</span></h1>
        </div>
       <div className='flex items-center gap-16 mt-[100px] justify-content flex-col'>
       <div className='w-[1015px] relative flex h-[371px] justify-around rounded-[25px] shadow-lg bg-white'>
                <div>
                    <img className='w-[450px]' src={image12} alt="" />
                </div>
                <div className='w-[501px]'>
                    <p className='font-[500] text-[28px] mt-[20px]'>Campus Training</p>
                    <p className='font-[500] text-[22px] mt-[20px] font-sans text-[#5B5B5B]' >For students| 24+ Modules | 10 instructors</p>
                    <p className='text-[#3B3A3A] font-normal mt-[30px] text-[22px]'>The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.</p>
                    <button className='w-[155px] h-[56px] bg-[#2B95ED] mr-[50px] mt-[20px] absolute right-1 text-white rounded-[14px]'>Explore</button>
                </div>
        </div>
        <div className='w-[1015px] relative flex h-[371px] justify-around rounded-[25px] shadow-lg bg-white'>
                <div>
                    <img className='w-[450px]' src={image113} alt="" />
                </div>
                <div className='w-[501px]'>
                    <p className='font-[500] text-[28px] mt-[20px]'>Professional Training</p>
                    <p className='font-[500] text-[22px] mt-[20px] font-sans text-[#5B5B5B]' >For students| 24+ Modules | 10 instructors</p>
                    <p className='text-[#3B3A3A] font-normal mt-[30px] text-[22px]'>The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.</p>
                    <button className='w-[155px] h-[56px] bg-[#2B95ED] mr-[50px] mt-[20px] absolute right-1 text-white rounded-[14px]'>Explore</button>
                </div>
        </div>
       </div>
       <div className='flex justify-center mt-[200px] gap-4'>
        <div><img src={ornament1} alt="" /></div>
        <div className='w-[1070px] h-[144px] font-[500] text-[48px] text-center'>Our efforts to <span className='text-[#008D8F]'>innovate</span> have been <span className='text-[#008D8F]'>recognized</span> and <span className='text-[#008D8F]'>appreciated</span></div>
        <div><img className='w-[135px] h-[155px]' src={ornament2} alt="" /></div>
       </div>
       <div className='mt-[150px]'>
            <img className='absolute w-[676px] h-[350px] ml-[200px]' src={maskgroup} alt="" />
            <div className='w-[440px] ml-[950px] absolute mt-[100px] font-400 text-[22px] text-white'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Nunc <br /> vulputate libero et velit interdum</div>
            <img className='absolute ml-[600px] w-[712px] h-[500px] mt-[300px]' src={group} alt="" />
            <div className='w-[464px] mt-[530px] absolute ml-[100px] text-white font-400 text-[22px]'> Honored by Shri Dharmendra Pradhan ji <br />
Union Minister for Education <br />
Govt. of India - 2023</div>
            <img className='w-[2225px] h-[668px]' src={gamers} alt="" />
       </div>
       <div className='text-center mt-[200px] font-500 text-[50px]'>
            <p>Because We Offer What You Need <br />
at <span className='text-[#008D8F]'>every step </span>  of your <br />
<span className='text-[#008D8F]'>transformative learning journey</span></p>
       </div>
       <div className='mt-[250px] flex justify-center'>
       
       <img className='absolute 'src={ellipse1} alt="" />
       <img className='absolute -mt-[100px]'src={ellipse2} alt="" />
            <img className='absolute mt-[150px] ' src={ellipse} alt="" />
        <img src={ornament112} className='absolute mt-[100px] ml-[1250px]' alt="" />
       </div>
    </div>
  )
}

export default CampusProgram