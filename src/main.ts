import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cors from "cors";
import helmet from "helmet";
import { connect } from "./mongo";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	await connect();

	app.use(helmet());
	app.use(cors());

	await app.listen(3000);
}
bootstrap();
