import { useEffect, useState } from "react"
import { foodPost } from "./constant";

const usePost = (id)=>{

    const [recipie, setPost] = useState(null);

    useEffect(()=>{
        getapi();
    },[])

    const getapi = async()=>{
        const data = await fetch(foodPost + `/${id}`);
        const json = await data.json();

               const [ recipie_data ] = json.filter((rec) => {
            return rec.id == id;
        })
        console.log(recipie_data);

        setPost(recipie_data);
        
    }

    return recipie
}
export default usePost;