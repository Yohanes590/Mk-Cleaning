import { BsPatchQuestionFill } from "react-icons/bs";
import aboutImage from '../assets/about.svg';
import { FaRegStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
function About_Section() {
    return (<>
        <div name="about" className="bg-gray-200 h-auto md:h-screen flex items-center justify-evenly flex-wrap pt-15">
            <div>
                <h1 className="text-[45px] flex items-center"><BsPatchQuestionFill /> &nbsp;About Us</h1>
                <h1 className="text-[35px] flex">Our Commitment to Cleanliness: </h1><br />
                <h3 className="text-[20px] w-[90%] md:w-[750px]">
                    At Mk Cleaning, we specialize in providing reliable and eco-friendly
                    cleaning services for homes and businesses. Our experienced team
                    ensures every space is spotless, using top-quality products and equipment.
                    Whether it’s a one-time deep clean or regular maintenance, we’re here to make your environment fresh and welcoming!
                </h3>
                <div className="flex justify-evenly flex-wrap cursor-default">
                    <div className="w-[100%] h-[250px] mt-[50px] md:w-[350px] md:h-[250px] sm:w-[250px] bg-white flex justify-center items-center border-b-6 border-black transition-all duration-600 hover:bg-yellow-300">
                        <div className="text-center">
                            <center>
                                <FaRegStar size="45px" />
                                <h1 className="text-[20px]">20 Year Experience</h1>
                            </center>
                        </div>
                    </div>
                    <div className="w-[100%] h-[250px] mt-[50px] md:w-[350px] md:h-[250px] sm:w-[250px] bg-yellow-400 flex justify-center items-center border-b-6 border-black transition-all duration-600 hover:bg-yellow-300">
                        <div className="text-center">
                            <center>
                                <FaClock size="45px" />
                                <h1 className="text-[20px]">Fast With Quality</h1>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="">
                    <img className="w-[450px] mt-[40px] md:mt-[20px]" src={aboutImage} />
                </div>
            </div>
        </div>
    </>)
}

export default About_Section