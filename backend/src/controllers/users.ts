import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../models/user";

interface SignUpBody {
	username?: string,
	email?: string,
	password?: string,
}
export const signUp: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
	const username = req.body.username;
	const email = req.body.email;
	const passwordRaw = req.body.password;


	try {
		if (!username || !email || !passwordRaw) {
			throw createHttpError(400, "Parameters missing");
		}

		const existingUsername = await UserModel.findOne({ username: username }).exec();

		if (existingUsername) {
			throw createHttpError(409, "Username already taken. Please choose a different one or log in instead.");
		}

		const existingEmail = await UserModel.findOne({ email: email }).exec()
		
		if (existingEmail) {
			
			throw createHttpError(400, "A user with this email already exists. Please log in instead");
		}

	} catch (error) {
		next(error);
	}
};