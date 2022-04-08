import React from "react";
import {
    Button,
    Card,
    Container,
    Image,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import { resolveLink } from "../utils/IpfsUtils";
import MoralisTypes from "moralis";

// TODO: somehow fix missing
interface NFTProps {
    data: {
        token_address: string;
        token_id: string;
        contract_type: string;
        owner_of: string;
        block_number: string;
        block_number_minted: string;
        token_uri?: string | undefined;
        metadata?: string | undefined;
        synced_at?: string | undefined;
        amount?: string | undefined;
        name: string;
        symbol: string;
        image?: string;
    };
}

interface CardProps extends NFTProps {
    cardInfo: boolean;
    transferButton?: boolean;
    listButton?: boolean;
    price?: number;
    symbol?: string;
}

export const CustomCard: React.FC<any> = (props) => {
    // const name =
    //     props.data?.name?.length > 20 ? props.data?.name?.substring(0, 16) : props.data?.name;
    const name = props.data?.name;
    const address =
        props.data?.token_address?.substring(0, 6) +
        "...." +
        props.data?.token_address?.slice(-4);
    const tokenId =
        props.data?.token_id?.length > 10
            ? "#" + props.data?.token_id?.substring(0, 10)
            : "#" + props.data?.token_id;
    const type = props.data?.contract_type;
    // only show symbol if price specified i.e. listed for sale
    // TODO: fetch price from contract
    const price = props?.price;
    const currencySymbol = props?.symbol;

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

    const RenderVideo = () => (
        <video
            src={props.data?.image}
            style={{ maxWidth: "14rem" }}
            autoPlay
            loop
            muted
        />
    );

    const RenderImage = () => {
        let image;

        if (props.data?.image) {
            image = resolveLink(props.data?.image);
        } else if (props.data?.token_uri) {
            fetch(props.data?.token_uri)
                .then((response) => response.json())
                .then((data) => {
                    image = resolveLink(data.image);
                });
        }

        return (
            <Card.Img
                variant="top"
                as={Image}
                src={image}
                style={{ width: "14rem", height: "14rem" }}
                rounded
                fluid
            />
        );
    };

    // TODO: load IPFS images quickly
    return (
        <Card className="mb-2 mx-1" style={cardStyle}>
            <a href="" target="_blank" rel="noopener noreferrer">
                <Container className="" style={imgContainerStyle}>
                    {props.data?.image?.search("mp4") >= 0
                        ? RenderVideo()
                        : RenderImage()}
                </Container>
                <Card.Body style={cardTitleStyle}>
                    <Card.Title className="float-start" style={cardTextStyle}>
                        <p style={cardInfoStyle}>{name}</p>
                        <p style={cardInfoStyle}>{tokenId}</p>
                    </Card.Title>
                    <Card.Title className="float-end" style={cardTextStyle}>
                        {price} {currencySymbol}
                    </Card.Title>
                </Card.Body>
                <div style={{ clear: "both" }}></div>
                <ListGroup className="list-group-flush border-0">
                    {props.cardInfo && (
                        <ListGroupItem
                            className="border-0"
                            style={cardTextStyle}
                        >
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
                    )}
                    <div style={{ clear: "both" }}></div>
                    <ListGroupItem style={cardButtonStyle}>
                        <>
                            {/* TODO: create popup & functionality */}
                            {props.listButton && (
                                <Button variant="dark" size="sm">
                                    List
                                </Button>
                            )}{" "}
                            {props.transferButton && (
                                <Button variant="dark" size="sm">
                                    Transfer
                                </Button>
                            )}
                        </>
                    </ListGroupItem>
                </ListGroup>
            </a>
        </Card>
    );
};
