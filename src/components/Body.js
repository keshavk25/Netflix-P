import Log from "./Log";
import Browse from "./Browse";
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import Error from "./Error";


const Body = ()=>{

    

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Log/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/error",
            element:<Error/>
        },

    ])

    
    return (
<div>
   <RouterProvider router={appRouter}/>
</div>
    )
}

export default Body;