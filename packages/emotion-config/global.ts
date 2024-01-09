import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const globalStyle = css`
  ${emotionReset};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    height: 100%;
    width: 100%;
    margin: 0;
    background: #ffffff;
    padding: 0;
    font-style: normal;
    font-weight: 400;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  body {
    height: 100%;
    width: 100%;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  input {
    padding: 0;
    margin: 0;
  }

  div#root {
    width: 100%;
    height: 100%;
  }
`;
