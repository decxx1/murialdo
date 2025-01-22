export default function Menu2({dropdownId, isMobile}) {
    return (
        <>
            <li>
                <button id={"dropdownActivitiesButton"+dropdownId} data-dropdown-toggle={"dropdownActivities"+dropdownId} className={`${isMobile ? 'hover:bg-light hover:text-primary w-full px-4 py-2 rounded-xl' : ''} inline-flex items-center`} type="button">
                    Actividades 
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id={"dropdownActivities"+dropdownId} className="z-10 hidden bg-primary divide-y divide-light rounded-xl shadow w-52 lg:w-72 xl:w-96">
                    <ul className="py-2 text-lg lg:text-xl xl:text-2xl text-white" aria-labelledby={"dropdownActivitiesButton"+dropdownId}>
                        <li>
                            <a href="/actividades/aerobic" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Aerobic</a>
                        </li>
                        <li>
                            <a href="/actividades/aerobox" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Aerobox</a>
                        </li>
                        <li>
                            <a href="/actividades/full-body" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Full body</a>
                        </li>
                        <li>
                            <a href="/actividades/patinaje" className="block px-4 py-2 lg:py-4 hover:bg-light hover:text-primary">Patinaje artístico</a>
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
                <a href="/nosotros" className={isMobile ? 'hover:bg-light hover:text-primary w-full px-4 py-2 rounded-xl' : ''}>Contacto</a>
            </li>
        </>
    )
}