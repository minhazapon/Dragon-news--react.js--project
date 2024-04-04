import { Outlet } from "react-router-dom";
import Head from "./Head";
import Nav from "./Nav";
import Paper from "./Paper";




const Root = () => {
    return (
        <div>

             <Head></Head>
             <Nav></Nav>
             <Paper></Paper>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;