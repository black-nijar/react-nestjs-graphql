import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/cars';
export declare class CarsService {
    private carsRepository;
    constructor(carsRepository: Repository<Car>);
    getAllCars(): Promise<Car[]>;
    addCar(newCarData: NewCarInput): Promise<Car>;
}
