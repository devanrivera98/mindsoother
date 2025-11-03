import React from "react";
import { createClient } from "@/lib/supabase/server";
import HeaderClient from "./HeaderClient";

export default async function Header(): Promise<React.JSX.Element> {
  return (
    <>
      <HeaderClient />
    </>
  );
}
