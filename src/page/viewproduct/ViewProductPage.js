import {useEffect} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Loading from '../../component/loading/Loading'
import { projectFirestore } from '../../config/firebase'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { useCartContext } from '../../hooks/useCartContext'
import './ViewProductPage.css'

function ViewProductPage() {

    const {cart,wishlist} = useCartContext()
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const history = useHistory()
    const {user} = useAuth()
    const { addProductToCart, addProductWishlist,removeProductWishlist } = useCart()

    useEffect(()=>{
        const getProduct = async () => {
            const res = await projectFirestore.collection('products').doc(id).get()

            if(!res.exists)
                setProduct("not exist")
            else{
                setProduct({id:res.id,...res.data()})
            }
        }

        getProduct()
    },[id])

    if(!product)
    return(
        <Loading />
    )

    if(product === "not exist")
    return(
        <div className="page--info">
            Product does not exist
        </div>
    )

    const handleAddToCart = (product,e) => {
        e.preventDefault()

        if(!user)
        {
            history.push('/login')
            return 
        }
        addProductToCart(product)
    }

    const handleAddProductToWishlist = (product,e) => {
        e.preventDefault()
        if(!user)
        {
            history.push('/login')
            return 
        }
        addProductWishlist(product)
    }
 
    const handleRemoveProductFromWishlist = (product,e) => {
        e.preventDefault()

        if(!user)
        {
            history.push('/login')
            return 
        }
        removeProductWishlist(product)
    }

    const handleNavigateViewCart = (e) => {
        e.preventDefault()
        history.push('/cart')
    }

    return (
        <div className="viewproduct__container">
            <div className="viewproduct">
                <div className="viewproduct__img">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="viewproduct__info">
                    <div className="viewproduct__name">
                        {product.name}
                    </div>
                    <div className="viewproduct__brand">
                        {product.brand}
                    </div>
                    <div className="viewproduct__description">
                        <span>Description</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis quasi eaque, quaerat accusantium libero nostrum facilis. Quia vitae minima, reprehenderit velit facere cupiditate deserunt dicta, incidunt commodi optio repudiandae.</p>
                    </div>
                    <div className="viewproduct__cost">
                        Rs {product.cost}
                    </div>
                     {
                        cart.map(prod => prod.id).includes(product.id) ?
                        <button className="btn btn--black" onClick={(e)=>handleNavigateViewCart(e)}>
                            In Cart
                        </button> :
                        <button className="btn btn--black" onClick={(e)=>handleAddToCart(product,e)}>
                            Add to Cart
                        </button>
                    }
                    
                </div>
                {
                wishlist.map(prod => prod.id).includes(product.id) ?
                <div 
                    onClick={(e) => handleRemoveProductFromWishlist(product,e)}
                    className="product__wish product--inwish">   
                    <img src="/svg/wish_btn.svg" alt="" />    
                </div> :
                <div 
                    onClick={(e) => handleAddProductToWishlist(product,e)}
                    className="product__wish">   
                    <img src="/svg/wish_btn.svg" alt="" />    
                </div>
            }
            </div>
        </div>
    )
}

export default ViewProductPage
