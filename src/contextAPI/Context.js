import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();

//images
import history from "../components/assets/history.jpg"
import crime from "../components/assets/crime.webp"
import fiction from "../components/assets/fiction.webp"
import mystery from "../components/assets/mystery.webp"
import nostalgia from "../components/assets/nostalgia.jpg"
import adventure from "../components/assets/adventure.jpg"
import hope from "../components/assets/hope.webp"


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
    <ContextData.Provider value={{posts , setPosts, filteredposts, setFilteredPosts, endTag, setEndTag,users, setUser, history,crime, fiction,mystery, nostalgia, adventure, hope }}>
        {children}
    </ContextData.Provider>
  )
}

export default Context;
