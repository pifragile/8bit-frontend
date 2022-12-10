import SyncButton from "./SyncButton";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../lib/wallet";

function Layout({ children, favicon = "/favicon.png" }) {
    const client = useContext(WalletContext).client;
    const [activeAccount, setActiveAccount] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = (event) => {
        setShowMenu(true);
    };

    const closeMenu = (event) => {
        setShowMenu(false);
    };

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
            {showMenu && (
                <div class="menu-modal">
                        <span
                            class="menu-modal-close"
                            onClick={closeMenu}
                        >
                            &times;
                        </span>
                        <div className="menu-content">
                            <div><SyncButton/></div>
                            <Link to="/"><div>Home</div></Link>
                            <Link to="/marketplace"><div>Marketplace</div></Link>
                            <Link to={`/user/${activeAccount}`}><div>My Collection</div></Link>
                            <Link to="/about"><div>About</div></Link>
                        </div>
                </div>
            )}

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
                        <div>
                            <div
                                style={{
                                    fontSize: "15vh",
                                }}
                            >
                                1byte
                            </div>
                            <div
                                style={{
                                    fontSize: "4.5vh",
                                    marginTop: "-1.7vh",
                                    color: "yellow",
                                    marginLeft: "0.8vh",
                                }}
                            >
                                generative audio
                            </div>
                        </div>

                        {/* <SyncButton /> */}
                        <div
                            id="hamburger"
                            style={{
                                fontSize: "15vh",
                                cursor: "pointer",
                            }}
                            onClick={openMenu}
                        >
                            ☰
                        </div>
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
