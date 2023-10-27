const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.json("Welcome!");
});

// api error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message, stack: err.stack });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
