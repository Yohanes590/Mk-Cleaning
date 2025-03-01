import { CiLink } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Fotter() {
    return (<>

        <div className="w-full h-[400px] bg-amber-500 flex justify-evenly items-center flex-wrap text-white">


            <div className="text-[18px]">
                <h2 className="cursor-default flex items-center font-bold"><CiLink size={30} /> &nbsp; Use Full Links</h2>
                <hr /><br />
                <a href="">Home</a><br />
                <a href="">About</a><br />
                <a href="">Service</a><br />
                <a href="">Portfolio</a><br />
                <a href="">Contact Us</a><br />
            </div>


            <div className="text-[18px]">
                <h2 className="cursor-default flex items-center font-bold"><IoLocationOutline size={30} /> &nbsp; Location &nbsp; &nbsp;</h2>
                <hr />
                <p className="cursor-default">Ethiopia , A.A Bole Branch 1</p><br />
                <div className="flex justify-between">
                    <BsTelegram size={27} /> <FaInstagram size={27} /><FaFacebook size={27} /><FaLinkedin size={27} />
                </div>

            </div>

            <div className="text-[18px]">
                <h2 className="cursor-default flex items-center font-bold"><CiLink size={30} /> &nbsp; Subscribe &nbsp;&nbsp;&nbsp;&nbsp;</h2>
                <hr /><br />
                <input type="email" placeholder="Email" className="text-white outline-0 pl-[10px] border-white border-2 h-[35px]" />
                <button className="bg-white text-black cursor-pointer h-[35px]">Subscribe</button>
            </div>

        </div>

    </>)
}

export default Fotter