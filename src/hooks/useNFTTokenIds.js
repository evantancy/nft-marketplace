import React, { useState, useEffect } from "react";
import {
    useChain,
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from "react-moralis";

export default function useNFTTokenIds() {
    const { chainId } = useChain();
    const { Moralis } = useMoralis();
    const { token } = useMoralisWeb3Api();

    const [fetchSuccess, setFetchSuccess] = useState(false);
    // const [collectionData, setCollectionData] = useState(null);
    const [NFTTokenIds, setNFTTokenIds] = useState([]);
    const [totalNFTs, setTotalNFTs] = useState();

    // required to fetch data
    const appId = process.env.REACT_APP_MORALIS_APP_ID;
    const serverUrl = process.env.REACT_APP_MORALIS_URL;
    Moralis.start({ serverUrl, appId });

    const options = {
        chain: chainId,
        address: "0x632970f972e20c49752c0de14ce38a81f4b9e05c",
        limit: 10,
    };

    // const {
    //     fetch: getNFTTokenIds,
    //     data,
    //     error,
    //     isLoading,
    // } = useMoralisWeb3ApiCall(Moralis.Web3API.token.getAllTokenIds, {
    //     chain: chainId,
    //     address: "0x632970f972e20c49752c0de14ce38a81f4b9e05c",
    //     limit: 10,
    // });

    useEffect(() => {
        const fetchData = async () => {
            const data = await Moralis.Web3API.token.getAllTokenIds(options);
            if (data?.result) {
                const collectionData = data.result;
                if (!data.result) {
                    setFetchSuccess(false);
                    return;
                }
                setTotalNFTs(data.total);
                setNFTTokenIds(collectionData);
                setFetchSuccess(true);
            }
        };
        fetchData();
    }, []);

    return {
        NFTTokenIds,
        totalNFTs,
        fetchSuccess,
    };

    // #############################################
    // ########################################
    // #########################################
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
}
