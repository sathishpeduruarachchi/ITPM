const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000; // Set default port to 8074 if process.env.PORT is not defined

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const signupRouter = require("./routes/signup");
app.use("/signup", signupRouter);

const generalUserRouter = require("./routes/general_user");
app.use("/general_user", generalUserRouter);

app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
);
