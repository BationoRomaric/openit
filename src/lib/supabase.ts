import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Vérifiez vos variables d'environnement VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);