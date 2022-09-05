import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { MissionsModule } from './missions/missions.module';

@Module({
  imports: [CompaniesModule, MissionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
