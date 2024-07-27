import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://qgidmhkuhyejuzgkmiio.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaWRtaGt1aHllanV6Z2ttaWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxMTA3MjYsImV4cCI6MjAzNzY4NjcyNn0.aB7bBOPF6DYcaEuqP90q62GlHuEHIo2-8Us_jdvsxtQ";

const supabase = createClient (supabaseUrl, supabaseAnonKey);
export default supabase;

