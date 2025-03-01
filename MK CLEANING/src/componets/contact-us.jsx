import Contact from '../assets/contact.svg'
function ContactUs() {
    return (<>

        <div name='contact' className="h-screen w-full flex justify-evenly items-center flex-wrap">


            <div>
                <center>
                    <h1 className="text-[30px] font-bold">Contact <span className="text-yellow-500">Us</span></h1><br />
                </center>
                <input type="text" placeholder="Your Name" className="w-[250px] md:w-[550px] pl-4 h-[50px] bg-amber-100 outline-0 border-amber-100 border-2 text-gray-700" /><br /><br />
                <input type="email" placeholder="Your Email" className="w-[250px] md:w-[550px] pl-4 h-[50px] bg-amber-100 outline-0 border-amber-100 border-2 text-gray-700" /><br /><br />
                <textarea placeholder="Your Email" className="w-[250px] md:w-[550px] pl-4 h-[250px] pt-[20px] bg-amber-100 outline-0 border-amber-100 border-2 text-gray-700" /><br /><br />
                <button className="w-[250px] md:w-[550px] h-[40px] bg-amber-300 cursor-pointer text-yellow-600 transition-all duration-600 hover:bg-amber-600 hover:text-white">Send Message</button>
            </div>

            <div className='mt-[40px] xl:mt-[0px]'>
                <img src={Contact} className='w-[80%]' />
            </div>


        </div>

    </>)
}

export default ContactUs