

import '../src/assets/images/logo.png'



const Head = () => {
    return (
        <div>

             <div className=' flex justify-center items-center mt-5'>
                 <img src='../src/assets/images/logo.png' alt="" />
             </div>


             <div  className=' text-center'>

                <h1 className=' text-2xl font-bold  text-slate-400'>Journalism Without Fear or Favour</h1>
                <h1 className=' text-2xl font-bold  text-slate-400'><span className=' text-black'>Sunday</span>, November 27, 2022</h1>
               
                <div className=' flex justify-center'>
                <p className=' mt-10 bg-slate-300 p-4 w-[900px] rounded-xl  font-extrabold text-slate-00'>  <span className=' text-2xl font-bold mr-5 bg-red-600 w-[200px] p-2 rounded-xl text-white'>Lates</span>   Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </div>
             </div>


            
        </div>
    );
};

export default Head;