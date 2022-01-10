import { Link } from 'react-router-dom'
import './AdmProduct.css'

function AdmProduct({propsProduct}) {

    return (
        <div className="admproduct__card">
            <div className="admproduct__img">
                <img src={propsProduct.image} alt={propsProduct.name} />
            </div>
            <div className="admproduct__info">
                <div className="admproduct__name">
                    {propsProduct.name}
                </div>
                <div className="admproduct__brand">
                    {propsProduct.brand}
                </div>
                <div className="admproduct__flex">
                    <div className="admproduct__cost">
                        Rs {propsProduct.cost}
                    </div>
                    <Link to={`/admin/editproduct/${propsProduct.id}`}>
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
