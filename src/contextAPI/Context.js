import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();

const Context = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [filteredposts, setFilteredPosts] = useState([]);

    useEffect(()=>{
        getPosts()
    }, [])

    const getPosts = async ()=>{
        const recipiesdata = await fetch("https://dummyjson.com/posts")

        const jsonData = await recipiesdata.json();
        console.log(jsonData.posts);
        setPosts(jsonData.posts)
        setFilteredPosts(jsonData.posts)
    }


  return (
    <ContextData.Provider value={{posts , setPosts, filteredposts, setFilteredPosts}}>
        {children}
    </ContextData.Provider>
  )
}

export default Context;
