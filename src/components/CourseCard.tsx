import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  primaryColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, primaryColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2">{course.title}</h3>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-500" 
            style={{ width: `${course.progress}%`, backgroundColor: primaryColor }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">{course.progress}% finalizat</p>
      </div>
    </div>
  );
};

export default CourseCard;
