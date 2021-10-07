import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/cars';

@Resolver()
export class CarsResolver {
  constructor(private carService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
