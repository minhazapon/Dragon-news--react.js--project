import LeftNav from "./LeftNav";
import News from "./News";
import RightNav from "./RightNav";




const Home = () => {
    return (
        <div>

         
           <div className=" flex justify-center  gap-80 ml-10 mr-10 ">



               <div>
                   <RightNav></RightNav>
               </div>

               
               <div>

                <News></News>
               </div>
       

               <div>

                <LeftNav></LeftNav>
               </div>



           </div>



            
        </div>
    );
};

export default Home;