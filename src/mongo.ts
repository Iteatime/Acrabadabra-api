import { MongoClient } from "mongodb";

const client = new MongoClient(
	process.env.MONGO_URL || "mongodb://localhost:27017",
);

export function getCollection(name: string) {
	return client.db(process.env.MONGO_DB || "acra_dev").collection(name);
}

export const connect = () => client.connect();
