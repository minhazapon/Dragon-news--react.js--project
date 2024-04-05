import { useEffect } from "react";
import { useState } from "react";
import NewsInfo from "./NewsInfo";

const News = () => {

     const [news, setNews] = useState([])


     useEffect( ()=> {

       fetch('news.json')
       .then(res => res.json())
       .then(data => setNews(data))


     }  , [])






    return (
        <div>



            <div>


                {
                   news.map(  news =>  <NewsInfo key={news.id} news={news} ></NewsInfo>  )
                   


                }





            </div>



            
        </div>
    );
};

export default News;