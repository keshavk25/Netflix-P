import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useNavigate ,} from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = ()=>{

    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);
    const navigate = useNavigate();

    const handleClick= ()=>{
        signOut(auth).then(() => {
          navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse")
            } else {
              dispatch(removeUser())
              navigate("/")
            }
          });
          return ()=>unsubscribe();       
    },[])


    return(
        <div className="flex justify-between absolute bg-gradient-to-b from-black w-full z-10">
            <div>
                <img src={LOGO} alt="NETFLIX_LOGO" 
            className="ml-36 h-20 w-52"
            />
            </div>

            {user && <div className="flex justify-center items-center mr-6">
                <img src={user?.photoURL} alt="userPhoto" 
                 className="h-12 w-12"
                 />
                <button className="m-3 font-bold text-lg text-white" onClick={handleClick}>(Sign Out)</button>
            </div>}
        </div>

        

    )
}

export default Header;