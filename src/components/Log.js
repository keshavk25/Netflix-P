import { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_AVATAR } from "../utils/constant";
import { bg_URL } from "../utils/constant";

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
        <div>
            <Header />
            <div>
            <img src={bg_URL}
            alt="" 
            className="h-screen object-cover  md:w-full md:h-full"
            />
            </div>
            <div className="absolute top-20">
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="w-[95%] mx-1 p-4 md:w-3/12 my-20 md:ml-[40%] bg-black text-white bg-opacity-85 rounded-md flex flex-wrap">
                <h2 className="text-3xl font-bold my-4 mx-4">
                     {isSignIn?"Sign In" : "Sign Up"}
                     </h2>
                {!isSignIn&&
                <input type="text" placeholder="Full Name" 
                ref={fullname}
                className=" m-2 p-2 w-80 h-14 bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md"
                />}
                <input type="text" placeholder="E-Mail" 
                ref={email}
                className="m-2 p-2 w-80 h-14 bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md" 
                />
                <input type="text" placeholder="Password"
                ref={password} 
                className="m-2 p-2 w-80 h-14  bg-gray-500 bg-opacity-15 border-gray-500 border-[1px] rounded-md"
                 />
                 <p className="text-red-700 ml-4">{validateErrMessage}</p>
                <button className=" m-2 font-bold bg-red-600 p-2 w-80 h-10 rounded-md "
                onClick={validateOnClick}
                >
                {isSignIn?"Sign In" : "Sign Up"}
                </button>
                <p 
                className="text-lg font-semibold my-4 mx-2 cursor-pointer"
                onClick={handleSignButton}> {isSignIn?"New to Netflix? Sign Up now." : "Already registed? Sign In now"} </p>
            </form>
            </div>
            </div>
    )
}

export default Log;