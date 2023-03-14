import Category from "./Components/Category";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Appliances from "./Pages/Category Pages/Appliances";
import Grocery from "./Pages/Category Pages/Grocery";
import Fashion from "./Pages/Category Pages/Fashion";
import Mobiles from "./Pages/Category Pages/Mobiles";
import Electronics from "./Pages/Category Pages/Electronics";

function App() {
  return (

    <Provider store={store}>
      <Router>
        <Header />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="grocery" element={<Grocery />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="appliances" element={<Appliances />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
