import express from "express"
import { specialityController } from "./speciality.controller"


const router = express.Router()

router.post("/", specialityController.createSpeciality)
router.get("/", specialityController.getAllSpeciality)
router.delete("/:id", specialityController.deleteSpeciality)
router.put("/:id", specialityController.updateSpeciality)

export const specialityRouter = router