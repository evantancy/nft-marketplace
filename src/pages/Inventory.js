import { CardGroup } from "react-bootstrap";
import { useChain, useMoralis, useNFTBalances } from "react-moralis";
import { CustomCard } from "../components/Card";
import { chainInfo } from "../utils/Networks";

const Inventory = () => {
    const { isAuthenticated } = useMoralis();
    const { chainId } = useChain();
    const { data, error, isLoading, isFetching } = useNFTBalances();

    const _symbol = chainInfo.find((item) => item.id === chainId)?.symbol;

    console.log("Fetched data:", !isLoading && !isFetching);

    return (
        <div style={{ backgroundColor: "#3C4046", minHeight: "100vh" }}>
            <div className="container pt-lg-2">
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
                                  name
                                  tokenId
                                  cardInfo
                                  listButton
                                  transferButton
                              />
                          ))
                        : ""}
                </CardGroup>
            </div>
        </div>
    );
};

export default Inventory;
