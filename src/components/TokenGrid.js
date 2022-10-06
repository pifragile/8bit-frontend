import TokenBox from "./TokenBox";
import PaginationButtons from "./PaginationButtons";

function TokenGrid({ tokens, previousPage, nextPage }) {
    return (
        <div>
            {tokens.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {tokens.map((token) => {
                        if (token.metadata)
                            return (
                                <TokenBox
                                    id={token.tokenId}
                                    contract={token.contract.address}
                                    title={token.metadata.name}
                                    artifactUri={token.metadata.artifactUri}
                                    displayUri={token.metadata.displayUri}
                                    key={token.metadata.name}
                                    price={token.price}
                                />
                            );
                            return ""
                    })}
                </div>
            )}
            {tokens.length === 0 && (
                <div style={{ marginTop: "5vw" }}>No tokens found..</div>
            )}
            <PaginationButtons
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </div>
    );
}

export default TokenGrid;
