import { bannerImg1 } from '../../utils/constant';
import { bannerImg2 } from '../../utils/constant';


const Banner = () => {



    return (
        <div className=' scroll-smooth'>
            
            <div className='w-full min-h-[100vh] flex flex-col items-center justify-center bg-cover bg-top sticky  bottom-[0rem]  -z-[1]' id='home' style={{ backgroundImage: `url(${bannerImg1}` }}  >
                <h1 className='lg:text-[6rem] text-[4rem] text-center  text-black'>Welcome to WeFood</h1>
                <h2 className='lg:text-[2rem] text-[1rem] text-center text-black' >We help your to prepare your perfect recipie for all the occation</h2>
            </div>
            <div className='w-full h-screen flex flex-col items-center justify-center bg-cover bg-bottom sticky bottom-[0rem]  -z-[2] mt-[5rem]' id='about' style={{ backgroundImage: `url(${bannerImg2}` }} >
                <div className=' w-full h-full flex flex-col items-center justify-center gap-4 backdrop-blur-sm p-5'>
                <h1 className='lg:text-[6rem] text-[3rem]  text-center text-black'>Why  choose us ? </h1>
                    <ul className='lg:text-[2rem] text-[1.5rem] flex flex-col items-center justify-center gap-4 font-sans'>
                        <li className='bg-[#ff02b7bb] w-full translate-x-10 p-2 rounded-lg text-center'>Global recipes</li>
                        <li className='bg-[#06b5d4b6] w-full -translate-x-10 p-2 rounded-lg text-center'>Famous chefs' recipes</li>
                        <li className='bg-[#ffb302c9] w-full translate-x-10 p-2 rounded-lg text-center'>Perfect ingredients</li>
                        <li className='bg-[#14b8a5bc] w-full -translate-x-10 p-2 rounded-lg text-center'>Clear instructions</li>
                        <li className='bg-[#ef4444b4] w-full translate-x-10 p-2 rounded-lg text-center'>Text-to-speech feature</li>
                    </ul>
                </div>
            </div>

            {/* <div className='w-full min-h-[100vh] bg-cover bg-top sticky  bottom-[0rem]  -z-[3]' id='skills' style={{ backgroundImage: `url(${bannerImg1}` }}  >

            </div>
            <div className='w-full h-screen bg-cover bg-bottom sticky bottom-[0rem]  -z-[4]' style={{ backgroundImage: `url(${bannerImg2}` }} >

            </div> */}
        </div>
    )
}

export default Banner