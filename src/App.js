import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Order from './pages/Order';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/checkoutdetails" element={<Checkout />} />
          <Route path='/orders' element={<Order />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
