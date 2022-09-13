import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { getCollection } from "../mongo";

@Injectable()
export class TimesheetsService {
	async create(data: any) {
		return {
			timesheetId: (
				await getCollection("timesheets").insertOne({
					...data,
					createdAt: new Date(),
				})
			).insertedId,
		};
	}

	async get(id: string) {
		const timesheet = await getCollection("timesheets").findOne({
			_id: new ObjectId(id),
		});

		timesheet.id = timesheet._id;
		delete timesheet._id;

		return timesheet;
	}
}
