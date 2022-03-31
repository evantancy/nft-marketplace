import { useState } from "react";
import { useChain, useMoralis } from "react-moralis";
import Select from "react-select";
import { getCollectionByChain } from "../utils/Networks";

const CollectionSelector = ({ setCollection }) => {
    const { chainId } = useChain();
    const { Moralis } = useMoralis();
    const [value, setValue] = useState(null);

    const createOptions = (_chain) => {
        const collections = getCollectionByChain(_chain);
        const options = collections?.map((item) => ({
            value: item.address,
            label: item.name,
        }));

        return options;
    };
    let options = createOptions(chainId);

    // grab new collection and reset selector
    Moralis.onChainChanged((chain) => {
        options = createOptions(chain);
        setValue(null);
    });

    const onChangeHandler = (_option) => {
        setCollection(_option);
        setValue(_option);
    };

    return (
        <Select
            className="w-25 mb-4"
            placeholder={"🔎 Search Collections"}
            value={value}
            onChange={onChangeHandler}
            options={options}
            isSearchable
        />
    );
};

export default CollectionSelector;
