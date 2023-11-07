const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGO_DB, SERVER_PORT } = require("./constant");
const pdfRouter = require("./router/pdfRouter");
const UesrRouter = require("./router/userRouter");
const app = express();

/** Middleware */
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

/** Router */
app.use("/user", UesrRouter);
app.use("/pdf", pdfRouter);

/** MongoDB Connection */
mongoose
  .connect(`${MONGO_DB}/Vidyalai`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

/** Server Connection  */
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
