import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const api = {
  getModules: async () => {
    const { data, error } = await supabase.from('modules').select('*');
    if (error) throw error;
    return data;
  },
  getInvoices: async () => {
     // Mock link for now
     return [{ id: 1, amount: 1250, date: '2026-02-01', status: 'Plătit' }];
  }
};
