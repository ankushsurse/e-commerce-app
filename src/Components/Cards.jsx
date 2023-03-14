import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/CartSlice'

function Cards({ product }) {
    const dispatch = useDispatch()

    const handleClick = (product) => {
        dispatch(addToCart(product))
    }

    const { title, image, price } = product
    return (
        <>
            <div className="card cards_section mt-3 col-lg-3  p-2 border border-secondary-subtle" >
                <img src={image} className="card-img-top w-50 m-auto mt-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> Price: {price}</p>
                    <button onClick={() => handleClick(product)} href="c" className="btn btn-danger">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cards
