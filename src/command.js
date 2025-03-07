class VoltaxCommands {
    constructor(client) {
        this.client = client;
    }

    async set(key, value) {
        return await this.client.sendCommand(`SET ${key} ${value}`);
    }

    async get(key) {
        return await this.client.sendCommand(`GET ${key}`);
    }

    async del(key) {
        return await this.client.sendCommand(`DEL ${key}`);
    }

    async exists(key) {
        return await this.client.sendCommand(`EXISTS ${key}`);
    }

    async flushAll() {
        return await this.client.sendCommand(`FLUSHALL`);
    }
}

module.exports = VoltaxCommands;
