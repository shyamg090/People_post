import { bannerImg1 } from '../../utils/constant';
import { bannerImg2 } from '../../utils/constant';


const Banner = () => {
    return (
        <div>


            <div className='w-full min-h-[100vh] bg-cover bg-top sticky  bottom-[0rem]  -z-[1]' style={{ backgroundImage: `url(${bannerImg1}` }}  >

            </div>
            <div className='w-full h-screen bg-cover bg-bottom sticky bottom-[0rem]  -z-[2]' style={{ backgroundImage: `url(${bannerImg2}` }} >

            </div>
        </div>
    )
}

export default Banner