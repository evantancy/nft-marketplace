import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
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
    { id: "0x38", label: "BSC", prefix: <BSCLogo /> },
    { id: "0x61", label: "BSC Test", prefix: <BSCLogo /> },
    { id: "0x89", label: "Polygon", prefix: <PolygonLogo /> },
    { id: "0x13881", label: "Mumbai", prefix: <PolygonLogo /> },
    { id: "0xa86a", label: "Avalanche", prefix: <AvaxLogo /> },
    { id: "0xa869", label: "AVAX Test", prefix: <AvaxLogo /> },
];

const RenderMenuItems = () => {
    const menuItems = [];

    chains.forEach((obj, index) => {
        menuItems.push(<Dropdown.Item key={index}>{obj.label}</Dropdown.Item>);
    });

    return menuItems;
};

const ChainSelector = () => {
    const currentChain = "Idk";
    const { switchNetwork, chainId, chain } = useChain();
    const { isAuthenticated } = useMoralis();
    const [selected, setSelected] = useState({});

    const chainHandler = () => {
        console.log(1);
    };

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <RenderMenuItems />
            </DropdownButton>
        </div>
    );
};

export default ChainSelector;
