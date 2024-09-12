const ProfileInfo = ({ user, showitem, setshowindex }) => {


  return (
    <div >
      <div className="text-[3vw] ">
        <h1>Name: {user?.name}</h1>
        <h1>Mail: {user?.email}</h1>
        <h1>Phone: {user?.phone}</h1>
        <h1>Website: {user?.website}</h1>
        <h1>Company: {user?.company?.name}</h1>
      </div>
    </div>

  )
}

export default ProfileInfo