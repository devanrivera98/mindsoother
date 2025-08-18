import Homepage from "./home/page";
import { createClient } from "./utils/server";
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()
  return (
    <div>
      <Homepage />
    </div>
  );
}
