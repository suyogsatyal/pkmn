<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function Random (){
    const navigate = useNavigate();

    return(
        <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => {
            navigate(`/${Math.floor(Math.random() * 1010)}`);
            setLoader(true);
        }}
        >
            Random
        </a>
    )
}

=======
import { useNavigate } from "react-router-dom";

function Random (){
    const navigate = useNavigate();

    return(
        <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => {
            navigate(`/${Math.floor(Math.random() * 1010)}`);
            setLoader(true);
        }}
        >
            Random
        </a>
    )
}

>>>>>>> c59c965d3bcea83a3edaeb1e640d6a0c18ef17cc
export default Random;