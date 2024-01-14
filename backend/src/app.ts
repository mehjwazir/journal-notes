import MongoStore from 'connect-mongo';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import session from "express-session";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import cors from "cors";
import { requiresAuth } from './middleware/auth';
import notesRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import env from "./util/validateEnv";



const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(session({
	secret: env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 60 * 60 * 1000,
	},
	rolling: true,
	store: MongoStore.create({
		mongoUrl: env.MONGO_CONNECTION_STRING
	}),
}));

app.use("/api/users", userRoutes);

app.use("/api/notes", requiresAuth, notesRoutes);

app.use((req, res, next) => {
	next(createHttpError(404, "Endpoint not found"));
});


// eslint-disable-next-line @typescript-eslint/no-unused-vars 
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
		console.error(error);
	let errorMessage = "An unknown error occurred";
	let statusCode = 500;
	if (isHttpError(error)) {
		statusCode = error.status;
		errorMessage = error.message;
		}
		res.status(statusCode).json({ error: errorMessage });
	
});

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

export default app;