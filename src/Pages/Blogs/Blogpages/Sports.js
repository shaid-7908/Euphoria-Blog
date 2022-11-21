import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../../../Component/Topbar/Topbar'
import { blogdata } from '../../../data'
import { usePost } from '../../../Context/PostContext'
export default function Sports() {
    const {addPost}=usePost()
  return (
    <>
    <Topbar/>
    <div className="blogmainContainer">
    <div className="blogCatagorieSelection">
        <Link to='/technology'><span className="blogCatagoriestoSelect">Technology</span></Link>
        <Link to='/movie'> <span className="blogCatagoriestoSelect"> Movies</span></Link>
       <Link to='/sports'><span className="blogCatagoriestoSelect">Sports</span></Link>
    </div>
        <hr/>
        <div className="blogContentContainer">
            {blogdata.map((e)=>{
                if(e.catagorie==="sports"){ 
                return <div className="blogData" key={e.id}>
                    <div className="blogImage">
                        <img src={e.image} alt="" />
                    </div>
                    <div className="blogInfo">
                        <span className='blogTitle'>{e.blogTitle}</span>
                        <p className='blogDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquid placeat officiis illum exercitationem quasi eveniet delectus est, voluptatum quo similique corporis accusamus reiciendis ullam quia culpa nulla sunt? Maxime!</p>
                        <Link to='/singlepost'><div className="blogReadMore" onClick={()=>addPost(e)}>Read More</div></Link>
                    </div>
                </div>}
                return null
            })}
        </div>
    </div>
    </>
  )
}
