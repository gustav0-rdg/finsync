"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCircleUser, faClockRotateLeft, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { ButtonWithIcon } from '../button/Button';
import { ReactEventHandler, useState } from 'react';

import '../aside/styles.css'

export default function Aside({changePage}:{changePage: React.Dispatch<React.SetStateAction<number>>}){
    const [page, setPage] = useState(1);

    return (
        <aside className="aside">
            <div className='aside__text'>
                <h1 className="text-4xl font-bold">
                Fin
                <span className="text-blue-500">Sync</span>
                </h1>
            </div>
            <ButtonWithIcon 
                icon={faHome} 
                text={"Home"} 
                pageValue={1} 
                currentPage={page} 
                setPageValue={setPage}
                changePage={changePage}
            />
            <ButtonWithIcon 
                icon={faDollarSign} 
                text={"Finanças"} 
                pageValue={2} 
                currentPage={page} 
                setPageValue={setPage} 
                changePage={changePage}

            />
            <ButtonWithIcon 
                icon={faChartLine} 
                text={"Dashboard"} 
                pageValue={3} 
                currentPage={page} 
                setPageValue={setPage} 
                changePage={changePage}

            />
            <ButtonWithIcon 
                icon={faClockRotateLeft} 
                text={"Histórico"} 
                pageValue={4} 
                currentPage={page} 
                setPageValue={setPage}
                changePage={changePage}

                />
            <ButtonWithIcon 
                icon={faCircleUser} 
                text={"Perfil"} 
                pageValue={5} 
                currentPage={page} 
                setPageValue={setPage} 
                changePage={changePage}

            />
        </aside>
    )
}