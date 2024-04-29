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
  const showSearch = useSelector((store) => store.search.searchMovieResult);
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
    <div className="flex justify-between absolute bg-gradient-to-b from-black w-full z-10">
      <div>
        <img src={LOGO} alt="NETFLIX_LOGO" className="ml-36 h-20 w-52" />
      </div>

      {user && (
        <>
          <div className="flex justify-center items-center mr-6">
            {showSearch && <div className="flex justify-center items-center">
              <p className="text-white text-3xl mb-1">🌐</p>
              <select
                name=""
                id=""
                className="text-sm h-8 rounded"
                onChange={handleLang}
              >
                {SUPPORTED_LANGUAGES.map((lang)=><option value={lang.identifier} key={lang.identifier} >{lang.name}</option>)}
              </select>
            </div>}
            <button
              className="bg-green-600 text-white p-1 px-2 mx-6 rounded"
              onClick={handleOnClick}
            >
              {showSearch ? "Home Page" : "Search"}
            </button>
            <img
              src={user?.photoURL}
              alt="userPhoto"
              className="h-12 w-12 rounded-[50%]"
            />
            <button
              className="m-3 font-bold text-lg text-white underline"
              onClick={handleClick}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
