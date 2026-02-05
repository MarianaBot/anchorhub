export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  mentorName: string;
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  progress: number; // 0-100
  mentorId: string;
}

export interface Material {
  id: string;
  courseId: string;
  title: string;
  type: 'video' | 'pdf';
  url: string;
  thumbnail?: string;
}

export interface TenantContext {
  branding: Branding;
  courses: Course[];
}
