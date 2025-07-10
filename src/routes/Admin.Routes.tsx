import CreateJob from "../pages/AdminDashboard/createJob";
import JobList from "../pages/AdminDashboard/JobList";

export const AdminPaths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: "Dashboard page",
  },
  {
    name: "User Management",
    children: [
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
    ],
  },
];
