import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo, ArbLogo } from "./Logos";
import { useChain, useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const supportedChains = [
    { id: "0x539", label: "Local", prefix: "🥐" },
    { id: "0x1", label: "Ethereum", prefix: <ETHLogo /> },
    { id: "0x3", label: "Ropsten Testnet", prefix: <ETHLogo /> },
    { id: "0x4", label: "Rinkeby Testnet", prefix: <ETHLogo /> },
    { id: "0x2a", label: "Kovan Testnet", prefix: <ETHLogo /> },
    { id: "0x5", label: "Goerli Testnet", prefix: <ETHLogo /> },
    // { id: "0xa4b1", label: "Arbitrum", prefix: <ArbLogo /> },
    { id: "0x38", label: "BSC", prefix: <BSCLogo /> },
    { id: "0x61", label: "BSC Testnet", prefix: <BSCLogo /> },
    { id: "0x89", label: "Polygon", prefix: <PolygonLogo /> },
    { id: "0x13881", label: "Mumbai Testnet", prefix: <PolygonLogo /> },
    { id: "0xa86a", label: "Avalanche", prefix: <AvaxLogo /> },
    { id: "0xa869", label: "Avalanche Testnet", prefix: <AvaxLogo /> },
];

/*
- show current chain when...
    - user connects wallet
    - user change chain
- connect to new chain when user selects from dropdown
- hide button until user connects wallet
*/
const ChainSelector = () => {
    const { switchNetwork, chainId, chain } = useChain();
    const { Moralis } = useMoralis();
    const [selectedChain, setSelectedChain] = useState("Select Chain");
    const [selectedLogo, setSelectedLogo] = useState("");

    // change network whenever user selects from dropdown
    const changeNetwork = (hexChainId) => {
        try {
            switchNetwork(hexChainId);
            chainHandler(chain);
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    // display all available options based on chains
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
                onSelect={changeNetwork}
            >
                {menuItems}
            </DropdownButton>
        );
    };

    // set dropdown button text to current chain
    const chainHandler = (currChainId) => {
        const currChainInfo = supportedChains.find(
            (item) => item.id === currChainId
        );
        if (currChainInfo === null) {
            setSelectedChain("Unknown");
        } else {
            // console.log(currChainInfo);
            setSelectedChain(currChainInfo.label);
            setSelectedLogo(currChainInfo.prefix);
        }
    };

    // case: user changes chain
    Moralis.onChainChanged((chain) => {
        // console.log("Chain changed");
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
