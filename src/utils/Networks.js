import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
export const chainInfo = [
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
        collections: [
            {
                name: "Crypto Swords V3",
                address: "0x5e189ff63e6f8d2488bd46b2b04bac85176f0c73",
                image: "https://lh3.googleusercontent.com/gQmg1jSIaM3WMfojc5uXBripTlAaiJ1MbhE3d6k2iH8x1cIJlXE93AjR0Ns9l7JKOILpajsq_XP53DO2GbUD9LjatMd4TuMPIXgH=s0",
            },
            {
                name: "Aloha Friends Pineapple",
                address: "0x0e9076fbeb063ead63b9eeb84b41694a8bbf8ddb",
                image: "https://lh3.googleusercontent.com/PqgRcyH2lCN7SNj6mU_sbTQa36xvBAsb7_TQm12F7B9NEjQzUXlkV5lY-fUG33tTs7GZlrB1CzReY3oRjCYF8iIFWBNw2EH2DZLjDX0=s0",
            },
            {
                name: "CryptoKittiesRinkeby",
                address: "0x16baf0de678e52367adc69fd067e5edd1d33e3bf",
                image: "https://rinkeby-storage.opensea.io/0x16baf0de678e52367adc69fd067e5edd1d33e3bf/1498-1565390423.png",
            },
            {
                name: "CyberBrokers V3",
                address: "0x8664f3645ba4cc5a09c47b2b1dfb0f152798eb38",
                image: "https://openseauserdata.com/files/fbb0b8e018b3a3c95cf5b009477f2875.svg",
            },
        ],
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
        collections: [
            {
                name: "The Cool T-Rex NFT",
                address: "0x15b5c0616c3276675b645254343013c132662d28",
                image: "https://lh3.googleusercontent.com/XstZEYMYcmzJnT1fkiRNTwe4qhsPc2aAZRO3Cp38Spybr1984Q_-qTr5wz12abekMUtt2TmXsbpBSfMs0d3SgG_LpsRA2XXiSxQR=w600",
            },
            {
                name: "Dark Empire",
                address: "0x48B1D9633051cec21bD08b56B09DDFEdDa281Fd1",
                image: "https://lh3.googleusercontent.com/5rbjvRk4gtTmPri5mVvM4rP36Il1u0ECwnhYNlAL7AMwUmDBhB7z6cRIoPSlktOnVXuGWQuOmd8YTovyYTnUhkWg3-v7BA9hqcVy=s0",
            },
        ],
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

export const getCollectionByChain = (chainId) =>
    chainInfo.find((item) => item.id === chainId)?.collections;
