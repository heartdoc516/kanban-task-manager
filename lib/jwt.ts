import { SignJWT, jwtVerify } from "jose";
import { db } from "./db";

export const createJWT = (user) => {
  const issuedAt = Math.floor(Date.now() / 1000);
  const expiration = issuedAt + 60 * 60 * 24 * 7;

  return new SignJWT({ payload: { id: user.id, email: user.email } })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(issuedAt)
    .setExpirationTime(expiration)
    .setNotBefore(issuedAt)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

export const validateJWT = async (jwt) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  return payload as any;
};

export const getUserFromCookie = async (cookies) => {
  const jwt = cookies.get(process.env.COOKIE_NAME);

  const payload = await validateJWT(jwt.value);

  const user = await db.user.findUnique({
    where: {
      id: payload.payload.id,
    },
  });
  return user;
};
