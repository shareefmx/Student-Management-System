import React, { createContext, useContext, useState } from "react";

interface Student {
  id: number;
  name: string;
  gender: string;
  dob: string;
  year: string;
  course: string;
  address: string;
  contact: string;
  email: string;
}

interface StudentContextType {
  students: Student[];
  addStudent: (student: Student) => void;
  updateStudent: (id: number, updatedStudent: Student) => void;
  deleteStudent: (id: number) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (id: number, updatedStudent: Student) => {
    setStudents(students.map((s) => (s.id === id ? updatedStudent : s)));
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) throw new Error("useStudentContext must be used within StudentProvider");
  return context;
};
