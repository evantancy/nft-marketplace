import { useChain, useMoralis } from "react-moralis";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { supportedChains } from "../utils/Networks";

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
