
const express = require('express');
const bodyParser = require('body-parser');
// const fetch = require('node-fetch');

// Use dynamic import to load node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Your existing code using fetch should work with this dynamic import

const path = require('path');

const app = express();
const port = 3000;
const cors = require('cors');

// Use CORS middleware to allow all origins (for development purposes)
app.use(cors());


app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/api/chat', async (req, res) => {
    const userPrompt = req.body.prompt;
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },            
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userPrompt }]
            })
        });
        const data = await response.json();
        // Extract and send the response message back to the client
        console.log(data);
        const responseMessage = data.choices[0].message.content;
        res.json({ responseMessage: responseMessage });
    } catch (error) {
        console.error("Error calling the ChatGPT API:", error);
        res.status(500).send("Error processing your request");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
