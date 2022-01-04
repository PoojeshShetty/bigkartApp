import React from 'react'
import './Sidebar.css'

function Sidebar({viewsidebar, setViewSidebar}) {
    return (
        <div className={viewsidebar ? "sidebar sidebar__view" : "sidebar"}>
            <div className={viewsidebar ? "sidebar__content show__content" : "sidebar__content"}>
                Sidebar
                <button onClick={()=>setViewSidebar(false)}>close</button>
            </div>
        </div>
    )
}

export default Sidebar
