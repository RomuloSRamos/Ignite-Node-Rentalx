import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/updateUseAvaratController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const UsersRouters = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));
const createUserController = new CreateUserController();
UsersRouters.post("/", createUserController.handle);
const updateUserAvatarController = new UpdateUserAvatarController();

UsersRouters.patch(
  "/avatar",
  ensureAuthenticate,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { UsersRouters };
