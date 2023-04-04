import React from 'react'
import Logo from "../../img/logo.png"
import './Sidebar.css'
import { SidebarData } from '../../data/Data'
import { useState } from 'react'

const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="" />
            <span>
                sch<span>o</span><span>o</span><span>o</span>l
            </span>
        </div>

        {/* {menu} */}
        <div className='menu'>
        {SidebarData.map((item, index) =>{
          return(
            <div className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
                  <item.icon/>
                  <span>
                    {item.heading}
                  </span>
            </div>
          )
        })}

 
        </div>
    </div>
  )
}

export default Sidebar
