import React, { useState,useEffect} from 'react'
import { useAuth } from '../../hooks/useAuth'
import useCollection from '../../hooks/useCollection'
import './EditAddress.css'

function EditAddress({address,setEdit}) {

    const [addressValue,setAddressValue] = useState(address)
    const [addressErr, setAddressErr] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {updateDocumentWithUrl} = useCollection('users')
    const {user,dispatchAuth} = useAuth()

    useEffect(()=>{

        return () => setCancelled(true)
    },[])

    const handleCancelClick = () => {
        setEdit(false)
    }
    
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

        updateDocumentWithUrl(`users`,user.uid,{address:addressValue})

        let userObj = user
        userObj.address = addressValue
        dispatchAuth({type:'UPDATE_ADDRESS',payload:userObj})
        
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
