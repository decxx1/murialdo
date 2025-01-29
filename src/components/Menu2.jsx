import { Dropdown } from 'flowbite';
import { useState, useEffect } from "react";

export default function Menu2({dropdownId, isMobile}) {
    const [dropdown, setDropdown] = useState(null);

    useEffect(() => {
        // set the dropdown menu element
        const $targetEl = document.getElementById("dropdownActivities" + dropdownId);

        // set the dropdown button element
        const $triggerEl = document.getElementById("dropdownActivitiesButton" + dropdownId);

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
                <button id={"dropdownActivitiesButton"+dropdownId} className={`${isMobile ? 'hover:bg-light hover:text-primary w-full px-4 py-2 rounded-xl' : ''} inline-flex items-center`} type="button">
                    Actividades 
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id={"dropdownActivities"+dropdownId} className="z-50 hidden bg-primary divide-y divide-light rounded-xl shadow w-52 lg:w-72 xl:w-96">
                    <ul className="py-2 text-lg lg:text-xl xl:text-2xl text-white" >
                        <li>
                            <a href="/actividades/aerobic" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Aerobic</a>
                        </li>
                        <li>
                            <a href="/actividades/aerobox" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Aerobox</a>
                        </li>
                        <li>
                            <a href="/actividades/camping" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Camping</a>
                        </li>
                        <li>
                            <a href="https://escueladeveranomurialdo.com.ar/" target="_blank" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Escuela de verano</a>
                        </li>
                        <li>
                            <a href="/actividades/full-body" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Full body</a>
                        </li>
                        <li>
                            <a href="/actividades/paddle" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Paddle</a>
                        </li>
                        <li>
                            <a href="/actividades/pilates" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Pilates</a>
                        </li>
                        <li>
                            <a href="/actividades/yoga" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Yoga</a>
                        </li>
                        <li>
                            <a href="/actividades/zumba" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Zumba</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="/contacto" className={isMobile ? 'hover:bg-light hover:text-primary w-full px-4 py-2 rounded-xl' : ''}>Contacto</a>
            </li>
        </>
    )
}