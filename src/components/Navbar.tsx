import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
            <div className='bg-[#CEFEFF] w-full h-[69px] flex justify-center items-center'>
                    <p className='font-sans text-center font-semibold text-[18px] '>Learn coding at the nearby <span className='text-[#1C408E]'>Coding Pro</span> Institute. <span className='text-[#1C408E]'>Enquire now</span></p>
            </div>
            <div>
            <nav className="bg-white h-[95px] mt-[5px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-[95px] w-[300px]"
              src={logo} // replace with your logo path
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center space-x-4 font-normal text-[19px] text-[#3B3A3A]">
              <li>
                <a href="#aboutus" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#virtuallabs" className="hover:text-blue-500">
                  Virtual Labs
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-blue-500">
                  Programs
                </a>
              </li>
              <li>
                <a href="#forcolleges" className="hover:text-blue-500">
                  For Colleges
                </a>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 w-[131px] rounded-[18px] border-[2px] text-sm font-medium text-blue-600 border border-blue-600 rounded ">
              Login
            </button>
            <button className="px-4 w-[179px] rounded-[18px] py-2 text-sm font-medium text-white bg-[#2B95ED] rounded hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
            </div>
    </div>
  )
}

export default Navbar