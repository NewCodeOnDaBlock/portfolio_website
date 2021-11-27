const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

require("./server/config/mongoose.config.js");

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());
// app.options("*", cors());

const allMyRoutes = require ("./server/routes/user.routes");
allMyRoutes(app);

app.listen(PORT, () => console.log(`You've successfully connected to port:${PORT}`));



