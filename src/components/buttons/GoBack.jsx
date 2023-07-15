import { Link, useNavigate } from "react-router-dom";

function GoBack() {
    const navigate = useNavigate();

    return (
        <Link onClick={() => navigate(-1)} className={'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>
            ← Go Back
        </Link>
    )
}

export default GoBack;