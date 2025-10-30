"use client";

import { createClient as createClientSupabase } from "@supabase/supabase-js";
// For client-side instances, `supabase-js` should be used instead of `@supabase/ssr`,
// because it is designed for browser activities such as storing tokens in localStorage and auto-refreshing sessions.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// function created a new Supabase (SB) client instance, which is essentially the interface to the SB project
export const supabaseClient = createClientSupabase(supabaseUrl!, supabaseKey!);
