// CSS
import "./App.css";

import { Routes, Route } from "react-router-dom";

// Page
import Account from "./pages/Account.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

// Component
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import Products from "./components/Body/Products.tsx";
import My from "./components/Body/My.tsx";
import Admin from "./components/Body/Admin.tsx";
import Edit from "./components/Body/Edit.tsx";
import Add from "./components/Body/Add.tsx";
import Simulation from "./components/Body/Simulation.tsx";
import Customization from "./components/Body/Customization.tsx";

// Context
import ProductContext from "./contexts/ProductContext";
import MyItemContext from "./contexts/MyItemContext";

const App: React.FC = () => {
  return (
    <ProductContext>
      <MyItemContext>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route index element={<Products />} />
            <Route path="customization/:id" element={<Customization />} />
            <Route path="simulation/:id" element={<Simulation />} />
            <Route path="my" element={<My />} />
            <Route path="admin" element={<Admin />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>

          <Route path="/" element={<Account />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyItemContext>
    </ProductContext>
  );
}

export default App;
