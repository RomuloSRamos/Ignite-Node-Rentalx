import { parse } from "csv-parse";
import fs from "fs";

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  loadCategories(file: Express.Multer.File): IImportCategory[] {
    const stream = fs.createReadStream(file.path);
    const categories: IImportCategory[] = [];
    const parseFile = parse({});
    stream.pipe(parseFile);
    parseFile.on("data", async (line) => {
      const [name, description] = line;
      categories.push({ name, description });
      console.log("loadCategories...categories:", categories);
    });
    return categories;
  }
  execute(file: Express.Multer.File): void {
    const categories = this.loadCategories(file);
    console.log("execute...categories:", categories);
  }
}
export { ImportCategoryUseCase };
