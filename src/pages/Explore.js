import React, { useState, useEffect } from "react";
import { useChain, useMoralis, useMoralisWeb3Api } from "react-moralis";
import { CardGroup } from "react-bootstrap";
import { CustomCard } from "../components/Card";
import { getCollectionByChain } from "../utils/Networks";
import { debounce } from "lodash";
import useNFTTokenIds from "../hooks/useNFTTokenIds";

const Explore = () => {
    const { chainId } = useChain();
    const { Moralis } = useMoralis();
    const [contractAddress, setContractAddress] = useState(null);
    const collections = getCollectionByChain(chainId);

    console.log(collections);
    // console.log(collection);
    // const options = {
    //     chain: chainId,
    //     address: "",
    //     limit: 1,
    // };

    // // required to fetch data
    // const appId = process.env.REACT_APP_MORALIS_APP_ID;
    // const serverUrl = process.env.REACT_APP_MORALIS_URL;
    // Moralis.start({ serverUrl, appId });

    // const { NFTTokenIds, NFTCount, fetchSuccess, isLoading } =
    //     useNFTTokenIds(options);

    // const explorePageCards = [];

    // if (fetchSuccess && !isLoading) {
    //     options.address = addressList[addressList.length - 1];
    //     explorePageCards.push(
    //         <CustomCard data={NFTTokenIds[0]} key={addressList.length - 1} />
    //     );
    //     addressList.pop();
    // }
    // console.log(addressList);
    // console.log(NFTTokenIds);
    // console.log(explorePageCards);

    // const RenderCollections = () =>
    //     collection.map((obj, index) => <CustomCard data={obj} key={index} />);
    const RenderCollections = () => (
        <CardGroup style={{ justifyContent: "center" }}>
            {collections?.map((obj, index) => (
                <CustomCard data={obj} key={index} name />
            ))}
        </CardGroup>
    );

    return (
        <div style={{ backgroundColor: "#3C4046", minHeight: "100vh" }}>
            <div className="container">
                <h1>Explore Collections</h1>
                <div>
                    {/* {fetchSuccess && !isLoading
                        ? explorePageCards.map((item, index) => (
                              <CustomCard data={item} key={index} list />
                          ))
                        : ""} */}
                    {contractAddress === null && RenderCollections()}
                </div>
            </div>
        </div>
    );
};

export default Explore;
