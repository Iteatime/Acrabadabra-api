import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CompaniesService } from "./companies.service";

@Controller("companies")
export class CompaniesController {
	constructor(private companies: CompaniesService) {}

	@Get("/:userId")
	get(@Param("userId") userId: string) {
		return this.companies.get(userId);
	}

	@Post("/:companyId")
	update(@Param("companyId") companyId: string, @Body() company: any) {
		return this.companies.update(companyId, company);
	}
}
