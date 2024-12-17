import express from "express";
import routes from "./routes.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(9000, () => {
  console.log("Server running on Port 9000");
});
