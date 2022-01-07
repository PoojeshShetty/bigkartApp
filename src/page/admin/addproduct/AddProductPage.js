import {useState} from 'react'
import './AddProductPage.css'

function AddProductPage() {

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [imgurl, setImgUrl] = useState('')
    const [price, setPrice] = useState('')

    return (
        <div className="addproduct__container">
            <span className="title">Add product</span>
            
            <form className="addproduct__form">
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
