import { Dropdown } from 'flowbite';
import { useState, useEffect } from "react";

export default function Menu1({dropdownId}) {
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
            <a href="/" className='max-sm:hover:bg-light max-sm:hover:text-primary max-sm:w-full px-2 py-2 rounded-xl sm:hover:bg-primary/70'>Inicio</a>
        </li>
        <li>
            <div className="inline-flex items-center group max-sm:w-full max-sm:rounded-xl">
                <a 
                    href="/deportes" 
                    className="cursor-pointer max-sm:hover:text-primary sm:hover:bg-primary/70 pl-2 pr-1 py-2 rounded-l-xl max-sm:group-hover:text-primary max-sm:group-hover:bg-light"
                >
                    Deportes
                </a>
                <button
                    id={"dropdownSportButton"+dropdownId}
                    className="inline-flex items-center cursor-pointer sm:hover:bg-primary/70 pl-1 pr-2 py-4 rounded-r-xl max-sm:group-hover:text-primary max-sm:group-hover:bg-light"
                    type="button"
                >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
            </div>
            <div id={"dropdownSport"+dropdownId} className="z-50 hidden bg-primary divide-y divide-light rounded-xl shadow w-52 lg:w-72 xl:w-96">
                <ul className="py-2 text-lg lg:text-xl xl:text-2xl text-white" >
                    <li>
                        <a href="/deportes/atletismo" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Atletismo</a>
                    </li>
                    <li>
                        <a href="/deportes/basquet" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Básquet</a>
                    </li>
                    <li>
                        <a href="/deportes/futbol" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Fútbol</a>
                    </li>
                    <li>
                        <a href="/deportes/futsal" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Fútsal</a>
                    </li>
                    <li>
                        <a href="/deportes/hockey-patines" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Hockey sobre patines</a>
                    </li>
                    <li>
                        <a href="/deportes/hockey-cesped" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Hockey sobre césped</a>
                    </li>
                    <li>
                        <a href="/deportes/patinaje-artistico" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Patinaje artístico</a>
                    </li>
                    <li>
                        <a href="/deportes/tenis" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Tenis</a>
                    </li>
                    <li>
                        <a href="/deportes/voley" className="block px-4 py-2 lg:py-4 hover:bg-light hover:rounded-2xl hover:text-primary">Vóley</a>
                    </li>
                </ul>
            </div>
        </li>
        </>
    )
}