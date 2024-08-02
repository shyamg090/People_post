const Burger = () => {
  return (
    <div className=" top-0">
    <div className=" items-center justify-start w-full p-7">
        <img className=" sticky top-[10rem]  origin-bottom-left -rotate-12   w-[18rem] h-[11rem]  z-[26] " src={require("../assets/burger/1.png")}></img>
        <img className="sticky top-[12rem]  origin-top-right rotate-12 mt-10  w-[15rem] h-[10rem]  z-[25] " src={require("../assets/burger/2.png")}></img>
        <img className="sticky top-[14rem]  origin-bottom-left -rotate-12 w-[15rem] h-[10rem]  z-[24] " src={require("../assets/burger/3.png")}></img>
        <img className="sticky top-[18rem]  origin-top-right rotate-12 w-[15rem] h-[10rem]  z-[23] " src={require("../assets/burger/4.png")}></img>
        <img className="sticky top-[20rem]  origin-bottom-left -rotate-12  w-[15rem] h-[10rem]  z-[22] " src={require("../assets/burger/5.png")}></img>
        <img className="sticky top-[24rem]  origin-bottom-left -rotate-12  w-[18rem] h-[10rem]  z-[21] " src={require("../assets/burger/6.png")}></img>
    </div>
    </div>

  )
}

export default Burger;