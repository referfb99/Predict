require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/verify', async (req, res) => {
    const accountNumber = req.query.account_number;
    if (!accountNumber) {
        return res.status(400).json({ error: "Account number is required" });
    }

    const apiKey = process.env.NUBAPI_KEY;
    const url = `https://nubapi.com/verify?account_number=${accountNumber}&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bank name", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});