import { useSession } from 'next-auth/react'
import HeaderCenterIcon from './HeaderCenterIcon'
import HeaderRightIcon from './HeaderRightIcon'
import { FaFacebook } from 'react-icons/fa'
import { BiSearch, BiFlag } from 'react-icons/bi'
import {
  BsGridFill,
  BsFillChatDotsFill,
  BsBellFill,
  BsChevronDown,
} from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import {
  AiFillHome,
  AiOutlinePlayCircle,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { signOut } from 'next-auth/react'
import Image from 'next/image'



export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="header-div">
      {/* Left sec */}
      <div className="flex items-center">
        <a href="/">
          <FaFacebook className="h-10 w-10 text-blue-600" />
        </a>
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2 sm:ml-3">
          <BiSearch className="h-6 text-gray-600" />
          <input
            className="header-input hidden md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center sec */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderCenterIcon Icon={AiFillHome} active />
          <HeaderCenterIcon Icon={BiFlag} />
          <HeaderCenterIcon Icon={AiOutlinePlayCircle} />
          <HeaderCenterIcon Icon={AiOutlineShoppingCart} />
          <HeaderCenterIcon Icon={HiUserGroup} />
        </div>
      </div>

      {/* Right sec */}
      <div className="flex items-center justify-end sm:space-x-2">
        {/* Facebook login profile pic */}
        <Image
          onClick={() => signOut()}
          className='rounded-full cursor-pointer'
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="hidden lg:inline-flex font-semibold whitespace-nowrap pr-3">
          {session.user.name}
        </p>

        <HeaderRightIcon Icon={BsGridFill} />
        <HeaderRightIcon Icon={BsFillChatDotsFill} />
        <HeaderRightIcon Icon={BsBellFill} />
        <HeaderRightIcon Icon={BsChevronDown} />
        <FiLogOut className="header-right-icon" onClick={() => signOut()} />
      </div>
    </div>
  )
}
