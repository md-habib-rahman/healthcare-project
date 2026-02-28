/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { specialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpeciality = catchAsync(
	async (req: Request, res: Response) => {
		const payload = req.body;
		const result = await specialityService.createSpeciality(payload)
		return sendResponse(res, {
			httpStatusCode: 201,
			success: true,
			message: "speciality created successfully!",
			data: result
		})
	}
)
interface IResponseData<T> {
	httpStatusCode: number;
	success: boolean;
	message: string;
	data?: T;

}
const sendResponse = <T>(res: Response, responseData: IResponseData<T>) => {
	const { httpStatusCode, success, message, data } = responseData;
	res.status(httpStatusCode).json({
		success,
		message,
		data
	})
}

const getAllSpeciality = catchAsync(
	async (req: Request, res: Response) => {
		const result = await specialityService.getAllSpeciality()

		return sendResponse(res, {
			httpStatusCode: 200,
			success: true,
			message: "speciality data fetched successfully!",
			data: result
		})
	}
)

const deleteSpeciality = catchAsync(
	async (req: Request, res: Response) => {
		const { id } = req.params
		const result = await specialityService.deleteSpeciality(id as string)
		return res.status(200).json({
			success: true,
			message: "speciality removes successfully!",
			data: result
		})
	}
)

const updateSpeciality = catchAsync(
	async (req: Request, res: Response) => {
		const { id } = req.params
		const payload = req.body
		const result = await specialityService.updateSpeciality(id as string, { payload })
		return sendResponse(res, {
			httpStatusCode: 200,
			success: true,
			message: "speciality updated successfully!",
			data: result
		})
	}
)

export const specialityController = {
	createSpeciality,
	getAllSpeciality,
	deleteSpeciality,
	updateSpeciality
}