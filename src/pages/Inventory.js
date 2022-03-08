import React, { useState } from "react";
import {
    useNFTBalances,
    useChain,
    useMoralis,
    useMoralisWeb3Api,
} from "react-moralis";
import {} from "react-moralis";
import {
    Card,
    Button,
    ListGroup,
    ListGroupItem,
    Container,
    Image,
    CardGroup,
} from "react-bootstrap";
import { supportedChains } from "../utils/Networks";

const Inventory = () => {
    const RenderCard = (data, symbol, index) => {
        const name =
            data?.name?.length > 20 ? data?.name?.substring(0, 16) : data?.name;
        const address =
            data?.token_address.substring(0, 6) +
            "...." +
            data?.token_address.slice(-4);
        const tokenId = "#" + data?.token_id;
        const type = data?.contract_type;
        // only show symbol if price specified i.e. listed for sale
        // TODO: fetch price from contract
        const price = 0;
        const currencySymbol = price > 0 ? symbol : "";

        const imgContainerStyle = {
            paddingTop: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 0,
            // large number to push text to bottom
            flexGrow: 200,
        };

        const cardStyle = {
            minWidth: "15rem",
            maxWidth: "15rem",
            border: "2px solid #e5e5e5",
            borderRadius: "8px",
        };
        const cardTitleStyle = {
            paddingTop: 2,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
        };

        const cardTextStyle = {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 5,
            paddingRight: 5,
            marginTop: 0,
            marginBottom: 0,
            fontSize: "14px",
        };

        const cardInfoStyle = {
            fontSize: "12px",
            marginTop: 0,
            marginBottom: 0,
        };

        const cardButtonStyle = {
            paddingTop: 0,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            marginTop: 0,
            marginBottom: 0,
        };

        return (
            <Card className="mb-2 mx-1" key={index} style={cardStyle}>
                <Container className="" style={imgContainerStyle}>
                    <Card.Img
                        variant="top"
                        as={Image}
                        src={data?.image}
                        // className="img-fluid"
                        rounded
                        fluid
                    />
                </Container>
                <Card.Body style={cardTitleStyle}>
                    <Card.Title className="float-start" style={cardTextStyle}>
                        {name} {tokenId}
                    </Card.Title>
                    <Card.Title className="float-end" style={cardTextStyle}>
                        {price} {currencySymbol}
                    </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">
                    <ListGroupItem className="border-0" style={cardTextStyle}>
                        <p className="float-start" style={cardInfoStyle}>
                            Contract Address
                        </p>
                        <p className="float-end" style={cardInfoStyle}>
                            {address}
                        </p>
                        <p className="float-start" style={cardInfoStyle}>
                            Contract Type
                        </p>
                        <p className="float-end" style={cardInfoStyle}>
                            {type}
                        </p>
                    </ListGroupItem>
                    <ListGroupItem style={cardButtonStyle}>
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

    console.log("Fetched data", data?.result);

    // render outside to dynamically adjust
    const cards =
        data !== null
            ? data?.result.map((item, index) =>
                  RenderCard(item, _symbol, index)
              )
            : "";

    return (
        <div className="container">
            <h1>Inventory</h1>
            <CardGroup>{cards}</CardGroup>
        </div>
    );
};

export default Inventory;
