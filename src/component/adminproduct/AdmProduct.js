import { Link } from 'react-router-dom'
import './AdmProduct.css'

const initialProduct = {
    id:1,
    image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
    name: 'Shirt checks',
    gender: 'male',
    cost: '2300',
    status: 'available',
    brand: 'Nike'
}

function AdmProduct() {

    return (
        <div className="admproduct__card">
            <div className="admproduct__img">
                <img src={initialProduct.image} alt={initialProduct.name} />
            </div>
            <div className="admproduct__info">
                <div className="admproduct__name">
                    {initialProduct.name}
                </div>
                <div className="admproduct__brand">
                    {initialProduct.brand}
                </div>
                <div className="admproduct__flex">
                    <div className="admproduct__cost">
                        Rs {initialProduct.cost}
                    </div>
                    <Link to="/admin/editproduct">
                        <button
                            className="btn btn--black">
                            Edit
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdmProduct
