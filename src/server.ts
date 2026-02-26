import { env } from "process";
import app from "./app";

const port = env.PORT || 3000;

const main = () => {
	try {
		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}`);
		});
	} catch (error) {
		console.error("failed to start server", error)
	}
}

main()
