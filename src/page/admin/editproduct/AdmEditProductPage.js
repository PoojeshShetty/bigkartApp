import {useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Loading from '../../../component/loading/Loading'
import { projectFirestore } from '../../../config/firebase'
import useCollection from '../../../hooks/useCollection'
import './AdmEditProductPage.css'

function AdmEditProductPage() {
    
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [cost, setCost] = useState('')
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const {updateDocument,deleteDocument, success} = useCollection('products')
    const history = useHistory()

    useEffect(()=>{
        const getProduct = async () => {

            const res = await projectFirestore.collection('products').doc(id).get()
            
            if(!res.exists)
                setProduct("not exist")
            else
            {
                setProduct({id:res.id,...res.data()})
                setName(res.data().name)
                setType(res.data().type)
                setImage(res.data().image)
                setDescription(res.data().description)
                setCost(res.data().cost)
                setBrand(res.data().brand)
            }
        }
        getProduct()
    },[id])

    useEffect(()=>{
        success && history.push('/admin/products')
    },[success,history])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        updateDocument({
            name,
            image,
            brand,
            description,
            cost,
            type
        },id)
    }

    if(!product)
        return(
            <Loading />
        )
    
    if(product==="not exist")
        return(
            <div className='page--info'>Product does not exist</div>
        )

    return (
        <div className="admEditProduct__container">
            <span className="title">Edit product</span>
            
            <div className="position__relative">
                
            <form className="admEditProduct__form" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="form__controle">
                    <span>Name</span>
                    <input 
                        type="text" 
                        value={name}
                        onChange={({target}) => setName(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Brand</span>
                    <input 
                        type="text" 
                        value={brand}
                        onChange={({target}) => setBrand(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Type</span>
                    <input 
                        type="text" 
                        value={type}
                        onChange={({target}) => setType(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Description</span>
                    <textarea 
                        rows="5"
                        value={description} 
                        onChange={({target}) => setDescription(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Image Url</span>
                    <input 
                        type="text" 
                        value={image}
                        onChange={({target}) => setImage(target.value)}
                    />
                </div>
                <div className="form__controle">
                    <span>Price</span>
                    <input 
                        type="number" 
                        value={cost}
                        onChange={({target}) => setCost(target.value)}
                    />
                </div>

                <button className='btn btn--black'>Submit</button>
            </form>

                <button className="product__delete" onClick={() => deleteDocument(id)}>
                    <img src="/svg/delete.svg" alt="" />
                </button>
            </div>
            
            
            
        </div>
    )
}

export default AdmEditProductPage
