import React, { useEffect, useState } from "react";
import {
    useNFTBalances,
    useChain,
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from "react-moralis";
import {} from "react-moralis";
import {
    Card,
    Button,
    ListGroup,
    ListGroupItem,
    Container,
    Row,
    Col,
    CardGroup,
} from "react-bootstrap";
import { supportedChains } from "../utils/Networks";
import { debounce } from "lodash";

const Inventory = () => {
    // render a card for a single token

    // render a single card
    const RenderCard = (data, symbol, index) => {
        const name =
            data?.name?.length > 12 ? data?.name?.substring(0, 10) : data?.name;
        const address =
            data?.token_address.substring(0, 6) +
            "...." +
            data?.token_address.slice(-4);
        const tokenId = "#" + data?.token_id;
        const type = data?.contract_type;
        // only show symbol if price specified i.e. listed for sale
        // TODO: fetch price from contract
        const price = 0;
        const currencySymbol = price ? symbol : "";

        return (
            <Card
                className="mb-2 mx-2"
                key={index}
                style={{ minWidth: "18rem", maxWidth: "18rem" }}
            >
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title className="float-start">
                        {name} {tokenId}
                    </Card.Title>
                    <Card.Title className="float-end">
                        {price} {currencySymbol}
                    </Card.Title>
                </Card.Body>
                <ListGroup
                    className="list-group-flush border-0"
                    style={{ fontSize: "14px" }}
                >
                    <ListGroupItem className="border-0">
                        <p className="float-start">Contract Address</p>
                        <p className="float-end">{address}</p>
                        <p className="float-start">Contract Type</p>
                        <p className="float-end">{type}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <>
                            {/* TODO: create popup & functionality */}
                            <Button variant="dark" size="sm">
                                List
                            </Button>{" "}
                            <Button variant="dark" size="sm">
                                Transfer
                            </Button>
                        </>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    };

    const { switchNetwork, chainId, chain } = useChain();
    const { Moralis } = useMoralis();
    const { account } = useMoralisWeb3Api();
    const { getNFTBalances, data, error, isLoading, isFetching } =
        useNFTBalances();
    const [cardRows, setCardRows] = useState(0);
    const [cardCols, setCardCols] = useState(0);
    const _symbol = supportedChains.find((item) => item.id === chainId)?.symbol;

    // dynamically get rows and cols
    function calcRowCol(numItems) {
        // get window dimensions
        const { innerWidth: width, innerHeight: height } = window;
        const cardWidth = 288;
        const cols = width / cardWidth;
        const rows = numItems / cols;
        // return { rows, cols };
        setCardRows(rows);
        setCardCols(cols);
    }

    console.log(data?.result);

    // render outside to dynamically adjust
    const cards =
        data !== null
            ? data?.result.map((item) => RenderCard(item, _symbol))
            : "";

    return (
        <div className="container">
            <h1>Inventory</h1>
            <CardGroup>{cards}</CardGroup>
        </div>
    );
};

export default Inventory;
