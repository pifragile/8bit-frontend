import { useContext, useEffect, useState } from "react";
import { contract, tokenPrice } from "../consts";
import { getContractStorage } from "../lib/api";
import { extractTokensForOverview, formatMutez } from "../lib/utils";
import { mint, WalletContext } from "../lib/wallet";
import Layout from "./Layout";
import TokenOverview from "./TokenOverview";
function Home() {
    const wallet = useContext(WalletContext);
    let handleMint = async () => {
        await mint(wallet, contract);
    };

    const [numTokens, setNumTokens] = useState(null);
    const [numTokensMinted, setNumTokensMinted] = useState(null);

    useEffect(() => {
        const fetchStorage = async () => {
            setNumTokens(await getContractStorage(contract, "num_tokens"));
            setNumTokensMinted(
                await getContractStorage(contract, "last_token_id")
            );
        };
        fetchStorage().catch(console.error);
    });

    if (numTokens && numTokensMinted) {
        return (
            <Layout>
                <div style={{}}>
                    1byte is a generative audio project by{" "}
                    <a
                        href="https://twitter.com/pifragile/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Piero @ Solidbit
                    </a>
                    . All sounds are created using Tone.js and melodies are
                    algorithmically generated. See code snippets below.
                    <button
                        style={{ width: "min(400px, 80vw)", marginTop: "5vh" }}
                        onClick={handleMint}
                    >
                        Mint for {formatMutez(tokenPrice)}
                    </button>
                </div>

                <small>
                    {numTokensMinted} / {numTokens} minted
                </small>

                <div style={{ marginTop: "10vh" }}>
                    <h1>Behind the scenes</h1>

                    <img src="img/0.png"></img>
                    <br />
                    <img src="img/1.png"></img>
                    <br />
                    <img src="img/2.png"></img>
                </div>
                <div style={{ marginTop: "5vh" }}>
                    <h1>All tokens</h1>
                    Click the token to open the detail view where you can play
                    the sound.
                    <TokenOverview
                        query={`v1/tokens?contract=${contract}`}
                        pageLength={30}
                        extractTokens={extractTokensForOverview}
                    ></TokenOverview>
                </div>
            </Layout>
        );
    }
}

export default Home;
