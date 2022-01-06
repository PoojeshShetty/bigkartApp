import {useState} from 'react'
import './CartProduct.css'


function CartProduct({product}) {

    const [viewproduct , setViewProduct] = useState(product)

    const handleDeleteProduct = (id) => {
        alert('deleted product of id ',id)
    }

    const handleRemoveProduct = () => {
        alert('decrement')
    }

    const handleAddProduct = () => {
        alert('increment')
    }

    return (
        <div className="cartproduct__container">
            <div className="cartproduct__img">
                <img src={viewproduct.image} alt={viewproduct.name} />
            </div>
            <div className="cartproduct__info">
                <div className="cartproduct__name">
                    {viewproduct.name}
                </div>
                <div className="cartproduct__brand">
                    {viewproduct.brand}
                </div>

                <div className="cartproduct__cost">
                    Rs {viewproduct.cost}
                </div>

                <div className="cartproduct__quantity">
                    {
                        viewproduct.qt === 1 ?
                        <button className="cartproduct__decr"
                            onClick={() => handleDeleteProduct(viewproduct.id)}>
                            <img src="/svg/delete.svg" alt="" />
                        </button>:
                        <button className="cartproduct__decr"
                            onClick={handleRemoveProduct}>
                            <img src="/svg/remove.svg" alt="" />
                        </button>
                    }
                    
                    <div className="cartproduct__val">
                        {viewproduct.qt}
                    </div>
                    <button className="cartproduct__incr"
                        onClick={handleAddProduct}>
                        <img src="/svg/add.svg" alt="" />
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default CartProduct
