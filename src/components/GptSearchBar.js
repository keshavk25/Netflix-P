import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = ()=>{

    const langKey = useSelector(store=>store.configLang.lang);


    return(
        <div className="flex justify-center ">
                <form action="" className="h-12 bg-black absolute top-28 w-[50%] grid grid-cols-12 rounded ">
                    <input type="text" placeholder={lang[langKey].searchPlaceholder} className="col-span-10 pl-6 text-xl rounded-s" />
                    <button className="text-white col-span-2 text-2xl bg-green-600 rounded-e"> {lang[langKey].search}</button>
                </form>
            </div>
    )
}

export default GptSearchBar;