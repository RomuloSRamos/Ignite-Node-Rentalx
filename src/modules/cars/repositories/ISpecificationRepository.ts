import { Specification } from "../infra/typeorm/entities/specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  // list(): Specification[];
}
export { ISpecificationRepository, ICreateSpecificationDTO };
