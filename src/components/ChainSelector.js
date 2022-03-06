import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo, ArbLogo } from "./Logos";
import { useChain, useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const chains = [
    { id: "0x539", label: "Local", prefix: "🥐" },
    { id: "0x1", label: "Ethereum", prefix: <ETHLogo /> },
    { id: "0x3", label: "Ropsten", prefix: <ETHLogo /> },
    { id: "0x4", label: "Rinkeby", prefix: <ETHLogo /> },
    { id: "0x2a", label: "Kovan", prefix: <ETHLogo /> },
    { id: "0x5", label: "Goerli", prefix: <ETHLogo /> },
    { id: "0xa4b1", label: "Arbitrum", prefix: <ArbLogo /> },
    { id: "0x38", label: "BSC", prefix: <BSCLogo /> },
    { id: "0x61", label: "BSC Test", prefix: <BSCLogo /> },
    { id: "0x89", label: "Polygon", prefix: <PolygonLogo /> },
    { id: "0x13881", label: "Mumbai", prefix: <PolygonLogo /> },
    { id: "0xa86a", label: "Avalanche", prefix: <AvaxLogo /> },
    { id: "0xa869", label: "AVAX Test", prefix: <AvaxLogo /> },
];

const ChainSelector = () => {
    const { switchNetwork, chainId, chain } = useChain();
    const { Moralis, isAuthenticated } = useMoralis();
    const [selectedChain, setSelectedChain] = useState("Select Chain");

    // change network whenever user selects from dropdown
    const changeNetwork = (hexChainId) => {
        try {
            switchNetwork(hexChainId);
            chainHandler();
        } catch (error) {
            console.log(error);
        }
    };

    // display all available options based on chains
    const RenderMenuItems = () => {
        const menuItems = [];
        chains.forEach((obj) => {
            menuItems.push(
                <Dropdown.Item eventKey={obj.id}>
                    {obj.prefix} {obj.label}
                </Dropdown.Item>
            );
        });

        return (
            <DropdownButton
                id="dropdown-basic-button"
                title={selectedChain}
                onSelect={changeNetwork}
            >
                {menuItems}
            </DropdownButton>
        );
    };

    // set dropdown button text to current chain
    const chainHandler = (currChainId) => {
        const currChainInfo = chains.find((item) => item.id === currChainId);
        if (currChainInfo === null) {
            setSelectedChain("Unknown");
        } else {
            setSelectedChain(currChainInfo.label);
        }
    };

    // listen for chain events
    Moralis.onChainChanged((chain) => {
        chainHandler(chain);
    });

    // TODO: only show chain buttons when authenticated
    return (
        <div>
            <RenderMenuItems />
        </div>
    );
};

export default ChainSelector;
