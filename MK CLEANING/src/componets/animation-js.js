function animeFunction() {
    setTimeout(() => {
        document.getElementById("text1").style.opacity = "1"
        document.getElementById("text1").style.marginTop = "0px"
    }, 300);

    setTimeout(() => {
        document.getElementById("text2").style.opacity = "1"
        document.getElementById("text2").style.marginTop = "0px"
    }, 500)

    setTimeout(() => {
        document.getElementById("text3").style.opacity = "1"
        document.getElementById("text3").style.marginTop = "0px"
    }, 500)

    setTimeout(() => {
        document.getElementById("button1").style.opacity = "1"
    }, 1000)

    setTimeout(() => {
        document.getElementById("bg").style.opacity = "1"
        document.getElementById("bg").style.scale = "1.0"
        document.getElementById("grad").style.opacity = "1"
    }, 100)

    setTimeout(()=>{
        document.getElementById("sub-nav").style.marginTop = "0"
    },100)

    setTimeout(()=>{
        document.getElementById("nav-bar").style.height = "80px"
        document.getElementById("nav-bar").style.opacity = "1"
        document.getElementById("nav-bar").style.background = "white"
    },600)
}

export function portScroll (){
    document.addEventListener("scroll" , ()=>{
        const ScrollY = scrollY;
        if(ScrollY > 2504){
            document.getElementById("auto-height").style.opacity="1"
        }
    })
}

export const AboutScroll = ()=>{
    document.addEventListener("scroll" , ()=>{
        const Yaxis = scrollY;
        if(Yaxis > 748){
            document.getElementById("About-text").style.opacity="1"
            document.getElementById("About-text").style.marginTop="0px"
            setTimeout(() => {
                document.getElementById("box-1").style.opacity="1"
                document.getElementById("box-1").style.height="250px" 
                document.getElementById("box-2").style.opacity="1"
                document.getElementById("box-2").style.scale="1.0" 
            }, 100);
            setTimeout(() => {
                document.getElementById("about-img").style.opacity="1"
                document.getElementById("about-img").style.scale="1.0"   
            }, 200);
        }
    })
}



export const serviceScroll = ()=>{
    document.addEventListener("scroll" ,()=>{
        const Yaxis = scrollY;
        if(Yaxis > 1539){
            document.getElementById("card1").style.marginTop="0px"
            document.getElementById("card1").style.opacity="1"
            setTimeout(() => {
                document.getElementById("card2").style.marginTop="0px"
                document.getElementById("card2").style.opacity="1"  
            }, 400);
            setTimeout(() => {
                document.getElementById("card3").style.marginTop="0px"
                document.getElementById("card3").style.opacity="1"  
            }, 700);
        }

    })
}


export function ContactAnime (){
    document.addEventListener("scroll",()=>{
        const Yaxis = scrollY;
        if(Yaxis > 3420){
        document.getElementById("contactInput").style.opacity="1"
        document.getElementById("contactInput").style.marginTop="0px"
        document.getElementById("about-icon").style.marginLeft="0px"
        document.getElementById("about-icon").style.opacity="1"
        }
    })
}

export const LoadingAnimation = ()=>{
    setTimeout(() => {
        document.querySelector('.loading-cover').style.display="none"
    }, 2000);
    setTimeout(()=>{
        animeFunction()
    },1500)
}