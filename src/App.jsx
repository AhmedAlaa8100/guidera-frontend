import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import PostDetailsPage from "./pages/PostDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import ProtectedAuthRoute from "./ProtectedRoutes/ProtectedAuthRoute";
import DashboardPage from "./pages/DashboardPage";
import RoadMapPage from "./pages/RoadMapPage";
import ProjectManger from "./pages/ProjectManagerPage";


const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <ProtectedAuthRoute>
            <LoginPage />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedAuthRoute>
            <RegisterPage />{" "}
          </ProtectedAuthRoute>
        ),
      },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          // <ProtectedRoute>
          //   <DashboardPage />
          // </ProtectedRoute>
            <DashboardPage />
          
        ),
      },
      {
        path: "roadmap",
        element: (
          // <ProtectedRoute>
          //   <RoadMapPage />
          // </ProtectedRoute>
            <RoadMapPage />     
        ),
      },
      {
        path: "project-manager",
        element: (
          // <ProtectedRoute>
          //   <ProjectManger />
          // </ProtectedRoute>
            <ProjectManger />     
        ),
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
