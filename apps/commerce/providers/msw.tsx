"use client";

/**
 * 참조 링크
 * https://github.com/mswjs/msw/issues/1644
 * draft pr : https://github.com/mswjs/examples/pull/101
 */

export async function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window === "undefined") {
    const { server } = await import("../mocks/server");
    server.listen();
  } else {
    const { worker } = await import("../mocks/browser");
    await worker.start();
  }
  return <>{children}</>;
}
