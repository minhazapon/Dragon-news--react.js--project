

import '../src/assets/images/1.png'
import '../src/assets/images/2.png'
import '../src/assets/images/3.png'


const RightNav = () => {
    return (
        <div>
               <h1 className=" text-2xl font-bold">All category:</h1>

              <div className=" mt-3  border-blue-400 border-[1px] p-5 rounded-2xl ">
                <a href="" className=" mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">National News</h1>
                 </a>
                <a className=" mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">Breaking News</h1>
                 </a>
                <a className="  mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">Regular News</h1>
                 </a>
                <a className="  mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">International News</h1>
                 </a>
                <a className=" mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">Sports</h1>
                 </a>
                <a className="  mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">Entertainment</h1>
                 </a>
                <a className="  mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">Culture</h1>
                 </a>
                <a className="  mt-10">  <h1 className=" mt-5 text-xl font-bold text-slate-400">Arts</h1>
                 </a>
                


             </div>




             <div>



               <div className=' mt-5 border-[1px] border-blue-600 p-3 rounded-2xl'>
                <img src='../src/assets/images/1.png' alt="" />
                <p className=' text-2xl font-bold mt-3'>Kids News</p>
                <p  className=' font-bold mt-3 text-slate-400' > thanks for art with us</p>

               </div>

               
               <div className=' mt-5 border-[1px] border-blue-600 p-3 rounded-2xl'>
                <img src='../src/assets/images/2.png' alt="" />
                <p className=' text-2xl font-bold mt-3'>  Programming</p>
                <p  className='  font-bold mt-3 text-slate-400' >thanks for Programming with us</p>

               </div>


               
               <div className=' mt-5 border-[1px] border-blue-600 p-3 rounded-2xl'>
                <img src='../src/assets/images/3.png' alt="" />
                <p className=' text-2xl font-bold mt-3'>Sports</p>
                <p  className='  font-bold mt-3 text-slate-400' >thanks for play with us</p>

               </div>



             </div>


        </div>
    );
};

export default RightNav;