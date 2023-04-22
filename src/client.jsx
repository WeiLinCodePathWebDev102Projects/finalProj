import { createClient } from '@supabase/supabase-js'

const URL = 'https://qzcqmuyjzepfxtbxkyfw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Y3FtdXlqemVwZnh0YnhreWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MjM0MzMsImV4cCI6MTk5NzQ5OTQzM30.x5xKhSBj1Uj7qpzr72_0NBoiXthRbUrxKu9r-i33QcY';


export const supabase = createClient(URL, API_KEY);