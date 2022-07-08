import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./context/auth0-provider-with-history";
import UserProfileProvider from "./context/UserProfileProvider";

ReactDOM.render(
    <BrowserRouter>
        <Auth0ProviderWithHistory>
            <UserProfileProvider>
                <App />
            </UserProfileProvider>
        </Auth0ProviderWithHistory>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
