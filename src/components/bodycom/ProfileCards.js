import { useState } from "react";
import ProfileInfo from "./ProfileInfo"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const ProfileCards = ({info}) => {
    const [collapse, setCollapse] = useState(false)
    const [showindex, setshowindex] = useState(null)

    const show = ()=>{

        // setshowindex(index)
        console.log('clicked');
        setCollapse(!collapse)
        
    }

    return (
        <div className="w-6/12 border-2 border-black shadow-2xl rounded-tr-xl lg:rounded-tr-[2vw] lg:rounded-bl-[2vw] p-4 cursor-pointer ">

            <div className="flex items-center justify-evenly">
                <img src={`https://avatar.iran.liara.run/public/${info.id}`} alt="profile image" className="lg:w-[10vw]"></img>

                <h1 className="text-[3vw] ">
                    {info?.username}
                </h1>
                <FaAngleDown className="w-[3vw] " onClick={show} />
            </div>

            {
                collapse && <ProfileInfo user={info} key={info.id} />
            }
            
        </div>
    )
}

export default ProfileCards