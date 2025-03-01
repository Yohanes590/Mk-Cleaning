import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Link, Element } from 'react-scroll';
import "./animation-js";
const NavBar = () => {
    const [increaseWidth, setWidth] = useState(true)
    const openMenu = () => {
        if (increaseWidth == true) {
            setWidth(false)
            document.getElementById("nav-bar").style.width = "350px"
        } else {
            setWidth(true)
            document.getElementById("nav-bar").style.width = "0px"
        }
    }

    return (<>
        <div name="home" id="sub-nav" className="transition-all duration-1000 mt-[-50px] text-[10px] md:text-[16px] w-full h-12 bg-yellow-500 flex justify-evenly items-center cursor-default">
            <div className="flex items-center text-white justify-around">
                <FaPhoneSquareAlt />  <p> +251912103308</p>&nbsp;&nbsp;
                <MdEmail />&nbsp; <p>mulugetakassaw71@gmail.com</p>
            </div>
        </div>
        <div id="nav-bar" className=" opacity-0 duration-100 transition-all w-full h-0 flex items-center justify-evenly cursor-default sticky z-50 top-0">
            <div className="text-[25px] "><h2>Mk Cleaing <span className="text-yellow-500">Service</span></h2></div>
            <div className="hidden md:block">
                <Link to="home" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-yellow-400 hover:border-b transition-all duration-600 font-bold">Home</Link>
                <Link to="about" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-yellow-400 hover:border-b transition-all duration-600 font-bold">About</Link>
                <Link to="service" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-yellow-400 hover:border-b transition-all duration-600 font-bold">Service</Link>
                <Link to="portfolio" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-yellow-400 hover:border-b font-bold">Portfolio</Link>
                <Link to="contact" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-yellow-400 hover:border-b transition-all duration-600 font-bold">Contact as</Link>
            </div>
            <div className="block md:hidden">
                <BiMenu size="35" onClick={openMenu} />
            </div>
        </div>

        <div id="nav-bar" className="fixed z-50 overflow-hidden transition-all duration-600 w-[0px] h-full bg-yellow-400 right-0 flex justify-center">
            <div className="pt-20">
                <Link onClick={() => { openMenu() }} to="/" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-[20px] text-white hover:border-b transition-all duration-600 font-bold">Home</Link><br /><br />
                <Link onClick={() => { openMenu() }} to="about" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-[20px] text-white hover:border-b transition-all duration-600 font-bold">About</Link><br /><br />
                <Link onClick={() => { openMenu() }} to="service" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-[20px] text-white hover:border-b transition-all duration-600 font-bold">Service</Link><br /><br />
                <Link onClick={() => { openMenu() }} to="portfolio" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-[20px] text-white hover:border-b font-bold">Portfolio</Link><br /><br />
                <Link onClick={() => { openMenu() }} to="contact" offset={-79} smooth={true} duration={200} className="ml-8 cursor-pointer text-[20px] text-white hover:border-b transition-all duration-600 font-bold">Contact as</Link><br /><br />
            </div>
        </div>
    </>)
}
export default NavBar