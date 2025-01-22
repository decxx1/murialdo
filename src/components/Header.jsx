import { useEffect,useState } from "react";
import Menu1 from "@/components/Menu1";
import Menu2 from "@/components/Menu2";
export default function Header() {

    const [ scrolled, setScrolled ] = useState(window.scrollY > 209);
    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768);
    const [ showNavMobile, setShowNavMobile ] = useState(false);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 640px)");

        const handleScroll = () => {
            setScrolled(window.scrollY > 209);
        };

        const handleMediaChange = (e) => {
            setIsMobile(!e.matches);
        };

        // Initial setup
        if (mediaQuery.matches) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }

        // Attach listeners
        window.addEventListener("scroll", handleScroll);
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);
    
    const imgClass = () => {
        if (isMobile && !scrolled){
            return "w-32";
        }else if (isMobile && scrolled){
            return "w-20 drop-shadow-[0_4px_3px_rgba(255,255,255,0.07)]";
        }else if(!isMobile && scrolled){
            return "w-40 drop-shadow-[0_4px_3px_rgba(255,255,255,0.07)]";
        }else if(!isMobile && !scrolled){
            return "w-80 lg:w-96";
        }
    }
    const divImgClass = () => {
        if (isMobile && !scrolled){
            return "bg-[#14337f] py-10 px-3 mt-8 w-full rounded-3xl h-20 relative flex flex-row items-center justify-between";
        } else if (isMobile && scrolled){
            return "bg-[#14337f] py-10 px-3 mt-4 w-full rounded-3xl h-20 relative flex flex-row items-center justify-between";
        }else if(!isMobile && scrolled){
            return "-mx-12";
        }else if(!isMobile && !scrolled){
            return "mx-2 -mb-12 lg:mx-10 xl:mx-20";
        }
    }

    const dropdownNavClass = () => {
        if(!isMobile){
            return "hidden";
        }

        if(!showNavMobile){
            return "hidden";
        }
        if(scrolled){
            return "top-24"
        }else {
            return "top-32";
        }
        
    }
    return(
        <>
            <div className={`${scrolled ? "mt-[171px]" : ""}`}></div>
            <header className={`${scrolled ? "sticky" : ""} container mx-auto top-0 z-50 transition-[margin] duration-300`}>
                <div className={`${scrolled ? "" : "py-4"} flex justify-between items-center transition-[margin] duration-300`}>
                    <nav 
                        className={`${isMobile ? "hidden" : ""} bg-[#14337f] py-6 w-full rounded-3xl`}
                    >
                        <ul className="flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 text-white text-xl lg:text-2xl xl:text-3xl">
                            <Menu1 dropdownId="1" />
                        </ul>
                    </nav>
                    
                    <div className={`${divImgClass()} transition-[margin] duration-300 z-[60]`}>
                        <div className={`${isMobile ? "w-10 px-1" : "hidden"} ${scrolled ? "hidden" : ""}`}></div>
                        <a href="/" >
                            <img
                                src="/images/logo/club-murialdo.png"
                                alt="Club Murialdo"
                                className={`${imgClass()} transition-all duration-300`}
                            />
                        </a>
                        <button onClick={() => setShowNavMobile(!showNavMobile)} className={`${isMobile ? "" : "hidden"} text-white hover:text-primary hover:bg-light rounded-xl px-1 py-1`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-10" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75M2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10" clipRule="evenodd"/></svg>
                        </button>
                        <div className={`${dropdownNavClass()} bg-[#14337f] py-6 w-full rounded-3xl absolute left-0`}>
                            <ul className="flex flex-col items-start justify-center gap-8 text-white text-2xl px-4">
                                <Menu1 dropdownId="2" isMobile={true} />
                                <Menu2 dropdownId="2" isMobile={true} />
                            </ul>
                        </div>
                    </div>
                    
                    <nav
                        className={`${isMobile ? "hidden" : ""} bg-[#14337f] py-6 w-full rounded-3xl`}
                    >
                        <ul className="flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 text-white text-xl lg:text-2xl xl:text-3xl">
                            <Menu2 dropdownId="1" />
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
