import { FaUserFriends, FaDesktop, FaCalendarAlt } from 'react-icons/fa'
import { FiShoppingBag, FiClock, FiChevronDown } from 'react-icons/fi'
import SidebarRow from './SidebarRow'


export default function Sidebar() {

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow Icon={FaUserFriends} title="Friends"/>
        <SidebarRow Icon={FiShoppingBag} title="Shopping"/>
        <SidebarRow Icon={FaDesktop} title="Watch"/>
        <SidebarRow Icon={FaCalendarAlt} title="Events"/>
        <SidebarRow Icon={FiClock} title="Memories"/>
        <SidebarRow Icon={FiChevronDown} title="See More"/>
    </div>
  )
}

