import React from 'react'
import './Post.css'
import { blogdata } from '../../data'
import {usePost} from '../../Context/PostContext'
import { Link } from 'react-router-dom'
export default function Post() {
  const {addPost}=usePost()
  console.log(blogdata)
  return (
    <div className="post">
      <div className="postContainer">
        {blogdata.map((e)=>{
                return <Link to='/singlepost' style={{textDecoration:'none'}}> <div className="postContents" onClick={()=>addPost(e)} key={e.id}  >
                  <div className="postimagecont">
                  <img
              className="postImg"
              src={e.image}
              alt=""
            />
                  </div>
                  <div className='postInfo'>
                  <span className='postAuthor'>by {e.author}</span>
                   <span className='postCatagorie'>{e.catagorie}</span>
                  </div>
            <p className='postHeading'>{e.blogTitle}</p>
                </div></Link>
        })}
       
    
      </div>
  </div>
  )
}
