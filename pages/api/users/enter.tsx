import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { prisma } from "@prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { phone, email } = req.body;
	let user;
	if (phone) {
		user = await client.user.upsert({
			where: {
				phone: +phone,
			},
			create: {
				name: "Anonymous",
				phone: +phone,
			},
			update: {},
		});
	} else if (email) {
		user = await client.user.upsert({
			where: {
				email,
			},
			create: {
				name: "Anonymous",
				email,
			},
			update: {},
		});
	}
	return res.status(200).end();
}

export default withHandler("POST", handler);
