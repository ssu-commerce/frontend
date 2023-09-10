import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

interface assetMap {
  [key: string]: string;
}

declare global {
  interface Window {
    assetMap: assetMap;
  }
}

hydrateRoot(document, <App assetMap={window.assetMap} />);
