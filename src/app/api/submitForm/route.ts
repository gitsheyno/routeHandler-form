import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data: Feedback = await request.json();

  const { name, email, message } = data;

  console.log(`name : ${name} - email : ${email} - message : ${message}`);

  return NextResponse.json({ message: "Success" });
}
