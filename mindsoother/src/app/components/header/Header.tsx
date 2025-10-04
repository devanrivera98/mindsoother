import React from "react";
import { createClient } from "@/app/utils/supabase/server";
import HeaderClient from "./HeaderClient";

export default async function Header(): Promise<React.JSX.Element> {

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  console.log('user', user)
  // will this update when a user is being logged in on a different component??? 

  return (
  <>
    <HeaderClient user={user} />
  </>
  )
}