import { Router } from "express";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";
import multer from "multer";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/updateUseAvaratController";

import uploadConfig from "../config/upload";

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
