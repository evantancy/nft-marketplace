import "./App.css";
import { useMoralis } from "react-moralis";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Greet = () => {
    const { user } = useMoralis();
    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
        </div>
    );
};

const Body = () => {
    return <div>Bing Bong</div>;
};

function App() {
    return (
        <Router>
            <div className="App">
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
