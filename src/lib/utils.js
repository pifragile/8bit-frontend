import { IPFS_GATEWAY } from "../consts";
import { getTokenMetadata } from "./api";
export function resolveIpfs(address) {
    if (address) {
        return address.replace("ipfs://", IPFS_GATEWAY);
    }
}

export function formatMutez(mutez) {
    return `${mutez / 1000000} tez`;
}

export function getHash() {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 32; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

export async function extractTokensForOverview(data) {
    if ("token" in data[0]) data = data.map((item) => item.token);
    // use this when metadata is broken in api
    for (let token of data) {
        if (!("metadata" in token)) {
            token.metadata = await getTokenMetadata(
                token.contract.address,
                token.tokenId
            );
        }
    }
    return data;
}
