import { Dropdown } from 'flowbite';
import { useState, useEffect } from "react";

export default function Menu1({dropdownId, isMobile}) {
    const [dropdown, setDropdown] = useState(null);

    useEffect(() => {
        // set the dropdown menu element
        const $targetEl = document.getElementById("dropdownSport" + dropdownId);

        // set the dropdown button element
        const $triggerEl = document.getElementById("dropdownSportButton" + dropdownId);

        if ($targetEl && $triggerEl) {
            // options with default values
            const options = {
                placement: 'bottom',
                triggerType: 'click',
                offsetSkidding: 0,
                offsetDistance: 10,
                delay: 300,
                ignoreClickOutsideClass: false,
                onHide: () => {
                    //console.log('dropdown has been hidden');
                },
                onShow: () => {
                    //console.log('dropdown has been showed');
                },
                onToggle: () => {
                    //console.log('dropdown has been toggled');
                },
            };

            const dropdownInstance = new Dropdown($targetEl, $triggerEl, options);
            setDropdown(dropdownInstance);
        }
    }, []);
    return (
        <>
        <li>
            <a href="/" className={isMobile ? 'hover:bg-light hover:text-primary w-full px-4 py-2 rounded-xl' : ''}>Inicio</a>
        </li>
        <li>
            <button id={"dropdownSportButton"+dropdownId} className={`${isMobile ? 'hover:bg-light hover:text-primary w-full px-4 py-2 rounded-xl' : ''} inline-flex items-center`} type="button">
                Deportes 
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id={"dropdownSport"+dropdownId} className="z-10 hidden bg-primary divide-y divide-light rounded-xl shadow w-52 lg:w-72 xl:w-96">
                <ul className="py-2 text-lg lg:text-xl xl:text-2xl text-white" >
                    <li>
                        <a href="/deportes/atletismo" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Atletismo</a>
                    </li>
                    <li>
                        <a href="/deportes/basquet" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Básquet</a>
                    </li>
                    <li>
                        <a href="/deportes/futbol" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Fútbol</a>
                    </li>
                    <li>
                        <a href="/deportes/futsal" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Fútsal</a>
                    </li>
                    <li>
                        <a href="/deportes/hockey-patines" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Hockey sobre patines</a>
                    </li>
                    <li>
                        <a href="/deportes/hockey-cesped" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Hockey sobre césped</a>
                    </li>
                    <li>
                        <a href="/deportes/patinaje" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Patinaje artístico</a>
                    </li>
                    <li>
                        <a href="/deportes/tenis" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Tenis</a>
                    </li>
                    <li>
                        <a href="/deportes/voley" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Vóley</a>
                    </li>
                </ul>
            </div>
        </li>
        </>
    )
}