import React from 'react'

function SidebarRow({src, Icon, title}) {
  return (
    <div className='flex items-center space-x-2 hover:bg-gray-200'>
            <Icon className='h-8 w-8 text-blue-500'/>
        <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow