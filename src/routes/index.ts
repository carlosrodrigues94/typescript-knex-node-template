import { UserController } from "@controllers/userController";
import { Router } from "express";

const userController = new UserController();

const routes = Router();

routes.post("/create-user", userController.post);

export { routes };
