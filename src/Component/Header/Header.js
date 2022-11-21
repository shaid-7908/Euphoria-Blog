import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
     <div className="headerTitles">
      <span className="headerTitleSm">Welcome To </span>
    <span className="headerTitleLg">Techno BLog.Op</span>

     </div>
     <img className='headerImage' src='https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png'  alt='blog'/>
    </div>
  )
}
