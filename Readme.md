
---

# **VoltaxDB Node.js SDK**  
🚀 A Node.js SDK for interacting with **VoltaxDB**, a high-performance in-memory database.  
Easily connect, store, retrieve, and manage data using this lightweight client.

---

## **📦 Installation**  
Install the SDK via **npm** or **yarn**:  

```bash
npm install voltaxdb-sdk
```
or  
```bash
yarn add voltaxdb-sdk
```

---

## **🔌 Quick Start**  
### **1️⃣ Import and Initialize the Client**  
```javascript
const VoltaxDB = require("voltaxdb-sdk");

const client = new VoltaxDB();
client.connect();
```

### **2️⃣ Basic Commands**  
```javascript
// Set a value
await client.set("name", "VoltaxDB");

// Get a value
const value = await client.get("name");
console.log(value); // Output: "VoltaxDB"

// Delete a key
await client.delete("name");

// Flush all data
await client.flushAll();

// Close connection
client.disconnect();
```

---

## **📜 API Reference**  

### **1️⃣ `connect()`**
- **Description:** Establishes a connection to the VoltaxDB server.  
- **Usage:**  
```javascript
await client.connect();
```

### **2️⃣ `set(key, value)`**
- **Description:** Stores a key-value pair in VoltaxDB.  
- **Usage:**  
```javascript
await client.set("username", "Avijit");
```

### **3️⃣ `get(key)`**
- **Description:** Retrieves the value of a given key.  
- **Usage:**  
```javascript
const value = await client.get("username");
console.log(value); // "Avijit"
```

### **4️⃣ `delete(key)`**
- **Description:** Deletes a key from the database.  
- **Usage:**  
```javascript
await client.delete("username");
```

### **5️⃣ `keys()`**
- **Description:** Fetches all keys from the database.  
- **Usage:**  
```javascript
const allKeys = await client.keys();
console.log(allKeys); // ["key1", "key2", "key3"]
```

### **6️⃣ `flushAll()`**
- **Description:** Deletes all keys in the database.  
- **Usage:**  
```javascript
await client.flushAll();
```

### **7️⃣ `disconnect()`**
- **Description:** Closes the connection to the VoltaxDB server.  
- **Usage:**  
```javascript
client.disconnect();
```

---

## **🛠 Example Project**
Create a simple **Node.js script** to interact with VoltaxDB.

### **📄 `index.js`**
```javascript
const VoltaxDB = require("voltaxdb-sdk");

(async () => {
    const client = new VoltaxDB();
    await client.connect();

    await client.set("framework", "Node.js");
    console.log(await client.get("framework")); // Output: "Node.js"

    await client.delete("framework");
    await client.disconnect();
})();
```

Run the script:
```bash
node index.js
```

---

## **✅ Features**
- ⚡ **Lightweight & Fast** – Efficient TCP socket communication.  
- 🔥 **Promise-based API** – Easy async/await usage.  
- 🚀 **Thread-Safe** – Prevents race conditions.  
- 🛡 **Error Handling** – Catches connection failures & invalid commands.  

---

## **🧪 Running Tests**
This SDK includes unit tests to ensure reliability.

```bash
npm test
```

---

## **📜 License**
This project is licensed under the **MIT License**.

