import { useEffect, useState } from "react"
import { foodRecipie } from "./constant";

const useRecipie = (id)=>{

    const [recipie, setRecipie] = useState(null);

    useEffect(()=>{
        getapi();
    },[])

    const getapi = async()=>{
        const data = await fetch(foodRecipie + `/${id}`);
        const json = await data.json();

               const [ recipie_data ] = json.filter((rec) => {
            return rec.id == id;
        })
        console.log(recipie_data);

        setRecipie(recipie_data);
        
    }

    return recipie
}
export default useRecipie;