import SyncButton from "./SyncButton";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../lib/wallet";

function Layout({ children, favicon = "/favicon.png" }) {
    const client = useContext(WalletContext).client;
    const [activeAccount, setActiveAccount] = useState(null);
    useEffect(() => {
        const func = async () => {
            const account = await client.getActiveAccount();
            if (account) {
                setActiveAccount(account.address);
            }
        };
        func();
    }, [client]);

    return (
        <div
            style={{
                minHeight: "100vh",
                margin: 0,
                display: "grid",
                gridTemplateRows: "auto 1fr auto",
            }}
        >
            <header>
                <div className="main">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            margin: "0",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "15vh",
                            }}
                        >
                            8bit
                        </div>

                        <SyncButton />
                    </div>
                </div>
            </header>
            <div
                className="content"
                style={
                    {
                        //marginTop: "5vh",
                    }
                }
            >
                {children}
            </div>
            <footer>
                <br />
                Built with{" "}
                <a href="https://tzkt.io" target="_blank">
                    TzKT API
                </a>
            </footer>
        </div>
    );
}

export default Layout;
