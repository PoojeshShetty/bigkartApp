import React, { useState,useEffect} from 'react'
import './EditAddress.css'

function EditAddress({address,setEdit}) {

    const [addressValue,setAddressValue] = useState(address)
    const [addressErr, setAddressErr] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const handleCancelClick = () => {
        setEdit(false)
    }
    
    useEffect(()=>{

        return () => setCancelled(true)
    },[])
    const handleSaveClick = () => {
        if(addressValue.length ===0)
        {
            setAddressErr('Address value cannot be null')
            setTimeout(()=>{
                if(!cancelled)
                setAddressErr(null)
            },7000)
            return
        }
        setEdit(false)
    }

    return (
        <div className="editaddress">
            {addressErr && 
                <div className="error--msg">
                    {addressErr}
                </div>
            }
            <textarea
                className='address'
                placeholder='Address'
                rows="5"
                value={addressValue}
                onChange={({target}) => setAddressValue(target.value)}
            />
            <div className="btn__collection">
                <button 
                    className="btn btn--black"
                    onClick={handleSaveClick}
                >Save</button>

                <button 
                    className="btn btn--black"
                    onClick={handleCancelClick}
                >Cancel</button>
            </div>
        </div>
    )
}

export default EditAddress
