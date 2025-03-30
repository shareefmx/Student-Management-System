import React from "react";
import { StudentProvider } from "./context/StudentContext";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <StudentProvider>
      <HomePage />
    </StudentProvider>
  );
};

export default App;