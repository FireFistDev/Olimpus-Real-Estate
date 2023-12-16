import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PropertyModule } from './property/property.module';
import { AdminModule } from './admin/admin.module';
import { RealtorModule } from './realtor/realtor.module';

@Module({
  imports: [PrismaModule, PropertyModule, AdminModule, RealtorModule],
})
export class AppModule {}
