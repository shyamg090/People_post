import { useContext } from "react"
import { ContextData } from "../../contextAPI/Context"

const Categories = () => {
    const {history,crime, fiction,mystery, nostalgia, adventure, hope } = useContext(ContextData)

    const categories = ["History", "Crime", "Fiction", "Mystery", "Nostalgia", "Adventure", "Hope"]
    const images = [history,crime, fiction,mystery, nostalgia, adventure, hope ]
    
    return (
        <div className="grid grid-cols-1 grid-rows-none lg:grid-cols-2 lg:place-items-center gap-6 lg:grid-rows-none mx-14 mt-10">
            {
                categories.map((item, id) => {
                    return (
                        <div className="min-w-[15rem] lg:max-w-[40vw] flex flex-col items-center justify-center uppercase bg-[#ffffff] p-2 lg:p-8 rounded-lg border-2 border-black lg:gap-4 gap-4 cursor-pointer">
                            <div className="w-[65vw] h-[20vh] lg:w-[30vw] lg:h-[50vh] bg-cover bg-center rounded-lg duration-300 overflow-hidden"    style={{ backgroundImage: `url(${images[id]})` }}> 
                            
                            </div>
                            {/* <img src={images[id]} alt={item}></img> */}
                            <h1 className="lg:w-full lg:h-full flex items-center justify-center text-[8vw] lg:text-[3vw]">{item}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories;