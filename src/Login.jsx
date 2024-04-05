import { Link } from "react-router-dom";




const Login = () => {
    return (
        <div>


         
         <div className="hero  bg-base-200">
           <div className="hero-content flex-col lg:flex-row-reverse">
            
             <div className="card shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
               <form className="card-body">
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
                   <button className="btn btn-primary">Login</button>
                 </div>
               </form>

               <div className=" flex items-center gap-0">

                  <h1 className=" text-xl text-blue-500 p-3">Dont’t Have An Account ? </h1>
                 

                  <Link to="/register" >   <button  className="btn btn-link">Register</button> </Link>
                 
   

               </div>
             </div>
           </div>
         </div>
                     
        </div>
    );
};

export default Login;