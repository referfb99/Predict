const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded API Key (not recommended for public repos)
const API_KEY = "AIgNfmL4PlLfvSbSUmN0T9KBkW5j4rLr1raRI2iI57383454";

app.get("/predict-bank", async (req, res) => {
    const accountNumber = req.query.account_number;
    
    if (!accountNumber) {
        return res.status(400).json({ error: "Account number is required" });
    }

    try {
        const response = await fetch(`https://nubapi.com/verify?account_number=${accountNumber}&api_key=${API_KEY}`);
        const data = await response.json();
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
