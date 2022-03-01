import { FaFacebook } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";


export default function Header() {
  return (
    <div>
        {/* Left sec */}
        <div className="flex items-center">
            <FaFacebook className="h-7 w-7 text-blue-600"/>
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <BiSearch className="h-6 text-gray-600"/>
                <input className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook"/>
            </div>
        </div>

        {/* Center sec */}

        {/* Right sec */}
    </div>
  )
}
