const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
