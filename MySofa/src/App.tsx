// CSS
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

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

// AuthContext
import { AuthProvider, useAuth } from "./contexts/AuthContext.tsx";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  return isAuthenticated() ? children : <Navigate to="/" replace />
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  } 

  if (!isAdmin()) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated() ? children : <Navigate to="/home" replace />;
}

const App: React.FC = () => {
  return (
    <ProductContext>
      <MyItemContext>
        <AuthProvider>
          <Routes>
            {/* 로그인 필요 */}
            <Route path="/home" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }>
              <Route index element={<Products />} />
              <Route path="customization/:id" element={<Customization />} />
              <Route path="simulation/:id" element={<Simulation />} />
              <Route path="my" element={<My />} />
              
              <Route path="admin" element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                } />
              <Route path="add" element={<Add />} />
              <Route path="edit/:id" element={<Edit />} />
          </Route>

            <Route path="/" element={
                <PublicRoute>
                  <Account />
                </PublicRoute>
              }>
              <Route path="" element={<Login />} />
              <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </MyItemContext>
    </ProductContext>
  );
}

export default App;
