import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TimesheetsService } from "./timesheets.service";

@Controller("timesheets")
export class TimesheetsController {
	constructor(private timesheets: TimesheetsService) {}

	@Post()
	create(@Body() data: any) {
		return this.timesheets.create(data);
	}

	@Get("/:id")
	getTimesheet(@Param("id") id: string) {
		return this.timesheets.get(id);
	}
}
