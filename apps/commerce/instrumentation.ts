export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("server instrucmenttation");
    const { server } = await import("./mocks/server");
    server.listen();
  }
}
