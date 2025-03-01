import { useState, useEffect } from "react"
import { InfoArray } from "./main-json"
import { portScroll } from './animation-js'
function PortFolio() {
    const [arrayMethod, setArray] = useState([])
    useEffect(() => {
        setArray(InfoArray)
    }, [])
    portScroll()

    const FetchPortfolio = (types) => {
        document.getElementById("show-Array").style.opacity = "0"
        document.getElementById("show-Array").style.marginTop = "100px"
        const filterData = InfoArray.filter(itemTypes => itemTypes.type === types)
        setTimeout(() => {
            document.getElementById("show-Array").style.opacity = "1"
            document.getElementById("show-Array").style.marginTop = "50px"
            setArray(filterData)
        }, 500)
    }

    return (<>
        <div name="portfolio" id="auto-height" className="h-auto transition-all duration-1000 opacity-0">
            <center>
                <div className="w-[90%] md:w-[80%] h-auto lg:h-[60px] bg-amber-300 mt-[40px] rounded-[5px] flex items-center justify-evenly flex-wrap">
                    <div className="cursor-pointer w-[100%] lg:w-[250px] bg-amber-400 duration-600 lg:bg-white transition-all hover:bg-amber-600 h-[40px] md:h-[35px] flex justify-center items-center text-white lg:text-black hover:text-white" onClick={() => FetchPortfolio('home')}><h2>HOME CLEANING</h2></div>
                    <div className="cursor-pointer w-[100%] lg:w-[250px] bg-amber-400 duration-600 lg:bg-white transition-all hover:bg-amber-600 h-[40px] md:h-[35px] flex justify-center items-center text-white lg:text-black hover:text-white" onClick={() => FetchPortfolio('office')}><h2>OFFICE CLEANING</h2></div>
                    <div className="cursor-pointer w-[100%] lg:w-[250px] bg-amber-400 duration-600 lg:bg-white transition-all hover:bg-amber-600 h-[40px] md:h-[35px] flex justify-center items-center text-white lg:text-black hover:text-white" onClick={() => FetchPortfolio('build')}><h2>BULDING CLEANING</h2></div>
                    <div className="cursor-pointer w-[100%] lg:w-[250px] bg-amber-400 duration-600 lg:bg-white transition-all hover:bg-amber-600 h-[40px] md:h-[35px] flex justify-center items-center text-white lg:text-black hover:text-white" onClick={() => FetchPortfolio('car-wash')}><h2>CAR WASH</h2></div>
                </div>
            </center>


            <div id="show-Array" className="transition-all duration-600 flex flex-wrap justify-evenly items-center mt-[50px]">

                {
                    arrayMethod.map((item, index) => {
                        return (
                            <div className="w-[90%] md:w-[400px] md:h-[350px] bg-amber-50 mt-10" key={index}>

                                <div className="cursor-default z-40 scale-[0.8] opacity-0 transition-all duration-600 hover:opacity-100 hover:scale-[1.0] bg-gradient-to-t from-black to-transparent text-center absolute w-[90%] h-[230px] md:w-[400px] md:h-[350px] flex items-center justify-center text-white" >
                                    <div className="w">
                                        <h1 className="text-[30px]">{item.title}</h1><br />
                                        <p>{item.discription}</p>
                                        <p></p>
                                    </div>
                                </div>

                                <div >
                                    <img className="w-[100%] h-[230px] md:w-[400px] z-10 md:h-[350px] object-cover brightness-[50%] rounded-[5px]" src={item.image_path} />
                                </div>
                            </div>

                        )
                    })}
            </div >
        </div >
    </>)
}
export default PortFolio