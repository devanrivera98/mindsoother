import { adminAuthClient } from "@/app/utils/supabase/adminClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Missing Email" }, { status: 400 });
    }

    const { data, error } = await adminAuthClient.auth.admin.listUsers();
    if (error) throw error;

    const userExist = data.users.some((user) => user.email === email);
    console.log(userExist);

    if (userExist) {
      return NextResponse.json({
        userExist: userExist,
        message: "This email address is already in the system.",
      });
    } else {
      return NextResponse.json({ userExist: userExist });
    }
  } catch (err) {
    console.log("Response error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
