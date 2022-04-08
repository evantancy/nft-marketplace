import { useMemo } from "react";
import MoralisType from "moralis";
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
    UseMoralisWeb3ApiCallOptions,
} from "react-moralis";
import { resolveLink } from "../utils/IpfsUtils";

/* const isValidApiChain = (chain?: string | null) => { */
/*     if (!chain) { */
/*         return null; */
/*     } */
/*     return chain; */
/* }; */

export interface UseNFTTokenIdsParams
    extends Omit<
        Parameters<typeof MoralisType.Web3API["token"]["getAllTokenIds"]>[0],
        "address" | "limit"
    > {
    address: string;
    limit?: number;
}

export const useNFTTokenIds = (
    params?: UseNFTTokenIdsParams,
    options?: UseMoralisWeb3ApiCallOptions
) => {
    const { token } = useMoralisWeb3Api();
    // const { chainId } = useMoralis();
    const DEFAULT_CHAIN = "eth";
    const {
        fetch: getNFTTokenIds,
        data,
        error,
        isLoading,
        isFetching,
    } = useMoralisWeb3ApiCall(
        token.getAllTokenIds,
        {
            chain: params?.chain ?? DEFAULT_CHAIN,
            address: params?.address ?? "",
            limit: params?.limit ?? 5,
            ...params,
        },
        { autoFetch: options?.autoFetch ?? !!token, ...options }
    );

    const NFTTokenIds = useMemo(() => {
        if (!data?.result || !data?.result.length) {
            return data;
        }

        const formattedResult = data.result.map((nft) => {
            try {
                if (nft.metadata) {
                    const metadata = JSON.parse(nft.metadata);
                    const image = resolveLink(metadata?.image);
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
