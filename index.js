require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
