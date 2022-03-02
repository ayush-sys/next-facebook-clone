import HeaderCenterIcon from "./HeaderCenterIcon";
import HeaderRightIcon from "./HeaderRightIcon";
import { FaFacebook } from "react-icons/fa";
import { BiSearch, BiFlag } from "react-icons/bi";
import { BsGridFill, BsFillChatDotsFill, BsBellFill, BsChevronDown } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { AiFillHome, AiOutlinePlayCircle, AiOutlineShoppingCart } from "react-icons/ai";



export default function Header() {
  return (
    <div className="header-div">

      {/* Left sec */}
      <div className="flex items-center">
        <FaFacebook className="h-10 w-10 text-blue-600"/>
        <div className="flex ml-2 sm:ml-3 items-center rounded-full bg-gray-100 p-2">
          <BiSearch className="h-6 text-gray-600"/>
          <input className="header-input hidden md:inline-flex" type="text" placeholder="Search Facebook"/>
        </div>
      </div>


      {/* Center sec */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderCenterIcon Icon={AiFillHome} active/>
          <HeaderCenterIcon Icon={BiFlag}/>
          <HeaderCenterIcon Icon={AiOutlinePlayCircle}/>
          <HeaderCenterIcon Icon={AiOutlineShoppingCart}/>
          <HeaderCenterIcon Icon={HiUserGroup}/>
        </div>
      </div>


      {/* Right sec */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Facebook login profile pic */}

        <p className="font-semibol pr-3 whitespace-nowrap">Ayush Pattanayak</p>

        <HeaderRightIcon Icon={BsGridFill}/>
        <HeaderRightIcon Icon={BsFillChatDotsFill}/>
        <HeaderRightIcon Icon={BsBellFill}/>
        <HeaderRightIcon Icon={BsChevronDown}/>
      </div>
    </div>
  )
}
