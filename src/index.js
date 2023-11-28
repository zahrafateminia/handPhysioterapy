import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clon2mq3bd1l701t7d4r8fuis/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
