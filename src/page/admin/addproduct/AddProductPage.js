import {useState,useEffect} from 'react'
import useCollection from '../../../hooks/useCollection'
import './AddProductPage.css'
import {useHistory} from 'react-router-dom'

function AddProductPage() {

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [imgurl, setImgUrl] = useState('')
    const [price, setPrice] = useState('')

    const {addDocument, error, success} = useCollection('products')
    const history = useHistory()

    useEffect(()=>{
        success && history.push('/admin/products')
    },[success,history])

    const handleFormSubmit = (e) => {

        e.preventDefault()

        addDocument({
            name,
            brand,
            type,
            description,
            image:imgurl,
            cost:price
        })
    }

    return (
        <div className="addproduct__container">
            <span className="title">Add product</span>
            
            {
                error &&
                <div className="error--msg">
                    {error}
                </div>
            }

            <form className="addproduct__form" onSubmit={(e) => handleFormSubmit(e)}>
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
                        value={imgurl}
                        onChange={({target}) => setImgUrl(target.value)}
                    />
                </div>
                <div className="form__controle">
                    <span>Price</span>
                    <input 
                        type="number" 
                        value={price}
                        onChange={({target}) => setPrice(target.value)}
                    />
                </div>

                <button className='btn btn--black'>Submit</button>
            </form>
            
            
        </div>
    )
}

export default AddProductPage
