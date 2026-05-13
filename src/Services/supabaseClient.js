import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjkhfxfetwwiydtfyuut.supabase.co'
const supabaseAnonKey = 'sb_publishable_YLlDcGmbOfdnbs1gMATcvQ_YemicYod'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)