import { useContext } from "react";
import { contract } from "../consts";
import { extractTokensForOverview } from "../lib/utils";
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
            <button onClick={handleMint}>Mint</button>
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
