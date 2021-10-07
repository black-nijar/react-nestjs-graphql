import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/cars';
export declare class CarsResolver {
    private carService;
    constructor(carService: CarsService);
    cars(): Promise<Car[]>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
}
