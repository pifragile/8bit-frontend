import "./App.css";
import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import Home from "./components/Home";
import TokenDetail from "./components/TokenDetail";
import User from "./components/User";
import MarketPlace from "./components/Marketplace";
import About from "./components/About";

import { WalletContext, beaconWallet } from "./lib/wallet";

function App() {
    const [wallet] = useState(beaconWallet);

    return (
        <WalletContext.Provider value={wallet}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/token-detail/:contract/:tokenId"
                        element={<TokenDetail />}
                    />
                    <Route path="/user/:address" element={<User />} />
                    <Route path="/marketplace" element={<MarketPlace />} />
                </Routes>
            </div>
        </WalletContext.Provider>
    );
}

export default App;
