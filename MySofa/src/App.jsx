// CSS
import "./App.css";

import { Routes, Route } from "react-router-dom";

// Page
import Account from "./pages/Account";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Component
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Body/Products";
import My from "./components/Body/My";
import Admin from "./components/Body/Admin";
import Edit from "./components/Body/Edit";
import Add from "./components/Body/Add";
import Simulation from "./components/Body/Simulation";
import Customization from "./components/Body/Customization";

// Context
import ProductContext from "./contexts/ProductContext";
import MyItemContext from "./contexts/MyItemContext";

function App() {
  return (
    <ProductContext>
      <MyItemContext>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Products />} />
            <Route path="customization/:id" element={<Customization />} />
            <Route path="simulation/:id" element={<Simulation />} />
            <Route path="my" element={<My />} />
            <Route path="admin" element={<Admin />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>

          <Route path="/account" element={<Account />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyItemContext>
    </ProductContext>
  );
}

export default App;
