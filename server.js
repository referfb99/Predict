const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors()); // Enable CORS

app.get("/verify", async (req, res) => {
    const { account_number } = req.query;
    const apiKey = "AIgNfmL4PlLfvSbSUmN0T9KBkW5j4rLr1raRI2iI57383454"; // Replace with your actual API key
    const url = `https://nubapi.com/verify?account_number=${account_number}&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching bank" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
