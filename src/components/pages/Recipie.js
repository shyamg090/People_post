import { useEffect, useState } from "react";
import { foodRecipie } from "../../utils/constant";
import { useParams } from "react-router-dom";

import ShimPage from "../bodycom/shimmer/ShimPage";

const Recipie = () => {

    const [recipie, setRecipie] = useState(null)

    const params = useParams();
    // console.log(params.id);

    useEffect(() => {
        fetchRecipie()
    }, [])

    const fetchRecipie = async () => {
        const data = await fetch(foodRecipie);
        const json = await data.json();
        console.log(json);

        const [ recipie_data ] = json.filter((rec) => {
            return rec.id == params.id;
        })
        console.log(recipie_data);

        setRecipie(recipie_data);
    }

    if(recipie == null){
        return <ShimPage/>
    }

    return (
            <div className="h-screen">
                <h1> {recipie?.name}</h1>
                <h2>{recipie?.cookTimeMinutes}</h2>
                <h3> {recipie?.tags}</h3>
                <h3>{recipie?.rating}</h3>
                <h3>{recipie?.reviewCount}+</h3>
                <h3>{recipie?.difficulty} level</h3>
                <h3>{recipie?.ingredients?.join('    ')}</h3>
                <h3>{recipie?.instructions?.join(" , ")}</h3>
            </div>
    )
}

export default Recipie;