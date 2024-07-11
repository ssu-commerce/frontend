"use client";

import { useEffect, useState } from "react";

/**
 * 참조 링크
 * https://github.com/mswjs/examples/blob/with-next/examples/with-next/app/page.tsx
 */

export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mockingEnabled, enableMocking] = useState(false);

  async function enableApiMocking() {
    /**
     * @fixme Next puts this import to the top of
     * this module and runs it during the build
     * in Node.js. This makes "msw/browser" import to fail.
     */
    const { worker } = await import("../mocks/browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
    enableMocking(true);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      enableApiMocking();
    }
  }, []);

  if (typeof window === "undefined") {
    (async () => {
      const { server } = await import("../mocks/server");
      server.listen();
    })();
    return <>{children}</>;
  }

  if (!mockingEnabled) {
    return null;
  }

  return <>{children}</>;
}
