import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
       <h1>Techno Blog</h1>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
<div className="sidebarItem">
<span className='sidebarTitle'>CATAGORIES</span>
<ul className='sidebarList'>
  <li className='sidebarListItems'>Technology</li>
  <li className='sidebarListItems'>Sports</li>
  <li className='sidebarListItems'>Movies</li>
  
</ul>
</div>

</div>
  )
}
