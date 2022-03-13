import { useMemo } from "react";
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from "react-moralis";

const useNFTTokenIds = (_address, limit = 3) => {
    const { chainId } = useMoralis();
    const { token } = useMoralisWeb3Api();

    const options = {
        chain: chainId,
        address: _address,
        limit: limit,
    };

    const {
        fetch: getNFTTokenIds,
        data,
        error,
        isLoading,
        isFetching,
    } = useMoralisWeb3ApiCall(token.getAllTokenIds, options, {
        autoFetch: !!token && _address !== "explore" && _address !== null,
    });

    const NFTTokenIds = useMemo(() => {
        if (!data?.result || !data?.result.length) {
            return data;
        }
        const formattedResult = data.result.map((nft) => {
            try {
                if (nft.metadata) {
                    const metadata = JSON.parse(nft.metadata);
                    const image = metadata?.image;
                    return { ...nft, image, metadata };
                }
            } catch (error) {
                return nft;
            }
            return nft;
        });

        return { ...data, result: formattedResult };
    }, [data]);

    return { getNFTTokenIds, data: NFTTokenIds, error, isLoading, isFetching };
};

export default useNFTTokenIds;
