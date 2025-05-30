import { useEffect,useState } from "react";
import Menu1 from "@/components/Menu1";
import Menu2 from "@/components/Menu2";
export default function Header() {

    const [ scrolled, setScrolled ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
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
        handleScroll()

        // Attach listeners
        window.addEventListener("scroll", handleScroll);
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);
    
    const imgClass = () => {
        if (scrolled){
            return "max-sm:!w-20 sm:!w-40 drop-shadow-[0px_3px_6px_rgba(0,0,0,0.5)]";
        }else{
            return "";
        }
    }
    const divImgClass = () => {
        
        if (scrolled){
            return "max-sm:!mt-4 sm:!-mx-12 sm:!mb-0";
        }else{
            return "";
        }
    }

    return(
        <>
            <header className={`fixed w-full top-0 z-50 transition-[margin] duration-300`}>
                <div className={`${scrolled ? "" : "py-4"} container mx-auto flex justify-between items-center transition-[margin] duration-300`}>
                    <nav 
                        className="max-sm:hidden bg-header py-4 w-full rounded-3xl"
                    >
                        <ul className="flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 text-white text-xl lg:text-2xl xl:text-3xl">
                            <Menu1 dropdownId="1" />
                        </ul>
                    </nav>
                    
                    <div className={`${divImgClass()} sm:-mb-12 sm:mx-2 lg:mx-10 xl:mx-20 max-sm:mt-8 max-sm:bg-header max-sm:py-10 max-sm:px-3 max-sm:w-full max-sm:h-20 max-sm:rounded-3xl max-sm:relative max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between transition-[margin] duration-300 z-[60]`}>
                        <div className={`${scrolled ? "hidden" : ""} max-sm:w-10 max-sm:px-1 sm:hidden`}></div>
                        <a href="/" >
                            <img
                                src="/images/logo/club-leonardo-murialdo.svg"
                                alt="Club Murialdo"
                                className={`${imgClass()} relative z-[60] max-sm:w-32 sm:w-80 lg:w-96 hover:scale-105 hover:drop-shadow-[0px_3px_6px_rgba(255,255,255,0.5)] transition-all duration-300`}
                            />
                        </a>
                        <button onClick={() => setShowNavMobile(!showNavMobile)} className="sm:hidden text-white hover:text-primary hover:bg-light rounded-xl px-1 py-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75M2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10" clipRule="evenodd"/></svg>
                        </button>
                        <div className={`${showNavMobile ? "" : "hidden"} sm:hidden z-50 bg-header py-6 w-full rounded-3xl absolute left-0 top-24`}>
                            <ul className="flex flex-col items-start justify-center gap-8 text-white text-2xl px-4">
                                <Menu1 dropdownId="2" />
                                <Menu2 dropdownId="2" />
                            </ul>
                        </div>
                    </div>
                    
                    <nav
                        className="max-sm:hidden bg-header py-4 w-full rounded-3xl"
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
