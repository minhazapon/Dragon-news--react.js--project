
import '../src/assets/images/facebook.png'

import '../src/assets/images/instagram.png'

import '../src/assets/images/twitter.png'

import '../src/assets/images/qZone1.png'

import '../src/assets/images/qZone2.png'

import '../src/assets/images/qZone3.png'



const LeftNav = () => {
    return (

         <div>


          <div className=" border-[1px] border-blue-500 p-2 rounded-2xl">
            <h1 className=" text-2xl font-bold">Login with</h1>
            <div className="">
              <button className=" mt-2 text-xl flex items-center gap-2 ">
                
                <img className=" mt-3 h-[30px]" src="https://i.ibb.co/cFCDCpx/github.png" alt="" />
                
                Github</button>
                  <button className=" mt-2 text-xl flex items-center gap-2 ">
                
                <img className=" mt-3 h-[30px]" src="https://i.ibb.co/wcLMdZr/social.png" alt="" />
                
                  google</button>
            </div>
         </div>

        <div className=' border-[1px] border-blue-500 p-2 rounded-xl mt-5'>


           <div className=" mt-5">
              <h1 className=" text-xl font-bold">Find Us On</h1>
               <div className=' flex items-center gap-2 mt-2'>
                 <img className=' h-[30px]' src='../src/assets/images/facebook.png' alt="" />
                 <h1 className=' text-xl font-bold text-blue-600'>Facebook</h1>
               </div> 
           </div>

           <div className=" mt-2">
              
               <div className=' flex items-center gap-2 mt-2'>
                 <img className=' h-[30px]' src='../src/assets/images/twitter.png' alt="" />
                 <h1 className=' text-xl font-bold text-blue-600'>Twitter</h1>
               </div> 
           </div>


           <div className="  mt-2">
             
               <div className=' flex items-center gap-2 mt-2'>
                 <img className=' h-[30px]' src= '../src/assets/images/instagram.png'alt="" />
                 <h1 className=' text-xl font-bold text-blue-600'>instagram</h1>
               </div> 
           </div>


        </div>




        <div className=' mt-5 border-[1px] border-blue-700 rounded-2xl p-3 bg-slate-100'>

            <h1 className=' text-2xl font-bold'>Q-zone</h1>


            <img className=' mt-5' src='../src/assets/images/qZone1.png' alt="" />

            <img className=' mt-5' src='../src/assets/images/qZone2.png' alt="" />

            <img className=' mt-5' src='../src/assets/images/qZone3.png' alt="" />


        </div>


         

        </div>
    );
};

export default LeftNav;