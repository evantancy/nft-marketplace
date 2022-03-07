import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo, ArbLogo } from "./Logos";
import { useChain, useMoralis } from "react-moralis";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const supportedChains = [
    { id: "0x539", label: "Local", prefix: "🥐", symbol: "🥐" },
    {
        id: "0x1",
        label: "Ethereum",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://etherscan.io/",
    },
    {
        id: "0x3",
        label: "Ropsten Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://ropsten.etherscan.io/",
    },
    {
        id: "0x4",
        label: "Rinkeby Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://rinkeby.etherscan.io/",
    },
    {
        id: "0x2a",
        label: "Kovan Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://kovan.etherscan.io/",
    },
    {
        id: "0x5",
        label: "Goerli Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://goerli.etherscan.io/",
    },
    // { id: "0xa4b1", label: "Arbitrum", prefix: <ArbLogo /> , symbol:},
    {
        id: "0x38",
        label: "BSC",
        prefix: <BSCLogo />,
        symbol: "BNB",
        blockExplorerUrl: "https://bscscan.com/",
    },
    {
        id: "0x61",
        label: "BSC Testnet",
        prefix: <BSCLogo />,
        symbol: "BNB",
        blockExplorerUrl: "https://testnet.bscscan.com/",
    },
    {
        id: "0x89",
        label: "Polygon",
        prefix: <PolygonLogo />,
        symbol: "MATIC",
        blockExplorerUrl: "https://polygonscan.com/",
    },
    {
        id: "0x13881",
        label: "Mumbai Testnet",
        prefix: <PolygonLogo />,
        symbol: "MATIC",
        blockExplorerUrl: "https://mumbai.polygonscan.com/",
    },
    {
        id: "0xa86a",
        label: "Avalanche",
        prefix: <AvaxLogo />,
        symbol: "AVAX",
        blockExplorerUrl: "https://snowtrace.io/",
    },
    {
        id: "0xa869",
        label: "Avalanche Testnet",
        prefix: <AvaxLogo />,
        symbol: "AVAX",
        blockExplorerUrl: "https://testnet.snowtrace.io/",
    },
];

/*
- show current chain when...
    - user connects wallet
    - user change chain
- connect to new chain when user selects from dropdown
- hide button until user connects wallet
*/
const ChainSelector = () => {
    const { switchNetwork, chainId } = useChain();
    const { Moralis } = useMoralis();
    const [selectedChain, setSelectedChain] = useState("Select Chain");
    const [selectedLogo, setSelectedLogo] = useState("");

    // display all available options based on chains
    // call switchNetwork whenever user selects from dropdown
    const RenderDropdown = () => {
        const menuItems = [];
        supportedChains.forEach((obj, index) => {
            menuItems.push(
                <Dropdown.Item eventKey={obj.id} key={index}>
                    {obj.prefix} {obj.label}
                </Dropdown.Item>
            );
        });

        return (
            <DropdownButton
                id="dropdown-button-chainselector"
                title={[selectedLogo, " ", selectedChain]}
                onSelect={switchNetwork}
            >
                {menuItems}
            </DropdownButton>
        );
    };

    // set dropdown button text to current chain
    const chainHandler = (_chainId) => {
        const currChainInfo = supportedChains.find(
            (item) => item.id === _chainId
        );
        try {
            setSelectedChain(currChainInfo.label);
            setSelectedLogo(currChainInfo.prefix);
        } catch (err) {
            console.log("ERROR:", err);
        }
    };

    // case: user changes chain
    Moralis.onChainChanged((chain) => {
        // console.log("Chain changed", chain);
        chainHandler(chain);
    });
    // case: user first connected to website
    Moralis.onWeb3Enabled((result) => {
        // console.log("Account connected", result);
        chainHandler(result.chainId);
    });

    return <div>{chainId !== null ? RenderDropdown() : ""}</div>;
};

export default ChainSelector;
