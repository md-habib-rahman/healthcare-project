import { Request, Response } from "express";
import { specialityService } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
	try {
		const payload = req.body
		const result = await specialityService.createSpeciality(payload)
		// console.log(result)
		return res.status(201).json({
			success: true,
			message: "Speciality created successfully!",
			data: result
		})
	} catch (err) {
		console.error(err)
		return res.status(400).json({
			success: false,
			message: "speciality creattion was not successful!",
			error: err
		})
	}

}

export const specialityController = {
	createSpeciality
}