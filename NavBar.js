 import React from "react";
 import {GrRestaurant} from "react-icons/gr";
function NavBar() {
  return (
    <div class="bg-red-100 bg-opacity-50 p-4">

    <div className='flex justify-between mt-2 mx-10 '>   
         <div className="flex items-center space-x-2 text-xl text-wide">
          <GrRestaurant className="text-2xl"></GrRestaurant>
         <div> Ashdip</div> <span className="font-bold">Bistro</span>                   
        </div>


        <div className=''>
          <ul className='flex space-x-5 text-gray-900 font-bold'>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in'>
              <a href="/">Home</a>
            </li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in'>
              <a href="/about">About Us</a>
            </li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in'>
              <a href="/menu">Menu</a>
            </li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in'>
              <a href="/contact">Contact Us</a>
            </li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in'>
              <a href="/contact">Info</a>
            </li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in'>
              <a href="/contact">Reservation</a>
            </li>

          </ul>
        </div>
      </div>
   </div>
        
    
  );
}

export default NavBar; 




	
