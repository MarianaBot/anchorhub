import { Branding } from '../types';

export const getBrandingByTenant = (tenantId: string): Branding => {
  // Mock logic: In a real app, this would fetch from an API/Database
  const brands: Record<string, Branding> = {
    'mentor-a': {
      primaryColor: '#4F46E5', // Indigo
      secondaryColor: '#EEF2FF',
      logoUrl: 'https://placeholder.com/logo-a.png',
      mentorName: 'Mentor Academy',
    },
    'mentor-b': {
      primaryColor: '#059669', // Emerald
      secondaryColor: '#ECFDF5',
      logoUrl: 'https://placeholder.com/logo-b.png',
      mentorName: 'Green Growth',
    },
  };

  return brands[tenantId] || brands['mentor-a'];
};
