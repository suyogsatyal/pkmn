import React from "react";
import { useNavigate } from "react-router-dom";

function Random() {
    const navigate = useNavigate();

    return (
        <a
            className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'
            onClick={() => {
                // Generate a random Pokemon ID and navigate to its details page
                const randomPokemonId = Math.floor(Math.random() * 1010);
                navigate(`/${randomPokemonId}`);
            }}
        >
            Random
        </a>
    );
}

export default Random;
