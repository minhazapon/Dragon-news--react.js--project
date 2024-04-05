
import '../src/assets/images/editorsInsight1.png'


// -------------



import '../src/assets/images/facebook.png'

import '../src/assets/images/instagram.png'

import '../src/assets/images/twitter.png'

import '../src/assets/images/qZone1.png'

import '../src/assets/images/qZone2.png'

import '../src/assets/images/qZone3.png'




const About = () => {

   



    return (
        <div className=" ml-10 mr-10 flex justify-center  gap-24">

            <hr></hr>



            <div className=" ">
                

            <div className=" border-[1px] border-violet-600 p-5  card card-compact w-[500px] bg-base-100 shadow-xl">
            <figure><img src='../src/assets/images/editorsInsight1.png' alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
              <p>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.</p>
              <div>

                <h1 className=' bg-red-600 w-[180px] p-3 rounded-xl text-white'>All news in this category</h1>

              </div>
            </div>
            </div>
                
            </div>



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
            
        </div>
    );
};

export default About;