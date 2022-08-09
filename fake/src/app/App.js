import NavBar from "../components/common/NavBar";

import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Product from "../pages/productManage";
import RegisterUser from "../pages/userRegistration";
import Cart from "../pages/cart";

function App() {
    return (<>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/userRegistration" element={<RegisterUser/>}/>

            </Routes>
        </>

    );
}

export default App;
