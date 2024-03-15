import type { ReactNode } from "react";
import { ReactQueryProvider } from "./reactQuery";
import StyledJsxProvider from "./emotion";
import { ThemeProvider } from "./theme";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <StyledJsxProvider>
        <ThemeProvider>
          {children}
          <div id="portal" />
        </ThemeProvider>
      </StyledJsxProvider>
    </ReactQueryProvider>
  );
};

export default Providers;