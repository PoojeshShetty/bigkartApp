import React from 'react'
import './ShowAddress.css'

function ShowAddress({address,setEdit}) {

    const handleEditClick = () => {
        setEdit(true)
    }

    return (
        <div className="showaddress">
            <div className="address">
                {address}
            </div>
            <button 
                onClick={handleEditClick}
                className="btn btn--black">Edit</button>
        </div>
    )
}

export default ShowAddress
