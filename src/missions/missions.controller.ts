import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
} from "@nestjs/common";
import { MissionsService } from "./missions.service";

@Controller("missions")
export class MissionsController {
	constructor(private missions: MissionsService) {}

	@Get("/:missionId")
	getById(@Param("missionId") missionId: string) {
		return this.missions.getById(missionId);
	}

	@Get("/creators/:creatorId")
	listByCreator(@Param("creatorId") creatorId: string) {
		return this.missions.listByCreator(creatorId);
	}

	@Post()
	create(@Body() dto: any) {
		return this.missions.create(dto);
	}

	@Delete("/:missionId")
	delete(@Param("missionId") missionId: string) {
		return this.missions.delete(missionId);
	}
}
