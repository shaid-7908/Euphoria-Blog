import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Topbar from '../../Component/Topbar/Topbar'
import Footer from '../../Component/Footer/Footer'
import { usePost } from '../../Context/PostContext'
import './Single.css'
import { Link } from 'react-router-dom'
export default function Single() {
  const {post}=usePost()
  console.log(post)
  return (
   <>
   <Topbar/>
   <div className='mainWrapper'>

  
   <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.blogTitle}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {post.author}
            </b>
          </span>
          {/* <span>1 day ago</span> */}
        </div>
        <p className="singlePostDesc">
        {post.blogContent}
        </p>
      </div>
    </div>
      <Sidebar/>
      </div>
    <Footer/>
   </>
  )
}
