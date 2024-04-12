import Header from "./Header";
import Log from "./Log";
import Browse from "./Browse";
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import Error from "./Error";


const Body = ()=>{

    const dispatch = useDispatch();

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

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            } else {
              dispatch(removeUser())
            }
          });         
    },[])
    
    return (
<div>
   <RouterProvider router={appRouter}/>
</div>
    )
}

export default Body;