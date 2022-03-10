import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
export const supportedChains = [
    { id: "0x539", label: "Local", prefix: "🥐", symbol: "🥐" },
    {
        id: "0x1",
        label: "Ethereum",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://etherscan.io/",
    },
    {
        id: "0x3",
        label: "Ropsten Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://ropsten.etherscan.io/",
    },
    {
        id: "0x4",
        label: "Rinkeby Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://rinkeby.etherscan.io/",
    },
    {
        id: "0x2a",
        label: "Kovan Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://kovan.etherscan.io/",
    },
    {
        id: "0x5",
        label: "Goerli Testnet",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://goerli.etherscan.io/",
    },
    // { id: "0xa4b1", label: "Arbitrum", prefix: <ArbLogo /> , symbol:},
    {
        id: "0x38",
        label: "BSC",
        prefix: <BSCLogo />,
        symbol: "BNB",
        blockExplorerUrl: "https://bscscan.com/",
    },
    {
        id: "0x61",
        label: "BSC Testnet",
        prefix: <BSCLogo />,
        symbol: "BNB",
        blockExplorerUrl: "https://testnet.bscscan.com/",
    },
    {
        id: "0x89",
        label: "Polygon",
        prefix: <PolygonLogo />,
        symbol: "MATIC",
        blockExplorerUrl: "https://polygonscan.com/",
    },
    {
        id: "0x13881",
        label: "Mumbai Testnet",
        prefix: <PolygonLogo />,
        symbol: "MATIC",
        blockExplorerUrl: "https://mumbai.polygonscan.com/",
    },
    {
        id: "0xa86a",
        label: "Avalanche",
        prefix: <AvaxLogo />,
        symbol: "AVAX",
        blockExplorerUrl: "https://snowtrace.io/",
    },
    {
        id: "0xa869",
        label: "Avalanche Testnet",
        prefix: <AvaxLogo />,
        symbol: "AVAX",
        blockExplorerUrl: "https://testnet.snowtrace.io/",
    },
];

export const collectionAddresses = [
    {
        id: "0x1",
        label: "Ethereum",
    },
    {
        id: "0x3",
        label: "Ropsten Testnet",
    },
    {
        id: "0x4",
        label: "Rinkeby Testnet",
        addresses: [
            "0x5e189ff63e6f8d2488bd46b2b04bac85176f0c73",
            "0x0e9076fbeb063ead63b9eeb84b41694a8bbf8ddb",
            "0x8a5491b94df6b8bb156e629619a71c30174cdd43",
            "0x632970f972e20c49752c0de14ce38a81f4b9e05c",
        ],
    },
    {
        id: "0x2a",
        label: "Kovan Testnet",
    },
    {
        id: "0x5",
        label: "Goerli Testnet",
    },
    {
        id: "0x38",
        label: "BSC",
    },
    {
        id: "0x61",
        label: "BSC Testnet",
    },
    {
        id: "0x89",
        label: "Polygon",
    },
    {
        id: "0x13881",
        label: "Mumbai Testnet",
    },
    {
        id: "0xa86a",
        label: "Avalanche",
    },
    {
        id: "0xa869",
        label: "Avalanche Testnet",
    },
];
