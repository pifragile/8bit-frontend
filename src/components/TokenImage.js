import { resolveIpfs } from "../lib/utils";
function TokenImage({ displayUrl, url, isBig, forceArtifact }) {
    return (
        <div
            className={
                isBig
                    ? "token-detail-width token-detail-height"
                    : "standard-width standard-height"
            }
            style={{ position: "relative" }}
        >
            {(!displayUrl || forceArtifact) && (
                <iframe
                    title="token"
                    style={{
                        border: "None",
                        height: "100%",
                        width: "100%",
                    }}
                    src={resolveIpfs(url)}
                />
            )}

            {displayUrl && !forceArtifact && (
                <img
                    alt="token"
                    src={resolveIpfs(displayUrl)}
                    style={{
                        border: "None",
                        height: "100%",
                        width: "100%",
                    }}
                />
            )}
        </div>
    );
}

export default TokenImage;
