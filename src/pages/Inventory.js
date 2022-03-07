import React, { useEffect } from "react";
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
} from "react-bootstrap";
import { supportedChains } from "../utils/Networks";
import { debounce } from "lodash";

// render a card for a single token
const RenderCard = (data, index) => {
    const name =
        data?.name?.length > 12 ? data?.name.substring(0, 10) : data?.name;
    const address =
        data?.token_address.substring(0, 6) +
        "...." +
        data?.token_address.slice(-4);
    const tokenId = "#" + data?.token_id;
    const type = data?.contract_type;
    // only show symbol if price specified i.e. listed for sale
    const price = 0;
    const symbol = "";

    return (
        <div>
            {/* TODO: Fix unique key error */}
            <Card key={index} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body style={{}}>
                    <Card.Title className="float-start">
                        {name} {tokenId}
                    </Card.Title>
                    <Card.Title className="float-end">
                        {price} {symbol}
                    </Card.Title>
                </Card.Body>
                <ListGroup
                    className="list-group-flush border-0"
                    style={{ fontSize: "14px" }}
                >
                    <ListGroupItem className="border-0">
                        <p className="float-start">Contract Address</p>
                        <p className="float-end">{address}</p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
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
        </div>
    );
};

const Inventory = () => {
    const { switchNetwork, chainId, chain } = useChain();
    const { Moralis } = useMoralis();
    const { account } = useMoralisWeb3Api();
    const { getNFTBalances, data, error, isLoading, isFetching } =
        useNFTBalances();

    const _symbol = supportedChains.find((item) => item.id === chainId)?.symbol;

    // dynamically get rows and cols
    function calcRowCol(numItems) {
        // get window dimensions
        const { innerWidth: width, innerHeight: height } = window;
        const cardWidth = 288;
        const cols = width / cardWidth;
        const rows = numItems / cols;
        return { rows, cols };
    }
    console.log(data?.result);

    const dims = calcRowCol(data?.total);
    // render outside to dynamically adjust
    const cards = data !== null ? data?.result.map(RenderCard) : "";

    return (
        <div className="container">
            <h1>Inventory</h1>
            <Row className="row-cols-1 row-cols-md-4 g-4">{cards}</Row>
        </div>
    );
};

export default Inventory;
