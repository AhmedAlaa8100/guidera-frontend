import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import SmartLayout from "./layouts/SmartLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import ProtectedAuthRoute from "./ProtectedRoutes/ProtectedAuthRoute";
import DashboardPage from "./pages/DashboardPage";
import RoadMapPage from "./pages/RoadMapPage";
import ProjectManger from "./pages/ManagerPage";
import DashboardCompany from "./pages/dashboard-company";
import AboutPage from "./pages/AboutPage";
import JobOffersPage from "./pages/JobOffersPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: (
          // <ProtectedAuthRoute>
          //   <LoginPage />
          // </ProtectedAuthRoute>
          <LoginPage />
        ),
      },
      {
        path: "register",
        element: (
          // <ProtectedAuthRoute>
          //   <RegisterPage />
          // </ProtectedAuthRoute>
          <RegisterPage />
        ),
      },
    ],
  },
  {
    path: "/user",
    element: <SmartLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="about" />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "job-offers",
        element: (
          // <ProtectedRoute>
          //   <JobOffersPage />
          // </ProtectedRoute>
          <JobOffersPage />
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
      {
        path: "project-manager/:id",
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

  {
    path: "/company",
    element: <SmartLayout />,
    children: [
      {
        index: true,
        element: <DashboardCompany />,
      },
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
