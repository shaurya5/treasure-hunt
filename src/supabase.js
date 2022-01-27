import { createClient } from '@supabase/supabase-js';

const url = 'https://dlgwprqipzplnwhabhrd.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMTc3NTI1LCJleHAiOjE5NTg3NTM1MjV9.mE0SMSDXSaQ8trski-uAfBHBheVBXK8O4wzbnR-9Bek';

export const supabase = createClient(url, anonKey);