import { Injectable } from "@nestjs/common";
import { getCollection } from "../mongo";

@Injectable()
export class MissionsService {
	listByCreator(creatorId: string) {
		return getCollection("missions")
			.find({
				creatorId,
			})
			.toArray();
	}

	create(dto: any) {
		return getCollection("missions").insertOne({ ...dto });
	}
}
