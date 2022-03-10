import React, { useState, useEffect } from "react";
import { useChain, useMoralis, useMoralisWeb3Api } from "react-moralis";
import { CardGroup } from "react-bootstrap";
import { CustomCard } from "../components/Card";
import CollectionAddresses from "../utils/Networks";
import { debounce } from "lodash";
import useNFTTokenIds from "../hooks/useNFTTokenIds";

const Explore = () => {
    const { NFTTokenIds, totalNFTs, fetchSuccess } = useNFTTokenIds();
    const { chainId } = useChain();
    const { Moralis, isAuthenticated } = useMoralis();
    const { token } = useMoralisWeb3Api();

    const [collectionData, setCollectionData] = useState([]);

    // required to fetch data
    const appId = process.env.REACT_APP_MORALIS_APP_ID;
    const serverUrl = process.env.REACT_APP_MORALIS_URL;
    Moralis.start({ serverUrl, appId });

    const options = {
        chain: chainId,
        address: "0x632970f972e20c49752c0de14ce38a81f4b9e05c",
        limit: 2,
    };
    console.log(NFTTokenIds);

    // ######################################################################

    // useEffect(async () => {
    //     const data = await Moralis.Web3API.token.getAllTokenIds(options);
    //     setCollectionData(data.result);
    //     if (!data?.result) {
    //         setFetchSuccess(false);
    //         return;
    //     }
    //     setFetchSuccess(true);

    //     for (let token of data.result) {
    //         if (!token?.image) return;
    //     }
    // }, []);

    // ######################################################################

    return (
        <div style={{ backgroundColor: "#3C4046", minHeight: "100vh" }}>
            <div className="container">
                <h1>Explore Collections</h1>
                <div>
                    {/* {collectionData === null
                        ? ""
                        : collectionData.map((item, index) => (
                              <CustomCard data={item} key={index} />
                          ))} */}
                </div>
            </div>
        </div>
    );
};

export default Explore;
