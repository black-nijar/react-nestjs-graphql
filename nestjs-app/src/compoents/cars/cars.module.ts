import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsResolver } from './cars.resolvers';
import { CarsService } from './cars.service';
import { Car } from './entities/cars';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
