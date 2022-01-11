import { useCart } from '../../hooks/useCart'
import './CartProduct.css'


function CartProduct({product}) {

    const { incrProductQt, decrProductQt, deleteProduct } = useCart()

    const handleDeleteProduct = (id,docId) => {
        deleteProduct(id,docId)
    }

    const handleRemoveProduct = (id,docId) => {
        decrProductQt(id,docId)
    }

    const handleAddProduct = (id,docId) => {
        incrProductQt(id,docId)
    }

    return (
        <div className="cartproduct__container">
            <div className="cartproduct__img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="cartproduct__info">
                <div className="cartproduct__name">
                    {product.name}
                </div>
                <div className="cartproduct__brand">
                    {product.brand}
                </div>

                <div className="cartproduct__cost">
                    Rs {product.cost}
                </div>

                <div className="cartproduct__quantity">
                    {
                        product.qt === 1 ?
                        <button className="cartproduct__decr"
                            onClick={() => handleDeleteProduct(product.id, product.docId)}>
                            <img src="/svg/delete.svg" alt="" />
                        </button>:
                        <button className="cartproduct__decr"
                            onClick={() => handleRemoveProduct(product.id, product.docId)}>
                            <img src="/svg/remove.svg" alt="" />
                        </button>
                    }
                    
                    <div className="cartproduct__val">
                        {product.qt}
                    </div>
                    <button className="cartproduct__incr"
                        onClick={() => handleAddProduct(product.id, product.docId)}>
                        <img src="/svg/add.svg" alt="" />
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default CartProduct
