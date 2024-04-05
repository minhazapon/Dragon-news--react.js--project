

const NewsInfo = ({news}) => {
     
    const {title, image_url , details} = news


    return (
        <div>

             <div>


             <div className="card w-[500px] bg-base-100 shadow-xl border-[1px] border-blue-600 mt-5 p-5">

             <p className=" text-xl font-bold"> {title} </p>
              <figure className="px-10 pt-10">
                
                
                <img src={image_url} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">

                <p className=" text-xl font-bold"> {details} </p>
                
              </div>

              
            </div>






















             </div>

            
        </div>
    );
};

export default NewsInfo;