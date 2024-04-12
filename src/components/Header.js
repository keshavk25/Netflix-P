import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useNavigate ,} from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ()=>{
    const user = useSelector(store=>store.user);
    const navigate = useNavigate();

    const handleClick= ()=>{
        signOut(auth).then(() => {
          navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    return(
        <div className="flex justify-between absolute bg-gradient-to-b from-black w-full z-10">
            <div>
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="NETFLIX_LOGO" 
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