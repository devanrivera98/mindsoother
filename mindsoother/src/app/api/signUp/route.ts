import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {

    try {
    const supabase = await createClient();
    const {email} = await req.json()

    if (!email) {
        return NextResponse.json({error: "Missing Email"}, {status: 400})
    }

    const {data, error} = await supabase.auth.admin.listUsers(); 
    if (error) throw error;

    const userExist = data.users.some((user) => user.email === email)

    return NextResponse.json({userExist: userExist})
    } catch (err) {
        console.log('Response error', err)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}