const net = require("net");
const { DEFAULT_HOST, DEFAULT_PORT } = require("./config");

class VoltaxDB {
    constructor(host = DEFAULT_HOST, port = DEFAULT_PORT) {
        this.host = host;
        this.port = port;
        this.client = new net.Socket();
        this.isConnected = false;
        this.queue = [];

        this.client.on("data", (data) => {
            const response = data.toString().trim();
            const callback = this.queue.shift();
            if (callback) callback(null, response);
        });

        this.client.on("error", (err) => console.error(`⚠️ VoltaxDB Error: ${err.message}`));

        this.client.on("close", () => {
            console.log("❌ Disconnected from VoltaxDB");
            this.isConnected = false;
        });
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect(this.port, this.host, () => {
                console.log(`✅ Connected to VoltaxDB at ${this.host}:${this.port}`);
                this.isConnected = true;
                resolve();
            });

            this.client.on("error", (err) => reject(err));
        });
    }

    sendCommand(command) {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) return reject("❌ Not connected to VoltaxDB");

            this.queue.push((err, response) => {
                if (err) reject(err);
                else resolve(response);
            });

            this.client.write(command + "\n");
        });
    }

    disconnect() {
        return new Promise((resolve) => {
            this.client.on("close", () => {
                console.log("❌ Disconnected from VoltaxDB");
                this.isConnected = false;
                resolve();
            });
            this.client.end();
        });
    }
    
    
}

module.exports = VoltaxDB;
