const { VoltaxDB, VoltaxCommands } = require("../index");

async function main() {
    const client = new VoltaxDB();
    await client.connect();
    
    const db = new VoltaxCommands(client);
    console.log(await db.set("name", "VoltaxDB"));  // ✅ OK
    console.log(await db.get("name"));             // 📌 VoltaxDB

    client.disconnect();
}

main();
