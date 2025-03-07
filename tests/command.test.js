const { VoltaxDB, VoltaxCommands } = require("../index");

test("Should set and get value", async () => {
    const client = new VoltaxDB();
    await client.connect();
    const db = new VoltaxCommands(client);

    await db.set("testKey", "testValue");
    const value = await db.get("testKey");
    expect(value).toBe("testValue");

    client.disconnect();
});
