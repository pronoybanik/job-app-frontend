import { useEffect, useState } from "react";

const DashBoard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/users/me`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Unauthorized or failed to fetch user");
        }

        const result = await response.json();
        setUser(result.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Welcome to your Dashboard
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="text-sm font-medium text-gray-600">Full Name</h3>
          <p className="text-lg font-semibold text-gray-800">
            {user?.fullName || "N/A"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="text-sm font-medium text-gray-600">Email</h3>
          <p className="text-lg font-semibold text-gray-800">
            {user?.email || "N/A"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="text-sm font-medium text-gray-600">Role</h3>
          <p className="text-lg font-semibold text-gray-800">
            {user?.role || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
