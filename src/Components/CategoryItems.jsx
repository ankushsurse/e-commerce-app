import React from 'react'
import { Link } from 'react-router-dom'
function CategoryItems() {
    return (
        <>
            <ul className="d-flex flex-wrap justify-content-around">
                <center>
                    <Link to="grocery">
                        <img className="w-50" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
                        <li>Grocery</li>
                    </Link>
                </center>
                <center>
                    <Link to="mobiles">
                        <img className="w-50" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                        <li>Mobiles</li>
                    </Link>
                </center>
                <center>
                    <Link to="fashion">
                        <img className="w-50" src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" />
                        <li>Fashion</li>
                    </Link>
                </center>
                <center>
                    <Link to="electronics">
                        <img className="w-50" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                        <li>Electronics</li>
                    </Link>
                </center>

                <center>
                    <Link to="appliances">
                        <img className="w-50" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                        <li>Appliances</li>
                    </Link>
                </center>
            </ul>
        </>
    )
}

export default CategoryItems
