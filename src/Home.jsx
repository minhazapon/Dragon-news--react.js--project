import LeftNav from "./LeftNav";
import News from "./News";
import RightNav from "./RightNav";




const Home = () => {
    return (
        <div>

         
           <div className=" ">



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