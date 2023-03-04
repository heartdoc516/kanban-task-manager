import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "@/lib/bcrypt";
import { createJWT } from "@/lib/jwt";
import { serialize } from "v8";

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: await hashPassword(req.body.password),
      },
    });

    const jwt = createJWT(user);

    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    res.status(201);
    res.json({});
  } else {
    res.status(402);
    res.json({});
  }
}
