import express from "express";
import cors from "cors";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/api/candidates", router);

app.listen(PORT, () => {
  console.log(`I'm Listening on port ${PORT}`);
});

export default app;
