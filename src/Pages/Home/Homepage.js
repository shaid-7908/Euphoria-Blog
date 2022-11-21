import React from 'react'
import './Homepage.css'
import Header from '../../Component/Header/Header'
import Post from '../../Component/Post/Post'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Footer from '../../Component/Footer/Footer'
import Topbar from '../../Component/Topbar/Topbar'

export default function Homepage() {
  return (
    <>
    <Topbar/>
    <Header/>
    <div className="homepage">
      <Post/>
      <Sidebar/>
    </div>
    <Footer/>
   
    </>
  )
}
