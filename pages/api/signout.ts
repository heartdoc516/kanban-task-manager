import { serialize } from "cookie";

export default async function signOutHandler(req, res) {
  res.setHeader(
    "Set-Cookie",
    serialize(process.env.COOKIE_NAME, "", {
      httpOnly: true,
      path: "/",
      maxAge: -1,
    })
  );
  res.json({});
}
