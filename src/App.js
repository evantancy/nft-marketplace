// import { useMoralis } from "react-moralis";
// import Home from "./pages/Home";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import { ConnectButton } from "web3uikit";
import ChainSelector from "./components/ChainSelector";
import ErrorPage from "./pages/ErrorPage";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";

const Header = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                style={{ marginBottom: "10" }}
            >
                <Container>
                    {/* <Navbar.Brand as={Link} to="/">
                        NFT Marketplace
                    </Navbar.Brand> */}
                    <Navbar.Brand>NFT Marketplace</Navbar.Brand>
                    <Navbar.Toggle
                        className="me-auto"
                        aria-controls="responsive-navbar-nav"
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
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
                    </Navbar.Collapse>
                    <Nav>
                        {/* only render if connect wallet */}
                        <ChainSelector />
                        <ConnectButton />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

function App() {
    return (
        <Router>
            {/* configure routes */}
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Layout />}>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/transactions" element={<Transaction />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
