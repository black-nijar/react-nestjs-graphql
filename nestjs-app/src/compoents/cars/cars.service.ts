import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/cars';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carsRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carsRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carsRepository.create(newCarData);
    await this.carsRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }
}
