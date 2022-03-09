import React from "react";
import { useNFTBalances, useChain, useMoralis } from "react-moralis";
import { CardGroup } from "react-bootstrap";
import { supportedChains } from "../utils/Networks";
import { RenderCard } from "../components/Card";

const Inventory = () => {
    const { isAuthenticated } = useMoralis();
    const { chainId } = useChain();
    const { data } = useNFTBalances();

    // const { getNFTBalances, error, isLoading, isFetching } = useNFTBalances();
    const _symbol = supportedChains.find((item) => item.id === chainId)?.symbol;

    console.log("Fetched data\n", data?.result);
    // render all cards
    const cards =
        data !== null && isAuthenticated
            ? data?.result.map((item, index) =>
                  RenderCard(item, _symbol, index)
              )
            : "";

    return (
        <div style={{ backgroundColor: "#3C4046", minHeight: "100vh" }}>
            <div className="container">
                <h1>Your NFTs</h1>
                <CardGroup style={{ justifyContent: "center" }}>
                    {cards}
                </CardGroup>
            </div>
        </div>
    );
};

export default Inventory;
