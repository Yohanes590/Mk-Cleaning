import bac from '../assets/bac.jpg'
import { FaChevronRight } from "react-icons/fa";
import './animation-js';
function Home_landing() {
    return (<>
        <div id='grad' className='opacity-0 transition-all duration-1000 absolute z-10 flex items-center w-full h-[700px] text-white justify-center bg-gradient-to-t from-yellow-700 to-transparent'>
            <div className='text-center'>
                <h1 id='text1' className='text-[60px] opacity-0 transition-all duration-1000 mt-[40px]'>Spotless Homes, Exceptional Service</h1>
                <h2 id='text2' className='text-[30px] text-center  opacity-0 transition-all duration-1000 mt-[40px]'>Experience a cleaner, healthier space with our trusted cleaning solutions.<br /></h2>
                <p id='text3' className='text-[25px]  opacity-0 transition-all duration-1000 mt-[40px]'>We offer residential and commercial cleaning services tailored to your needs.</p>
                <div className="flex justify-center">
                    <button id='button1' className=' opacity-0 border-2  border-white w-[200px] mt-[20px] cursor-pointer h-[40px] rounded-2xl transition-all duration-200 hover:bg-white hover:text-black flex justify-center items-center'>
                        Explore More <FaChevronRight /> </button>
                </div>
            </div>
        </div>
        <div>
            <img id='bg' className='scale-[1.1] opacity-0 transition-all duration-5000 w-full h-[700px] object-cover fill-transparent filter brightness-50' src={bac} />
        </div>
    </>)
}

export default Home_landing