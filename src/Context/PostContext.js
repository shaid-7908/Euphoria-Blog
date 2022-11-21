import React ,{useContext,useState} from "react";

const PostContext=React.createContext()

export function usePost(){
    return useContext(PostContext)
}

export const PostProvider=({children})=>{
    const [post,setPost]=useState({})

    function addPost(e){
        setPost(e)
    }
    return ( <PostContext.Provider value={{
        post,addPost
    }}>
        {children}
    </PostContext.Provider>)
}