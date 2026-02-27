import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { specialityRouter } from "./app/modules/speciality/speciality.route";
import { indexRouter } from "./app/routes";

const app: Application = express();


// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", indexRouter)

// Basic route
app.get('/', async (req: Request, res: Response) => {
	const speciality = await prisma.speciality.create({
		data: {
			title: "cardiology"
		}
	})
	res.status(200).json({
		success: true,
		message: "API is working",
		data: speciality
	})
	// res.send('Hello, TypeScript + Express!');
});


export default app