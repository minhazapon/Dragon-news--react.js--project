




const Register = () => {
    return (
        <div>


           <div className="hero  bg-base-200">

              
             <div className=" flex-col lg:flex-row-reverse">
               <div>
                 <h1 className=" text-center text-4xl mt-10 mb-5 font-bold">Register your account</h1>

               </div>
                  
               <div className="card shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                 <form className="card-body">

                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Your Name</span>
                     </label>
                    <input className="input input-bordered" placeholder="Name"  type="text" />
                   </div>

                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Photo Url</span>
                     </label>
                     <input className="input input-bordered" placeholder="Photo Url" type="url" name="" id="" />
                   </div>
                   
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input type="email" placeholder="email" className="input input-bordered" required />
                   </div>

                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Password</span>
                     </label>
                     <input type="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                   </div>

                   <div className="form-control mt-6">
                     <button className="btn btn-primary">Register</button>
                   </div>

                   
                 </form>

                
               </div>
             </div>
           </div>
           


            
        </div>
    );
};

export default Register;