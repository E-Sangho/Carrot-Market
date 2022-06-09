import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../../libs/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await PrismaClient.user.create({
		data: {
			email: "Email@gmail.com",
			name: "Your name",
		},
	});
	res.json({
		ok: true,
		data: "xx",
	});
}
