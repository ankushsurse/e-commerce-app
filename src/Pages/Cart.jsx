import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from '../Components/CartItems'

function Cart() {
    const cart = useSelector(state => state.cart)

    const totalPrice = cart.reduce((p , c) => {
        return p + c.price
    },0)

    return (
        <>
            <section className="p-5 cart_container container d-flex  justify-content-between">
                <div className="product_container w-50 ">

                    {
                        cart.length === 0 ? <h1>No Products Added</h1> : cart.map(product => <CartItems key={product.id} product={product} />)
                    }

                </div>
                <div className=" mt-5 total_container">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h1 className="card-title text-danger">Price Details</h1>
                            <h6 className="card-text">Price items: {totalPrice.toFixed(2)} </h6>
                            <h6 className="card-text">Quantity:  {cart.length}</h6>
                            <h3>Total Amount:{totalPrice.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>


            </section>
        </>


    )
}

export default Cart
