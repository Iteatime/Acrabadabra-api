import { Injectable } from "@nestjs/common";
import { getCollection } from "../mongo";
import { ObjectId } from "mongodb";

@Injectable()
export class MissionsService {
	async listByCreator(creatorId: string) {
		const missions = await getCollection("missions")
			.find({
				creatorId,
			})
			.toArray();

		missions.forEach((e) => {
			e.id = e._id;
			delete e._id;
		});

		return missions;
	}

	async getById(missionId: string) {
		const mission = await getCollection("missions").findOne({
			_id: new ObjectId(missionId),
		});

		mission.id = mission._id;
		delete mission._id;

		return mission;
	}

	create(dto: any) {
		return getCollection("missions").insertOne({ ...dto });
	}

	delete(missionId: string) {
		return getCollection("missions").findOneAndDelete({
			_id: new ObjectId(missionId),
		});
	}
	update(missionId: string, dto: any) {
		return getCollection("missions").findOneAndUpdate(
			{
				_id: new ObjectId(missionId),
			},
			{
				$set: {
					...dto,
				},
			}
		);
	}
}
