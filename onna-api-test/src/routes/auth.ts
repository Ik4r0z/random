import { Router } from "express"

import { signUp, login } from "../controllers/auth"

import { errorHandler } from "../errorHandler"

const authRoutes:Router = Router()

authRoutes.post("/signUp", errorHandler(signUp))
authRoutes.post("/login", errorHandler(login))

export default authRoutes