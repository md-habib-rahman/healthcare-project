import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
	const speciality = await prisma.speciality.create({
		data: payload
	})

	return speciality
}

const getAllSpeciality = async () => {
	const speciality = await prisma.speciality.findMany({})

	return speciality
}
const deleteSpeciality = async (id: string) => {
	const result = await prisma.speciality.delete({
		where: {
			id
		}
	})


	return result
}

const updateSpeciality = async (id: string, { payload }: { payload: Speciality }) => {
	console.log({ id }, payload)
	const result = await prisma.speciality.update({
		where: {
			id
		}, data: payload

	})
	return result
}

export const specialityService = { createSpeciality, getAllSpeciality, deleteSpeciality, updateSpeciality }