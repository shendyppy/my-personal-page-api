import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => res.send("Hello API"));

export default app;
