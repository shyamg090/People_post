import { useContext, useState } from "react"
import { ContextData } from "../../contextAPI/Context"
import ProfileInfo from "./ProfileInfo"

import { FaAngleDown , FaAngleUp } from "react-icons/fa";


const Profile = () => {

    const { users } = useContext(ContextData);
    const [collapse, setCollapse] = useState(false)
    const [showindex, setshowindex] = useState(null)

    const show = (index)=>{

        setshowindex(index)
        setCollapse(!collapse)
        
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">

            {
                users.slice(0,5).map((item,index) => {
                    return (
                        <div className="w-6/12 border-4 shadow-2xl rounded-md">

                            <div className="flex items-center justify-evenly">
                            <img src={`https://avatar.iran.liara.run/public/${item.id}`} alt="profile image" className="lg:w-[10vw]"></img>

                                <h1 className="text-[3vw] ">
                                    {item?.username}
                                </h1>
                                <FaAngleDown className="w-[3vw] " onClick={() => show(index)} />
                            </div>

                            {collapse && <ProfileInfo user={item} key={item.id} showitem={index === showindex  && true} setshowindex = { () => setshowindex(index) } />
                }
                        </div>
                    )
                })
            }





        </div>
    )
}

export default Profile