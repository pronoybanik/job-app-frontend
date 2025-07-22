import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getAllApplicationsThunk } from "../../redux/features/apply/apply.slice";
import {
  Calendar,
  MapPin,
  Building2,
  User,
  Mail,
  Briefcase,
  Eye,
} from "lucide-react";
import type { IJobApplication } from "../../types/apply.type";

const Applications = () => {
  // const userInfo = useAppSelector(selectCurrentUser);
  // console.log("Token:", userInfo);

  const dispatch = useAppDispatch();
  const { applications, loading } = useAppSelector((state) => state.apply);
  const [selectedApp, setSelectedApp] = useState<IJobApplication | null>(null);

  useEffect(() => {
    dispatch(getAllApplicationsThunk());
  }, [dispatch]);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getContractColor = (contractType: string): string => {
    switch (contractType) {
      case "full-time":
        return "bg-blue-100 text-blue-800";
      case "part-time":
        return "bg-purple-100 text-purple-800";
      case "contract":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const applicationList = applications as unknown as IJobApplication[];

  // const applicationList = (applications as IJobApplication[]).filter(
  //   (app) => app.userId._id === userInfo?.userId
  // );

  console.log("Filtered Applications:", applicationList);

  return (
    <div className="p-6 max-w-7xl mx-auto mt-12">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Job Applications
      </h1>

      {applicationList.length === 0 ? (
        <div className="text-center mt-20">
          <Briefcase className="mx-auto text-gray-400 mb-2" size={40} />
          <p className="text-gray-600">No applications found</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {applicationList.map((application) => (
            <div
              key={application?._id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold">
                  {application?.jobId?.position}
                </h2>
                <p className="text-sm text-gray-600 flex items-center">
                  <Building2 className="w-4 h-4 mr-1" />
                  {application?.jobId?.companyName}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {application?.jobId?.location}
                </p>
                <p className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {application?.userId?.fullName}
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {application?.userId?.email}
                </p>
                <p className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(application?.appliedAt)}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center text-xs">
                <span
                  className={`px-2 py-1 rounded-full ${getStatusColor(
                    application?.userId?.status
                  )}`}
                >
                  {application?.userId?.status}
                </span>
                <span
                  className={`px-2 py-1 rounded-full ${getContractColor(
                    application?.jobId?.contractType
                  )}`}
                >
                  {application?.jobId?.contractType}
                </span>
              </div>

              <div className="mt-8 flex gap-2">
                <button
                  onClick={() => setSelectedApp(application)}
                  className="w-full py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  <Eye className="inline w-4 h-4 mr-1" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 dark:bg-gray-950 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Application Details</h2>
              <button
                onClick={() => setSelectedApp(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
            <p>
              <strong>Position:</strong> {selectedApp?.jobId?.position}
            </p>
            <p>
              <strong>Company:</strong> {selectedApp?.jobId?.companyName}
            </p>
            <p>
              <strong>Applicant:</strong> {selectedApp?.userId?.fullName} (
              {selectedApp?.userId?.email})
            </p>
            <p>
              <strong>Status:</strong> {selectedApp?.userId?.status}
            </p>
            <p>
              <strong>Applied:</strong> {formatDate(selectedApp?.appliedAt)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
