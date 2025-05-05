import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import MainPage from "../pages/MainPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
