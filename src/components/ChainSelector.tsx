import { useChain, useMoralis } from "react-moralis";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { chainInfo } from "../utils/Networks";

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
    const [selectedChain, setSelectedChain] = useState<string | undefined>(
        "Select Chain"
    );
    // this is extremely jank and not recommended
    const [selectedLogo, setSelectedLogo] = useState<
        JSX.Element | string | undefined
    >();

    // display all available options based on chains
    // call switchNetwork whenever user selects from dropdown
    const RenderDropdown = () => {
        return (
            <DropdownButton
                id="dropdown-button-chainselector"
                title={[selectedLogo, " ", selectedChain]}
                onSelect={(
                    eventKey: string | null,
                    e: React.SyntheticEvent<unknown>
                ) => switchNetwork(eventKey!)}
            >
                {chainInfo.map((obj, index) => (
                    <Dropdown.Item eventKey={obj.id} key={index}>
                        {obj.prefix} {obj.label}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        );
    };

    // set dropdown button text to current chain
    const chainHandler = (_chainId: string) => {
        const currChainInfo = chainInfo.find((item) => item.id === _chainId);
        if (currChainInfo === undefined) return;
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
        chainHandler(chain!);
    });
    // case: user first connected to website
    Moralis.onWeb3Enabled((result) => {
        // console.log("Account connected", result);
        chainHandler(result.chainId!);
    });

    return <div>{chainId && RenderDropdown()}</div>;
};

export default ChainSelector;
