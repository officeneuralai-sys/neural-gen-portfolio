// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jayebchfzizkcixayctx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpheWViY2hmeml6a2NpeGF5Y3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NDQ1MzIsImV4cCI6MjA3MTUyMDUzMn0.FSCtoxazKz0LwBMpqZObJ7SuxpDWKWuYF2aqr8N8how'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
