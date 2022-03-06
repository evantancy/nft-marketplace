// import { useMoralis } from "react-moralis";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { ConnectButton } from "web3uikit";
import ChainSelector from "./components/ChainSelector";

function App() {
    return (
        <Router>
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                NFT Marketplace
                            </Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/explore">
                                    Explore
                                </Nav.Link>
                                <Nav.Link as={Link} to="/inventory">
                                    Inventory
                                </Nav.Link>
                                <Nav.Link as={Link} to="/transactions">
                                    Transactions
                                </Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <ConnectButton />
                                <ChainSelector />
                            </Nav>
                        </Container>
                    </Navbar>
                </>
                {/* configure routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/transactions" element={<Transaction />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
