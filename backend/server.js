const express = require("express");
const app = express();

// Variables
const PORT = 8383;

//Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
