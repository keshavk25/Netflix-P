const BackgroundVideoTitle =  (props)=>{

    const {videoTitle,overview}= props;

    return (
        <div className="absolute w-screen top-60 md:top-72 left-6 md:left-12 text-white ">
            <h1 className=" md:text-4xl font-bold md:my-4">{videoTitle}</h1>
            <p className="hidden md:inline-block my-4 w-4/12">{overview}</p>
            <div className=" md:my-8 flex flex-nowrap">
                <button className="flex justify-center items-center p-1 text-black bg-white bg-gray-500 md:w-32 md:text-xl rounded-md">
                    <span className=" md:text-4xl mx-2">&#9655;</span>
                    <h4>Play</h4>
                </button>

                <button className="flex justify-center items-center p-1  ml-4 bg-gray-500 bg-opacity-50 md:w-44 md:text-xl rounded-md">
                    <span className="md:text-4xl md:mx-2">ⓘ</span>
                    <h4>More Info</h4> 
                </button>
            </div>
        </div>
    )
}

export default BackgroundVideoTitle;