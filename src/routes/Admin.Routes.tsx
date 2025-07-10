import CreateJob from "../pages/AdminDashboard/CreateJob";
import DashBoard from "../pages/AdminDashboard/DashBoard";
import JobList from "../pages/AdminDashboard/JobList";
import UpdateJob from "../pages/AdminDashboard/UpdateJob";

export const AdminPaths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    name: "create Job",
    path: "createJob",
    element: <CreateJob />,
  },
  {
    name: "Job List",
    path: "jobList",
    element: (
      //   <ProtectedRoute roles={["admin"]}>
      <JobList />
      //   </ProtectedRoute>
    ),
  },
  {
    // name: "Job List",
    path: `updateJob/:id`,
    element: (
      //   <ProtectedRoute roles={["admin"]}>
      <UpdateJob />
      //   </ProtectedRoute>
    ),
  },
];
