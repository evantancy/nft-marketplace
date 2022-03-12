import React, { useState } from "react";
import { useNFTBalances, useChain, useMoralis } from "react-moralis";
import { CardGroup } from "react-bootstrap";
import { getCollectionByChain } from "../utils/Networks";
import { CustomCard } from "../components/Card";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Select from "react-select";

const CollectionSelector = () => {
    const { chainId } = useChain();
    const collections = getCollectionByChain(chainId);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = collections?.map((item) => {
        return {
            value: item.address,
            label: item.name,
        };
    });

    console.log(options);
    return (
        <Select
            className="w-25 mb-2"
            placeholder={"🔎 Search Collections"}
            // defaultValue={selectedOption}
            // onChange={setSelectedOption}
            options={options}
            width={300}
        />
    );
};

export default CollectionSelector;
