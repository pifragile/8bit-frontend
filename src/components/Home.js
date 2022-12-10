import { useContext } from "react";
import { contract, tokenPrice } from "../consts";
import { extractTokensForOverview, formatMutez } from "../lib/utils";
import { mint, WalletContext } from "../lib/wallet";
import Layout from "./Layout";
import TokenOverview from "./TokenOverview";
function Home() {
    const wallet = useContext(WalletContext);
    let handleMint = async () => {
        await mint(wallet, contract);
    };

    return (
        <Layout>
            <div style={{ marginTop: "10vh" }}>
            <button style={{width: "min(400px, 80vw)"}} onClick={handleMint}>Mint for {formatMutez(tokenPrice)}</button>
            </div>
            <div style={{ marginTop: "5vh" }}>
                <h1>All tokens</h1>
                <TokenOverview
                    query={`v1/tokens?contract=${contract}`}
                    pageLength={30}
                    extractTokens={extractTokensForOverview}
                ></TokenOverview>
            </div>
        </Layout>
    );
}

export default Home;
