import React, { useState, useEffect } from "react";
import {
    useChain,
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from "react-moralis";
import { debounce } from "lodash";

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
        limit: 1,
    };

    const {
        fetch: fetchCollectionData,
        data,
        error,
        isLoading,
    } = useMoralisWeb3ApiCall(Moralis.Web3API.token.getAllTokenIds, options);

    const fetchData = async () => {
        // const data = await Moralis.Web3API.token.getAllTokenIds(options);
        fetchCollectionData();
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

    const delayedFetchData = debounce(fetchData, 1000);

    // TODO: how to cache? currently infinite looping
    useEffect(() => {
        delayedFetchData();
        console.log(data);
        console.log(isLoading);
    }, [data]);

    return {
        NFTTokenIds,
        totalNFTs,
        fetchSuccess,
    };
}
