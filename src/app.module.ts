import { Module } from "@nestjs/common";
import { CompaniesModule } from "./companies/companies.module";
import { MissionsModule } from "./missions/missions.module";
import { TimesheetsModule } from "./timesheets/timesheets.module";

@Module({
	imports: [CompaniesModule, MissionsModule, TimesheetsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
