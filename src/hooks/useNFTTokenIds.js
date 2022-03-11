import { useState, useEffect } from "react";
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from "react-moralis";
import { debounce } from "lodash";

export default function useNFTTokenIds(options) {
    const { Moralis } = useMoralis();
    const { token } = useMoralisWeb3Api();

    const [fetchSuccess, setFetchSuccess] = useState(false);
    const [NFTTokenIds, setNFTTokenIds] = useState([]);
    const [NFTCount, setNFTCount] = useState();

    // required to fetch data
    const appId = process.env.REACT_APP_MORALIS_APP_ID;
    const serverUrl = process.env.REACT_APP_MORALIS_URL;
    Moralis.start({ serverUrl, appId });

    const {
        fetch: fetchCollectionData,
        data,
        error,
        isLoading,
    } = useMoralisWeb3ApiCall(token.getAllTokenIds, options);

    const fetchData = async () => {
        fetchCollectionData();
        if (!data?.result) {
            setFetchSuccess(false);
            return;
        }
        setNFTCount(data.total);
        setNFTTokenIds(data.result);
        setFetchSuccess(true);
    };

    const debouncedFetchData = debounce(fetchData, 2000);

    // TODO: how to cache? currently infinite looping
    useEffect(() => {
        debouncedFetchData();
        // console.log(data);
    }, [isLoading]);

    return {
        NFTTokenIds,
        NFTCount,
        fetchSuccess,
    };
}
