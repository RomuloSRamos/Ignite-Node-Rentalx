// import { CategoriesRepository } from "../repositories/CategoriesRepository";

import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("this Specification already Exists");
    }
    this.specificationRepository.create({ name, description });
  }
}
export { CreateSpecificationService };
