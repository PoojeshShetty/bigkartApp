import {useState} from 'react'
import EditAddress from '../../component/editAddress/EditAddress'
import PriceDetails from '../../component/pricedetails/PriceDetails'
import ShowAddress from '../../component/showAddress/ShowAddress'
import './CheckoutPage.css'


function CheckoutPage() {

    const [mockuser, setMockUser] = useState({
        address:""
    })

    const [editAddr, setEditAddr] = useState(false)
    return (
        <div className="checkout__container">
            <div className="product__price">
                <PriceDetails />
            </div>
            <div className="user__address">
                <span>Address : </span>
                <div className="address">
                {
                    editAddr?
                    <EditAddress 
                        address={mockuser.address}
                        setEdit={setEditAddr}
                    /> :
                    <ShowAddress 
                        address={mockuser.address}
                        setEdit={setEditAddr}
                     />
                }
                </div>
            </div>
            {
                mockuser.address.length === 0 ?
                <div> Update address for delivery </div>
                :
                <div className="checkout__order">
                    <button className='btn btn--black'>Order</button>
                </div>
            }
        </div>
    )
}

export default CheckoutPage
