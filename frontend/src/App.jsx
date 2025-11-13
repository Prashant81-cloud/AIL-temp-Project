// App.jsx
import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import MainLayout from "./Layout/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}
