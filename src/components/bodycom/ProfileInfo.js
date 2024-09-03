const ProfileInfo = ({user, showitem, setshowindex}) => {

    // const handleclick = () =>{
    //     setshowindex()
    // }

  return (
    <div >
    {
        showitem && <div className="text-[3vw] ">
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.phone}</h1>
        <h1>{user?.website}</h1>
        <h1>{user?.company?.name}</h1>
    </div>
    }
    </div>
    
  )
}

export default ProfileInfo