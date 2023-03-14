import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Navbar() {
    const cart = useSelector(state => state.cart)
    return (
        <>
            <nav className="nav">
                <Link id="logo" to="/">
                    <img src="https://bestwebcreator.com/ATZShop/demo/image/logo.png" alt="" />
                </Link>
                <form className="search d-flex w-50  " action="">
                    <input required className=" p-2 form-control rounded-0 me-2  w-100" type="search"
                        placeholder="Home , Electronics , Food , Fashion , Mobiles , Grocery , Kids" aria-label="Search" />
                    <button className="btn bg-danger rounded-0 text-light" type="submit">Search</button>
                </form>
                <Link to="cart">
                    <img src="https://bestwebcreator.com/ATZShop/demo/image/cart-icon.png" alt="" />
                    ({cart.length})
                </Link>
            </nav></>
    )
}

export default Navbar
