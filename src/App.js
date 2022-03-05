import { useMoralis } from "react-moralis";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function App() {
    return (
        <Router>
            {/* configure routes */}
            <div>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/transactions" element={<Transaction />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
