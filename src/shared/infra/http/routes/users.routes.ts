import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/updateUseAvaratController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));
const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.patch(
  "/avatar",
  ensureAuthenticate,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
