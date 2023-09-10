import React from "react";

function App({ assetMap }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={assetMap["reset.css"]} />
        <title>React App</title>
      </head>
      <body>body</body>
    </html>
  );
}

export default App;
