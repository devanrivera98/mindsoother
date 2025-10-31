import React from "react";
import { createClient } from "@/lib/supabase/server";
import HeaderClient from "./HeaderClient";

export default async function Header(): Promise<React.JSX.Element> {
  // const supabase = await createClient();
  // const { data: { user } } = await supabase.auth.getUser();

  // console.log('user', user)

  return (
    <>
      <HeaderClient />
    </>
  );
}
