import { useEffect } from "react"

const useProfile = (id) => {

    useEffect(()=>{
        getProfile()
    },[])
    const getProfile = async  ()=>{
        const data = await fetch(`https://avatar.iran.liara.run/public/${id}`)
        console.log(data);
    }

  return (
    <div>

    </div>
  )
}

export default useProfile
