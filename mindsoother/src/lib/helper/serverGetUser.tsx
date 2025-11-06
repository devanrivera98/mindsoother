import { createClient } from "../supabase/server"

export default async function serverGetUser() {
    
    const supabase = await createClient()
    const {data, error} = await supabase.auth.getUser()
    
    if (error) {
        console.error('Auth error:', error);
        return null;
    }

    return data.user;
}