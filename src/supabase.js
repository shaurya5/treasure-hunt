import { createClient } from '@supabase/supabase-js';

const ANNON_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMTc3NTI1LCJleHAiOjE5NTg3NTM1MjV9.mE0SMSDXSaQ8trski-uAfBHBheVBXK8O4wzbnR-9Bek";
const URL = "https://dlgwprqipzplnwhabhrd.supabase.co";

export const supabase = createClient(URL, ANNON_SECRET);