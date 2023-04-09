import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { setCookie } from "nookies";

type UserData = {
  username: string;
  name: string;
};

export async function POST(res: Response) {
  const { username, name }: UserData = await res.json();

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (userExists) {
    return NextResponse.json(
      { message: "User already taken" },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: {
      username,
      name,
    },
  });

  setCookie({ res }, "@ignitecall:userId", user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7days
    path: "/",
  });
  return NextResponse.json({ user }, { status: 201 });
}
