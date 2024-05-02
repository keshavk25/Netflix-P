import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleSearch } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configLangSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleOnClick = () => {
    dispatch(toggleSearch());
  };
  const handleLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex flex-col md:flex-row fixed justify-between bg-gradient-to-b from-black w-full z-10 bg-black ">
      <div>
        <img src={LOGO} alt="NETFLIX_LOGO" className="m-auto md:ml-14 h-20 w-52" />
      </div>

      {user && (
        <>
          <div className="flex justify-between items-center mr-6">
           
            <button
              className="flex bg-green-600 text-white p-1 px-2 m-2 rounded"
              onClick={handleOnClick}
            >
              {showSearch ? "Home Page" : "Search"}
            </button>

            {showSearch && <div className="flex justify-center items-center m-2">
              <select
                name=""
                id=""
                className="text-sm h-8 rounded"
                onChange={handleLang}
              >
                {SUPPORTED_LANGUAGES.map((lang)=><option value={lang.identifier} key={lang.identifier} >{lang.name}</option>)}
              </select>
            </div>}

            <img
              src={user?.photoURL}
              alt="userPhoto"
              className="h-12 w-12 m-2 rounded-[50%]"
            />
            <button
              className="flex m-2 font-medium  text-lg px-1 rounded text-red-600 bg-white "
              onClick={handleClick}
            >
              Log Out
            </button>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
