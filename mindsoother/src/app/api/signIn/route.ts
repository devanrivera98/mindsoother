import { adminAuthClient } from "@/app/utils/supabase/adminClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email && !password) {
      return NextResponse.json(
        { error: "Missing Email and Password" },
        { status: 400 },
      );
    } else if (!email) {
      return NextResponse.json({ error: "Missing Email" }, { status: 400 });
    } else if (!password) {
      return NextResponse.json({ error: "Missing password" }, { status: 400 });
    }

    const { data, error } = await adminAuthClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ data: data }, { status: 200 });
    }
  } catch (err) {
    console.log(err);
  }
}

// route create it just needs to be implemented in the sign in page formSubmit
