import bac from '../assets/bac.jpg'
import { FaChevronRight } from "react-icons/fa";
function Home_landing() {
    return (<>
        <div className='absolute z-10 flex items-center w-full h-[700px] text-white justify-center bg-gradient-to-t from-yellow-700 to-transparent'>
            <div className='text-center'>
                <h1 className='text-[60px] animate-scaleUp '>Spotless Homes, Exceptional Service</h1>
                <h2 className='text-[30px] text-center '>Experience a cleaner, healthier space with our trusted cleaning solutions.<br /></h2>
                <p className='text-[25px]'>We offer residential and commercial cleaning services tailored to your needs.</p>
                <div className="flex justify-center">
                    <button className='border-2 border-white w-[200px] mt-[20px] cursor-pointer h-[40px] rounded-2xl transition-all duration-200 hover:bg-white hover:text-black flex justify-center items-center'>
                        Explore More <FaChevronRight /> </button>
                </div>
            </div>
        </div>
        <div>
            <img className='w-full h-[700px] object-cover fill-transparent filter brightness-50' src={bac} />
        </div>
    </>)
}

export default Home_landing