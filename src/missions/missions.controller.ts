import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { MissionsService } from "./missions.service";

@Controller("missions")
export class MissionsController {
	constructor(private missions: MissionsService) {}

	@Get("/:creatorId")
	listByCreator(@Param("creatorId") creatorId: string) {
		return this.missions.listByCreator(creatorId);
	}

	@Post()
	create(@Body() dto: any) {
		return this.missions.create(dto);
	}
}
