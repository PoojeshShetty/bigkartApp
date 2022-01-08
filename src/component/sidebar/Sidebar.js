import React from 'react'
import { useCartContext } from '../../hooks/useCartContext'
import './Sidebar.css'

function Sidebar({viewsidebar, setViewSidebar, children}) {

    const {cartDispatch} = useCartContext()

    return (
        <div className={viewsidebar ? "sidebar sidebar__view" : "sidebar"}>
            <div className={viewsidebar ? "sidebar__content show__content" : "sidebar__content"}>
                <div className="btn__collection">

                    <button 
                        onClick={() => cartDispatch({type:'RESET_FILTER'})}
                        className="btn btn--black"
                    >Reset</button>

                    <button 
                        className="btn btn--black"
                        onClick={()=>setViewSidebar(false)}>Close</button>
                </div>
                
                {children}
            </div>
        </div>
    )
}

export default Sidebar
