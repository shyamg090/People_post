import { useEffect, useState } from "react";
// import { foodPost } from "../../utils/constant";
import { useParams } from "react-router-dom";

import ShimPage from "../bodycom/shimmer/ShimPage";
import usePost from '../../utils/usePost'

const Post = () => {
    const {id} = useParams();

    const recipie = usePost(id);


    if(recipie == null){
        return <ShimPage/>
    }

    return (
            <div className="h-screen">
                
            </div>
    )
}

export default Post;