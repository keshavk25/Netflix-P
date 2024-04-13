import { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_AVATAR } from "../utils/constant";

const Log = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSignIn,setIsSignIn] = useState(true);
    const [validateErrMessage,setValidateErrMessage] = useState(null)

    const fullname= useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignButton = ()=>{
        setIsSignIn(!isSignIn);

    }
    const validateOnClick = ()=>{
        const validateMessage =Validate(isSignIn?true:fullname.current.value,email.current.value,password.current.value)
        setValidateErrMessage(validateMessage);

        if(validateMessage) return;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => { 
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: fullname.current.value, 
                photoURL: user_AVATAR
                                
            }).then(() => {
                  const user= auth.currentUser;
                  const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                navigate("/browse")
              }).catch((error) => {
              });
            console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setValidateErrMessage(errorCode+"-"+errorMessage)
            });
        }else{
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidateErrMessage(errorCode+"-"+errorMessage)
                });
           }


    }

    return(
        <div className="absolute top-0 bg-gradient-to-b from-black">
            <Header />
            <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="" 
            className="w-full h-full"
            />
            </div>
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className=" absolute top-0 left-0 my-24 ml-[535px] bg-black h-3/5 w-[450px] text-white bg-opacity-85 rounded-md">
                <h2 className="text-3xl mt-12 font-bold my-4 mx-16">
                     {isSignIn?"Sign In" : "Sign Up"}
                     </h2>
                {!isSignIn&&
                <input type="text" placeholder="Full Name" 
                ref={fullname}
                className=" m-2 mx-16 p-4 w-80 h-14 bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md"
                />}
                <input type="text" placeholder="E-Mail" 
                ref={email}
                className="m-2 mx-16 p-4 w-80 h-14 bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md" 
                />
                <input type="text" placeholder="Password"
                ref={password} 
                className="m-2 mx-16 p-4 w-80 h-14  bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md"
                 />
                 <p className="text-red-700 ml-16">{validateErrMessage}</p>
                <button className=" m-2 bg-red-600 p-2 mx-16 w-80 h-10 rounded-md "
                onClick={validateOnClick}
                >
                {isSignIn?"Sign In" : "Sign Up"}
                </button>
                <p 
                className="text-lg my-8 mx-16 cursor-pointer"
                onClick={handleSignButton}> {isSignIn?"New to Netflix? Sign Up now." : "Already registed? Sign In now"} </p>
            </form>
            </div>
    )
}

export default Log;