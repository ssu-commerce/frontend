"use client";

import type { ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export const StyledJsxRegistry = ({ children }: { children: ReactNode }) => {
  const cache = (() => {
    const cssCache = createCache({ key: "css" });
    cssCache.compat = true;
    return cssCache;
  })();

  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default StyledJsxRegistry;

// https://github.com/emotion-js/emotion/issues/2928
