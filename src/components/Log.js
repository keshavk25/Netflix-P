import { useState } from "react";
import Header from "./Header";

const Log = ()=>{

    const [logButton,setLogButton] = useState(true);
    const toggleSignButton = ()=>{
        setLogButton(!logButton)
    }

    return(
        <div className="absolute top-0 bg-gradient-to-b from-black">
            <Header/>
            <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="" />
            </div>
            <form className=" absolute top-0 left-0 my-24 ml-[535px] bg-black h-3/5 w-[450px] text-white bg-opacity-85 rounded-md">
                <h2 className="text-3xl mt-12 font-bold my-4 mx-16">
                     {logButton?"Sign In" : "Sign Up"}
                     </h2>
                {!logButton&&<input type="text" placeholder="Full Name" 
                className=" m-2 mx-16 p-4 w-80 h-14 bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md" 
                />}
                <input type="text" placeholder="E-Mail or Phone Number" 
                className=" m-2 mx-16 p-4 w-80 h-14 bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md" 
                />
                <input type="text" placeholder="Password" 
                className=" m-2 mx-16 p-4 w-80 h-14  bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md"
                 />
                <button className=" m-2 bg-red-600 p-2 mx-16 w-80 h-10 rounded-md " >
                {logButton?"Sign In" : "Sign Up"}
                </button>
                <p 
                className="text-lg my-8 mx-16 cursor-pointer"
                onClick={toggleSignButton}> {logButton?"New to Netflix? Sign Up now." : "Already registed? Sign In now"} </p>
                <p className="mt-4 mx-16 text-xs">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
            </div>
    )
}

export default Log;