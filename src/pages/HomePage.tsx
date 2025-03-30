import React, { useState } from "react";
import { Button } from "antd";
import { StudentProvider } from "../context/StudentContext";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import "../styles/styles.css";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StudentProvider>
      <h1>Student Management System</h1>
      <div className="button-container">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>Add Student</Button>
      </div>
      <StudentTable />
      <StudentForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </StudentProvider>
  );
};

export default HomePage;