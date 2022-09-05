import { Injectable } from "@nestjs/common";
import { getCollection } from "../mongo";

@Injectable()
export class CompaniesService {
	async get(ownerId: string) {
		const companies = await getCollection("companies")
			.find({
				ownerId,
			})
			.toArray();
		companies.forEach((e) => delete e._id);
		return companies;
	}

	async update(ownerId: string, companyData: any) {
		const company = await getCollection("companies").findOneAndUpdate(
			{
				ownerId,
			},
			{
				$set: {
					...companyData,
					ownerId,
				},
			},
			{
				upsert: true,
				returnDocument: "after",
			},
		);

		delete company.value._id;

		return company.value;
	}
}
