import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div className="homepage__container">
            <div className="homepage__hero">
                <img src="https://img.freepik.com/free-photo/men-s-clothing-set-with-brown-shoes-watch-trousers-sunglasses-office-shirt-bracelet-isolated-white-background-top-view_107612-104.jpg?size=626&ext=jpg" alt="homeImg" />
                <div className="homepage__shopnow">
                    <div className="homepage__info">
                        Shop now to add to your fashion collection
                    </div>
                    <Link to="/products">
                        <button className="btn btn--black">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
