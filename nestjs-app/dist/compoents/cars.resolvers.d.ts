import { CarsService } from './cars.service';
export declare class CarsResolver {
    private carService;
    constructor(carService: CarsService);
    cars(): Promise<string>;
}
