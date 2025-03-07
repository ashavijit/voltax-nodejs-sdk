const { VoltaxDB } = require("../index");

test("Should connect and disconnect", async () => {
    const client = new VoltaxDB();
    await client.connect();
    expect(client.isConnected).toBe(true);

    await client.disconnect();
});