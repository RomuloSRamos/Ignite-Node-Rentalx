import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });
  it("should be able to list all cars", async () => {
    const expectedCars = await carsRepositoryInMemory.create({
      name: "car1",
      description: "car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "car_brant",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({});
    console.log("all cars", cars);
    expect(cars).toEqual([expectedCars]);
  });
  it("should be able to list available cars by brand ", async () => {
    const expectedCars = await carsRepositoryInMemory.create({
      name: "car2",
      description: "car2 description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "car_brant_test",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brant_test",
    });
    console.log("cars by brand", cars);
    expect(cars).toEqual([expectedCars]);
  });
  it("should be able to list available cars by name ", async () => {
    const expectedCars = await carsRepositoryInMemory.create({
      name: "car3",
      description: "car3 description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "car_brant",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "car3",
    });
    console.log("cars by name", cars);
    expect(cars).toEqual([expectedCars]);
  });
  it("should be able to list available cars by category ", async () => {
    const expectedCars = await carsRepositoryInMemory.create({
      name: "car4",
      description: "car4 description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "car_brant",
      category_id: "12345",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });
    console.log("cars by name", cars);
    expect(cars).toEqual([expectedCars]);
  });
});
