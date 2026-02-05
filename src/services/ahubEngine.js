// AnchorahubBase - LIVE ENGINE CONFIG
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hmvdljoswvewnhqegdle.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdmRsam9zd3Zld25ocWVnZGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyODU5NzcsImV4cCI6MjA4NTg2MTk3N30.f4FS1F1YW3XXCyPGL83wofGvAPWu22SjnPLUHO_H5uA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Logica de Business AnchorahubBase 100%
export const ahubService = {
  // Gestiune Cursuri (The Grid)
  getCourses: async (tenantId) => {
    const { data } = await supabase.from('courses').select('*, modules(*)').eq('tenant_id', tenantId);
    return data;
  },
  
  // Motor Retenție CNV
  getRetentionMessage: async (tenantId, days) => {
    const { data } = await supabase.from('notification_templates').select('message_text').eq('tenant_id', tenantId).eq('trigger_days', days).single();
    return data?.message_text || "Prețuim prezența ta.";
  }
};
