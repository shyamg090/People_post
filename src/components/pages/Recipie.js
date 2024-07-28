import { useEffect } from "react";
import {foodRecipie} from "../../utils/constant";

const Recipie = () => {

    useEffect(()=>{
        fetchRecipie()
    },[])

    const fetchRecipie = async() =>{
        const data = await fetch(foodRecipie);
        const json = await data.json();

        console.log(json);
    }

    return (
        <div>
            <h1> name</h1>
            <h2>cookTimeMinutes</h2>
            <h3> tags</h3>
            <h3>rating</h3>
            <h3>reviewcount +</h3>
            <h3>difficulty level</h3>
            <h3>ingredients</h3>
            <h3>instruction</h3>
            
        </div>
    )
}

export default Recipie;