// App.jsx
import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import MainLayout from "./Layout/MainLayout";

export default function App() {

  {/*
    <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="192x192" href="/logo-192.png" />
<link rel="apple-touch-icon" href="/logo-192.png" />
    */}

  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}
