// AnchorahubBase - LIVE ENGINE CONFIG
import { createClient } from '../../node_modules/@supabase/supabase-js/dist/index.mjs';

const supabaseUrl = 'https://hmvdljoswvewnhqegdle.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdmRsam9zd3Zld25ocWVnZGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyODU5NzcsImV4cCI6MjA4NTg2MTk3N30.f4FS1F1YW3XXCyPGL83wofGvAPWu22SjnPLUHO_H5uA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Logica de Business AnchorahubBase 100%
export const ahubService = {
  // --- TENANTS ---
  getTenants: async () => {
    const { data, error } = await supabase.from('tenants').select('*');
    if (error) throw error;
    return data;
  },

  // --- COURSES ---
  getCourses: async (tenantId) => {
    const { data, error } = await supabase
      .from('courses')
      .select('*, modules(*)')
      .eq('tenant_id', tenantId);
    if (error) throw error;
    return data;
  },

  createCourse: async (courseData) => {
    const { data, error } = await supabase.from('courses').insert(courseData).select();
    if (error) throw error;
    return data[0];
  },

  updateCourse: async (id, updateData) => {
    const { data, error } = await supabase.from('courses').update(updateData).eq('id', id).select();
    if (error) throw error;
    return data[0];
  },

  // --- MODULES ---
  getModules: async (courseId) => {
    const { data, error } = await supabase.from('modules').select('*').eq('course_id', courseId).order('order', { ascending: true });
    if (error) throw error;
    return data;
  },

  createModule: async (moduleData) => {
    const { data, error } = await supabase.from('modules').insert(moduleData).select();
    if (error) throw error;
    return data[0];
  },

  // --- PAYMENTS ---
  recordPayment: async (paymentData) => {
    const { data, error } = await supabase.from('payments').insert(paymentData).select();
    if (error) throw error;
    return data[0];
  },

  getTenantPayments: async (tenantId) => {
    const { data, error } = await supabase.from('payments').select('*').eq('tenant_id', tenantId);
    if (error) throw error;
    return data;
  },

  // --- NOTIFICATIONS ---
  sendNotification: async (notifData) => {
    const { data, error } = await supabase.from('notifications').insert(notifData).select();
    if (error) throw error;
    return data[0];
  },

  getUserNotifications: async (userId) => {
    const { data, error } = await supabase.from('notifications').select('*').eq('user_id', userId).eq('is_read', false);
    if (error) throw error;
    return data;
  },

  markNotificationRead: async (notifId) => {
    const { error } = await supabase.from('notifications').update({ is_read: true }).eq('id', notifId);
    if (error) throw error;
    return true;
  }
};
