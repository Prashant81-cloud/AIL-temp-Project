// App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}
