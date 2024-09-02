import { useContext } from "react"
import { ContextData } from "../../contextAPI/Context"
import WapsCard from "./WapsCard";

const Waps = () => {

    const {posts , setposts} = useContext(ContextData)
    console.log(posts);

  return (
    <>
    <h1 className="text-center text-[7vw] lg:text-[8vw] mt-10 ">
        What People are Sharing??
    </h1>
    <div className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-none gap-8 p-4 mt-10">
        {
            posts.slice(0,6).map((item)=>{
                return (<WapsCard posts = {item} key={item?.id} />)
            })
        }
    </div>
    </>
    
  )
}

export default Waps