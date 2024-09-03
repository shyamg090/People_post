import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();

const Context = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [filteredposts, setFilteredPosts] = useState([]);

    const [users, setUser] = useState([]);

    const [endTag, setEndTag] = useState("history")


    useEffect(()=>{
        getPosts()
        getUser()
    }, [])

    const getPosts = async ()=>{
        const postsdata = await fetch("https://dummyjson.com/posts")

        const jsonData = await postsdata.json();
        console.log(jsonData.posts);
        setPosts(jsonData.posts)
        setFilteredPosts(jsonData.posts)
    }

    const getUser = async ()=>{
      const userdata = await fetch(`https://jsonplaceholder.typicode.com/users`)

      const jsonData = await userdata.json();
      console.log(jsonData);
      setUser(jsonData)
  }

  // console.log(endTag);

  return (
    <ContextData.Provider value={{posts , setPosts, filteredposts, setFilteredPosts, endTag, setEndTag,users, setUser}}>
        {children}
    </ContextData.Provider>
  )
}

export default Context;
