import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import connectDB from "./config/ConnectDB.js";
import authRoute from "./routes/authRoute.js";
import errorHandler from "./middleware/errorMiddleware.js";
import userRoute from "./routes/userRoute.js"

dotenv.config()
connectDB()

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(errorHandler)

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
