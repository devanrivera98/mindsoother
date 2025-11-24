'use server'
import { createServerClient } from "@/lib/supabase/server"

export default async function getUserArticles() {

    const supabase = createServerClient();

    const {data, error} = await (await supabase).from('articles').select();

    console.log(data)
}