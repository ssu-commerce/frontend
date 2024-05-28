import type { ReactNode } from "react";
import { ReactQueryProvider } from "./reactQuery";
import StyledJsxProvider from "./emotion";
import { ThemeProvider } from "./theme";
import { MockProvider } from "./msw";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <MockProvider>
      <ReactQueryProvider>
        <StyledJsxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledJsxProvider>
      </ReactQueryProvider>
    </MockProvider>
  );
};

export default Providers;
