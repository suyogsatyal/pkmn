import './loading.css'

function Loading() {
    return ( <div className="loader-backdrop z-50 h-screen w-screen fixed top-0 left-0 grid place-items-center bg-gray-300">
        <><div className="pokeball"></div></>
    </div> );
}

export default Loading;