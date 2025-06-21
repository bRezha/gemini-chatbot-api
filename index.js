const express = require("express");
require("dotenv").config(); // Loads environment variables from .env file
const cors = require("cors"); // <-- 1. Import CORS
const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- 1. INITIALIZATION ---

const app = express();
const port = process.env.PORT || 3000;

// Check for API Key
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in the .env file.");
}

// Initialize the GoogleGenerativeAI client with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- 2. MIDDLEWARE ---

// Serve static files from the 'public' directory
app.use(express.static("public"));
// Enable CORS for all routes
app.use(cors()); // <-- 2. Use CORS middleware
// Enable JSON body parsing for POST requests
app.use(express.json());

// --- 3. API ROUTE ---

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: "Failed to generate response from AI." });
  }
});

// --- 4. START SERVER ---

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
