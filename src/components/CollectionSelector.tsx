import React, { useState } from "react";
import { useChain, useMoralis } from "react-moralis";
import Select from "react-select";
import { getCollectionByChain } from "../utils/Networks";
import { Option } from "../types";

type SelectorProps = {
    setCollection: React.Dispatch<React.SetStateAction<any>>;
};

const CollectionSelector: React.FC<SelectorProps> = ({
    setCollection,
}: any) => {
    const { chainId } = useChain();
    const { Moralis } = useMoralis();
    const [value, setValue] = useState<Option | string | null | undefined>();

    const createOptions = (_chain: string) => {
        const collections = getCollectionByChain(_chain);
        const options = collections?.map((item) => ({
            value: item.address,
            label: item.name,
        }));

        return options;
    };
    let options = createOptions(chainId!);

    // grab new collection and reset selector
    Moralis.onChainChanged((chain) => {
        options = createOptions(chain!);
    });

    const onChangeHandler = (selectedOption: Option) => {
        if (typeof selectedOption !== "string") return;
        setCollection(selectedOption?.value);
        setValue(selectedOption?.label);
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
