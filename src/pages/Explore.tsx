import { useState } from "react";
import { CardGroup } from "react-bootstrap";
import { useChain, useMoralis } from "react-moralis";
import { CustomCard } from "../components/Card";
import CollectionSelector from "../components/CollectionSelector";
import useNFTTokenIds from "../hooks/useNFTTokenIds";
import { getCollectionByChain } from "../utils/Networks";

/*
allow users to request collection to be listed
-> Google form, collection name, contract address, banner image
render collection showcase when `collection === null`
render individual collection when set
*/
const Explore = () => {
    const { chainId } = useChain();
    const { Moralis } = useMoralis();
    const [collection, setCollection] = useState<string | null>(null);
    const collections = getCollectionByChain(chainId!);

    // required to fetch data
    const appId = process.env.REACT_APP_MORALIS_APP_ID;
    const serverUrl = process.env.REACT_APP_MORALIS_URL;
    Moralis.start({ serverUrl, appId });

    let address = null;
    if (collection?.value !== null) {
        address = collection?.value;
    }

    const {
        getNFTTokenIds,
        data: NFTTokenIds,
        error,
        isLoading,
        isFetching,
    } = useNFTTokenIds(address);

    const RenderCollections = () =>
        collections?.map((obj, index) => (
            <CustomCard data={obj} key={index} name />
        ));

    const RenderSingleCollection = () =>
        NFTTokenIds?.result?.map((item, index) => (
            <CustomCard data={item} key={index} name tokenId />
        ));

    console.log(NFTTokenIds);
    console.log("Status", error);

    return (
        <div style={{ backgroundColor: "#3C4046", minHeight: "100vh" }}>
            <div className="container pt-lg-2">
                <CollectionSelector setCollection={setCollection} />
                <CardGroup style={{ justifyContent: "center" }}>
                    {collection === null && RenderCollections()}
                    {collection && RenderSingleCollection()}
                </CardGroup>
            </div>
        </div>
    );
};

export default Explore;
