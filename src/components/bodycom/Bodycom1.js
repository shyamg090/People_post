import ItemRecommend from './ItemRecommend';
import bgImage from '../assets/header-images/herobg.png'



const Bodycom1 = () => {
    
    // const slider = document.querySelector('.slider')

    // const options = {
    //     root : slider,
    //     threshold : 1,
    // }

    // const observer = new IntersectionObserver((entries)=>{
    //     console.log(entries);
    // }, options)


    // observer.observe(document.getElementById('name'))

    return (
        <div className='flex flex-col slider'>
            <div className='mx-24'>
                <div className=' flex flex-col items-start justify-center z-20 gap-10 mt-10' >
                    <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold font-serif '>
                        <h1>Whats on your mind</h1>
                    </div>

                    <ItemRecommend />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='relative top-10 z-[10] w-full h-[20rem]'>
                <path fill="#81C3C6" fill-opacity="1" d="M0,128L34.3,117.3C68.6,107,137,85,206,117.3C274.3,149,343,235,411,245.3C480,256,549,192,617,154.7C685.7,117,754,107,823,117.3C891.4,128,960,160,1029,149.3C1097.1,139,1166,85,1234,80C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Bodycom1