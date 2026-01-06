import express from "express";
import userRoutes from "./routes/user.routes";


const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy 🚀" });
});

export default app;
