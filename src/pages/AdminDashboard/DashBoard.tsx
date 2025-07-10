import { selectCurrentUser } from "../../redux/features/auth/auth.slice";
import { useAppSelector } from "../../redux/hook";

const DashBoard = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Welcome to your Dashboard
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="text-sm font-medium text-gray-600">Name</h3>
          <p className="text-lg font-semibold text-gray-800">
            {user?.name || "N/A"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="text-sm font-medium text-gray-600">Email</h3>
          <p className="text-lg font-semibold text-gray-800">
            {user?.email || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
