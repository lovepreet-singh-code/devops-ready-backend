import express from "express";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/error.middleware";


const app = express();

app.use(express.json());
app.use(errorHandler);


app.use("/api", userRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy 🚀" });
});

export default app;
