import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { createJWT } from "@/lib/jwt";
import { serialize } from "cookie";
import { comparePasswords } from "@/lib/bcrypt";

export default async function signinHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const isUser = await comparePasswords(req.body.password, user?.password);

    if (isUser) {
      const jwt = await createJWT(user);

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
      throw new Error();
    }
  } else {
    res.status(401);
    res.json({});
  }
}
