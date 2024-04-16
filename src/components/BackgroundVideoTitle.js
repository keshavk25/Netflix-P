const BackgroundVideoTitle =  (props)=>{

    const {videoTitle,overview}= props;

    return (
        <div className="absolute w-screen aspect-video top-80 left-16 text-white ">
            <h1 className="text-4xl font-bold my-4">{videoTitle}</h1>
            <p className="my-4 w-5/12">{overview}</p>
            <div className="my-4 flex flex-nowrap">
                <button className="flex justify-center items-center p-1 text-black bg-white bg-gray-500 w-32 text-xl rounded-md">
                    <span className="text-4xl mx-2">&#9655;</span>
                    <h4>Play</h4>
                </button>

                <button className="flex justify-center items-center p-1  ml-4 bg-gray-500 bg-opacity-50 w-44 text-xl rounded-md">
                    <span className="text-4xl mx-2">ⓘ</span>
                    <h4>More Info</h4> 
                </button>
            </div>
        </div>
    )
}

export default BackgroundVideoTitle;