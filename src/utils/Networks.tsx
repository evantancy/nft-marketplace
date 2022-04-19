import { AvaxLogo, BSCLogo, ETHLogo, PolygonLogo } from "./Logos";
export const chainInfo = [
    { id: "0x539", label: "Local", prefix: "🥐", symbol: "🥐" },
    {
        id: "0x1",
        label: "Ethereum",
        prefix: <ETHLogo />,
        symbol: "ETH",
        blockExplorerUrl: "https://etherscan.io/",
        collections: [
            {
                name: "Bored Ape Yacht Club",
                address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
                image: "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
            },
        ],
    },
    {},
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
                name: "Oyori",
                address: "0x3601ec81a1b59451a62e47154dcb7b78c552650b",
                image: "https://lh3.googleusercontent.com/Hg0A2O3P7qDW1aeykxdU0bPD88a_j2RHmcJVGtKE1cEUG4ObR_7ClLuzvy9AcrpLhaNgz38TF1BXzTArB0ckjeJTDbP_7jzv1UKe=s130",
            },
            {
                name: "Aloha Friends Pineapple",
                address: "0x0e9076fbeb063ead63b9eeb84b41694a8bbf8ddb",
                image: "https://lh3.googleusercontent.com/PqgRcyH2lCN7SNj6mU_sbTQa36xvBAsb7_TQm12F7B9NEjQzUXlkV5lY-fUG33tTs7GZlrB1CzReY3oRjCYF8iIFWBNw2EH2DZLjDX0=s0",
            },
            {
                name: "CryptoApesPunks",
                address: "0xa436e461ebedcd24593f8bdf60b720af5271a6f2",
                image: "https://lh3.googleusercontent.com/VLASSuHealjNLh7CNf4Q0TPHYNmKZpsyDM58EyrihfJ87rxeI3xDUO_-9XWJ8BaF6vCzVKkv2BfOK50w2LEyOcNPQmxurknYKPX4cPk=s0",
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

export const getCollectionByChain = (chainId: string) =>
    chainInfo.find((item) => item.id === chainId)?.collections;
