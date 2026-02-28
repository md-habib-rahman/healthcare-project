import { Router } from "express";
import { specialityRouter } from "../modules/speciality/speciality.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router()

router.use('/auth', AuthRoutes)
router.use("/speciality", specialityRouter)

export const indexRouter = router