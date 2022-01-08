import React from 'react'
import './Sidebar.css'

function Sidebar({viewsidebar, setViewSidebar, children}) {
    return (
        <div className={viewsidebar ? "sidebar sidebar__view" : "sidebar"}>
            <div className={viewsidebar ? "sidebar__content show__content" : "sidebar__content"}>
                Sidebar
                <button onClick={()=>setViewSidebar(false)}>close</button>
                {children}
            </div>
        </div>
    )
}

export default Sidebar
