import { useParams } from "react-router-dom";

import Layout from "./Layout";
import TokenActionForm from "./TokenActionForm";

import { useEffect, useState } from "react";

import {
    getContractBigmap,
    getContractMetadata,
    getContractStorage,
    getToken,
} from "../lib/api";
import UserDetail from "./UserDetail";
import TokenImage from "./TokenImage";
import { getTokenMetadata } from "../lib/api";

function TokenDetail() {
    let { contract, tokenId } = useParams();
    const [tokenPrice, setTokenPrice] = useState(null);
    const [owner, setOwner] = useState(null);
    const [token, setToken] = useState(null);
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            let token = await getToken(contract, tokenId);
            token.metadata = await getTokenMetadata(token.contract.address, token.tokenId);
            setToken(token);
            setTokenPrice(
                await getContractBigmap(contract, "listings", tokenId)
            );
            setOwner(await getContractBigmap(contract, "ledger", tokenId));
            setMetadata(await getContractMetadata(contract));
        };

        fetchToken().catch(console.error);
    }, [tokenId, contract]);

    if (token && metadata) {
        return (
            <Layout>
                <h1>{token.metadata.name}</h1>
                <div>
                    <div title="token">
                        <TokenImage
                            url={token.metadata.artifactUri}
                            displayUrl={token.metadata.displayUri}
                            isBig={false}
                            forceArtifact={true}
                        />
                    </div>

                    <div
                        className="standard-width"
                        style={{
                            border: "None",
                            marginTop: "1vh",
                        }}
                    >
                        <div>
                            <b>Artist:</b>
                            <UserDetail address={"tz1gJde57Meuqb2xMYbapTPzgTZkiCmPAMZA"} isLink={true} />
                        </div>
                        <div>
                            <b>Owner:</b>
                            <UserDetail address={owner} isLink={true} />
                        </div>
                    </div>
                    <div
                        className="token-detail-width"
                        style={{ marginTop: "1vh" }}
                    >
                        <TokenActionForm
                            price={tokenPrice}
                            contract={contract}
                            tokenId={tokenId}
                            owner={owner}
                        />
                    </div>
                </div>
            </Layout>
        );
    } else {
        <Layout>return "Loading..";</Layout>;
    }
}

export default TokenDetail;
