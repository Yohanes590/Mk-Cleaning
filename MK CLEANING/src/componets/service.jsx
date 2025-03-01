import { MdCleaningServices } from "react-icons/md";
import sofa from '../assets/sofa.jpg'
import office from '../assets/office.jpg'
import deep from '../assets/deep.jpg'
import { serviceScroll } from "./animation-js";
function ServiceCompo() {
    serviceScroll()
    return (<>
        <div name="service" className="h-auto xl:h-screen bg-yellow-50 flex flex-wrap justify-evenly items-center">
            <div id="card1" className="mt-[100px] opacity-0 w-[100%] lg:w-[400px] overflow-hidden h-[650px] text-yellow-500 bg-white border-b-10 border-yellow-500 transition-all duration-600 hover:bg-yellow-400 hover:text-white cursor-default">
                <img src={sofa} className=" h-[300px] w-[100%] lg:w-[400px] object-cover brightness-[50%] transition-all duration-500 hover:brightness-[100%] hover:scale-[1.05]" />
                <div className="text-center pt-[30px]">
                    <h1 className="text-[35px] flex justify-center items-center">SOFA CLEANING &nbsp;<MdCleaningServices /></h1>
                    <h3 className="text-[25px]">Revive the comfort and beauty of your sofa with our professional cleaning service!</h3>
                    <hr className="h-[6px] text-white bg-amber-50" />
                    <p> At [Mulugeta Cleaning Service], we specialize in deep-cleaning solutions that eliminate stains,
                        dirt, and allergens, leaving your sofa fresh, hygienic, and looking brand new.<br /></p>
                </div>
            </div>
            <div id="card2" className="mt-[100px] opacity-0 w-[100%] lg:w-[400px] overflow-hidden h-[650px] text-yellow-500 bg-white border-b-10 border-yellow-500 transition-all duration-600 hover:bg-yellow-400 hover:text-white cursor-default">
                <img src={office} className=" h-[300px] w-[100%] lg:w-[400px] object-cover brightness-[50%] transition-all duration-500 hover:brightness-[100%] hover:scale-[1.05]" />
                <div className="text-center pt-[30px]">
                    <h1 className="text-[35px] flex justify-center items-center">Office Cleaning &nbsp;<MdCleaningServices /></h1>
                    <h3 className="text-[25px]">Revive the comfort and beauty of your office with our professional cleaning service!</h3>
                    <hr className="h-[6px] text-white bg-amber-50" />
                    <p>   Maintain a clean and productive workspace with our professional
                        office cleaning service. We ensure a healthy environment by sanitizing.<br /></p>
                </div>
            </div>
            <div id="card3" className="mt-[100px] opacity-0 w-[100%] lg:w-[400px] overflow-hidden h-[650px] text-yellow-500 bg-white border-b-10 border-yellow-500 transition-all duration-600 hover:bg-yellow-400 hover:text-white cursor-default">
                <img src={deep} className=" h-[300px] w-[100%] lg:w-[400px] object-cover brightness-[50%] transition-all duration-500 hover:brightness-[100%] hover:scale-[1.05]" />
                <div className="text-center pt-[30px]">
                    <h1 className="text-[35px] flex justify-center items-center">Deep Cleaning &nbsp;<MdCleaningServices /></h1>
                    <h3 className="text-[25px]">Ease the stress of moving with our specialized move-in/move-out cleaning service.</h3>
                    <hr className="h-[6px] text-white bg-amber-50" />
                    <p>We prepare your new home for a fresh start or ensure your old place is spotless for the next occupant.From
                        cleaning inside cabinets to scrubbing floors, we handle all the details for a seamless transition.<br /></p>
                </div>
            </div>
        </div>

    </>)
}
export default ServiceCompo