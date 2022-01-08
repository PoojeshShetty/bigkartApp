import {useState} from 'react'
import EditAddress from '../../component/editAddress/EditAddress'
import PriceDetails from '../../component/pricedetails/PriceDetails'
import ShowAddress from '../../component/showAddress/ShowAddress'
import './CheckoutPage.css'


const initialProduct = [
    {
        id:1,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:2,
    },
    {
        id:2,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:1,
    },
    {
        id:3,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:4,
    },
    {
        id:4,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:2,
    }
]

function CheckoutPage() {

    const [mockuser, setMockUser] = useState({
        address:""
    })

    const [editAddr, setEditAddr] = useState(false)
    
    return (
        <div className="checkout__container">
            <div className="product__price">
                <PriceDetails  productInCart={initialProduct} />
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
