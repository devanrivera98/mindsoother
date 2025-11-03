import { adminAuthClient } from "@/lib/supabase/adminClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const result = await req.json();
    const { email, loginPassword } = result.data;

    if (!email && !loginPassword) {
      return NextResponse.json({ error: " and Password" }, { status: 400 });
    } else if (!email) {
      return NextResponse.json({ error: "Missing Email" }, { status: 400 });
    } else if (!loginPassword) {
      return NextResponse.json({ error: "Missing password" }, { status: 400 });
    }

    const { data, error } = await adminAuthClient.auth.signInWithPassword({
      email: email,
      password: loginPassword,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ data: data }, { status: 200 });
    }
  } catch (err) {
    console.error(err);
  }
}
