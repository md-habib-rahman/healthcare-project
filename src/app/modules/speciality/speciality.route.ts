import express from "express"
import { specialityController } from "./speciality.controller"


const router = express.Router()

router.post("/", specialityController.createSpeciality)

export const specialityRouter = router