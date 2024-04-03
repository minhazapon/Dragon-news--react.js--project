import { Outlet } from "react-router-dom";
import Head from "./Head";
import Nav from "./Nav";




const Root = () => {
    return (
        <div>

             <Head></Head>
             <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;