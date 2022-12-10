import Layout from "./Layout";
function About() {
    return (
        <Layout>
            <div className="main">
                <h1>About 1byte</h1>
                <p>
                    1byte is a generative audio project by artist pifragile.
                </p>
                <h1>Fully on-chain metadata.</h1>
                <p>
                    Metadata for the piece are stored fully on chain. This ensures full
                    decentralization, but makes it necessary that the token
                    metadata is generated on chain and is the reason why the
                    minting fees are slightly higher that for example in
                    fx(hash).
                </p>
                <h1>Contract</h1>
                <p>The 1byte contract address is: KT1D7Ufx21sz9yDyP4Rs1WBCur9XhaZ9JwNE</p>
                <h1>Royalties</h1>
                <p>
                    15%
                </p>

                <h1>Disclaimer</h1>
                <b>TL;DR USE AT YOUR OWN RISK.</b>
                <p>
                    1byte is an experimental platform. While every effort is
                    made by the team to provide a secure platform, Editart will
                    not accept any liability or responsibility for any kind of
                    damage created by the use of the platform.
                </p>
            </div>
        </Layout>
    );
}

export default About;
