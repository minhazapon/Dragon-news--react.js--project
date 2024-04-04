


import '../src/assets/images/paper1.jpg'

import '../src/assets/images/paper2.webp'

import '../src/assets/images/paper3.webp'
import '../src/assets/images/paper4.webp'
import '../src/assets/images/paper5.jpg'

import Marquee from "react-fast-marquee";

const Paper = () => {
    return (
        <div className='  mt-10 mb-10'>


        <Marquee className='flex items-center gap-10'>
             

             <img className=' h-[200px] w-[200px]' src='../src/assets/images/paper1.jpg' alt="" />
             <br></br>
             <img className=' h-[200px] w-[200px]' src='../src/assets/images/paper2.webp' alt="" />
             <img className=' h-[200px] w-[200px]' src='../src/assets/images/paper3.webp' alt="" />
             <img className=' h-[200px] w-[200px]'src='../src/assets/images/paper4.webp' alt="" />
             <img className=' h-[200px] w-[200px]' src='../src/assets/images/paper5.jpg' alt="" />
       
        </Marquee>
            
        </div>
    );
};

export default Paper;