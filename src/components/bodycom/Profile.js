import { useContext, useState } from "react"
import { ContextData } from "../../contextAPI/Context"
import ProfileCards from "./ProfileCards";



const Profile = () => {

    const { users } = useContext(ContextData);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-[7vw] lg:text-[8vw]">
                People Who Post!!
            </h1>
            {
                users.slice(0, 5).map((item, index) => {
                    return (
                        <ProfileCards info={item} key={item.id} showitems={index===0 ? true : false} />
                    )
                })
            }

        </div>
    )
}

export default Profile