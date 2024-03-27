"use client";
import { useEffect } from "react";

/**
 * 참조 링크
 * https://github.com/mswjs/msw/issues/1644
 * draft pr : https://github.com/mswjs/examples/pull/101
 */

export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined" && process.env.NEXT_MOCK_SERVER) {
        const { worker } = await import("../mocks/browser");
        await worker.start();
      }
    })();
  }, []);

  return <>{children}</>;
}
