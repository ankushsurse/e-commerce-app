import { useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'

function CartItems({ product }) {
    const { title, price, image, id } = product

    const dispatch = useDispatch()
    const handleDelete = ((id) => {
        dispatch(remove(id))
    })


    return (
        <>
            <div className=" mt-5 w-100 d-flex" style={{ width: '18rem' }}>
                <div>
                    <img src={image} className="card-img-top w-25 " alt="..." />
                </div>

                <div className="card-body w-100">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {price} </p>
                    <button onClick={() => handleDelete(id)} href="" className="btn btn-danger">Delete</button>
                </div>
            </div>

        </>
    )
}

export default CartItems
