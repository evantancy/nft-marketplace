import React from "react";
import { useNFTBalances, useChain, useMoralis } from "react-moralis";
import { CardGroup } from "react-bootstrap";
import { supportedChains } from "../utils/Networks";
import { CustomCard } from "../components/Card";

const Inventory = () => {
    const { isAuthenticated } = useMoralis();
    const { chainId } = useChain();
    const { data, error, isLoading, isFetching } = useNFTBalances();

    // const { getNFTBalances, error, isLoading, isFetching } = useNFTBalances();
    const _symbol = supportedChains.find((item) => item.id === chainId)?.symbol;

    console.log("Fetched data\n", !isLoading && !isFetching);

    return (
        <div style={{ backgroundColor: "#3C4046", minHeight: "100vh" }}>
            <div className="container">
                <h1>Your NFTs</h1>
                <CardGroup style={{ justifyContent: "center" }}>
                    {data !== null &&
                    isAuthenticated &&
                    !isLoading &&
                    !isFetching
                        ? data?.result.map((item, index) => (
                              <CustomCard
                                  data={item}
                                  symbol={_symbol}
                                  key={index}
                                  listButton
                                  transferButton
                                  cardInfo
                              />
                          ))
                        : ""}
                </CardGroup>
            </div>
        </div>
    );
};

export default Inventory;
