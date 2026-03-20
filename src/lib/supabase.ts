import { createClient } from '@supabase/supabase-js';

// We use placeholder values to prevent crashes if the environment variables are not yet set.
// The real values should be provided in a .env.local file.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
