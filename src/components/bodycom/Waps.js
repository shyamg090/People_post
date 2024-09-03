import { useContext, useState } from "react"
import { ContextData } from "../../contextAPI/Context"
import WapsCard from "./WapsCard";
import ShimCard from './shimmer/ShimCard';

const Waps = () => {

    const { posts, setposts, } = useContext(ContextData)

    const [load, setLoad] = useState(6);
    const filterTags = ["History", "Crime", "Fiction", "Mystery", "Nostalgia", "Adventure", "Hope"]

    const addmore = () => {
        setLoad(load + 6);
    }
    const addLess = () => {
        if (load > 6) {
            setLoad(load - 6);
        }
        setLoad(6)
    }

    return (
        <div className="flex flex-col items-center gap-6">

            <h1 className="text-center text-[7vw] lg:text-[8vw]">
                What People are Sharing??
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-2">
                {
                    filterTags.map((item, index) => {
                        return <span className="bg-black text-white p-3 rounded-lg text-[1.5vw] " key={index}>{item}</span>
                    })
                }
            </div>

            {posts?.length === 0 ? <ShimCard /> :
                <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-none gap-8 p-4 mt-10">
                    {
                        posts.slice(0, load).map((item) => {
                            return (<WapsCard posts={item} key={item?.id} />)
                        })
                    }
                </div>}

            <div className="flex items-center justify-center gap-4">
                {
                    load == 6 ? <></> : <button className="bg-black text-white text-[2vw] rounded-lg p-3 place-items-center" onClick={addLess}>Less</button>
                }
                <button className="bg-black text-white text-[2vw] rounded-lg p-3 place-items-center" onClick={addmore}>More</button>
            </div>
        </div>

    )
}

export default Waps