import  { useEffect, useState } from "react";
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
  const dispatch = useAppDispatch();
  const { applications, loading, error } = useAppSelector((state) => state.apply);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterContract, setFilterContract] = useState("");
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

  const filteredApplications = ((applications as unknown) as IJobApplication[])?.filter((app) => {
    const matchesSearch =
      app.jobId?.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobId?.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.userId?.fullName?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "" || app.userId?.status === filterStatus;
    const matchesContract = filterContract === "" || app.jobId?.contractType === filterContract;

    return matchesSearch && matchesStatus && matchesContract;
  });

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto mt-12">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">Job Applications</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-64"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">All Status</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            value={filterContract}
            onChange={(e) => setFilterContract(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">All Contract Types</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
      </div>

      {filteredApplications.length === 0 ? (
        <div className="text-center mt-20">
          <Briefcase className="mx-auto text-gray-400 mb-2" size={40} />
          <p className="text-gray-600">No applications found</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
          {filteredApplications.map((application) => (
            <div
              key={application._id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold">{application.jobId.position}</h2>
                <p className="text-sm text-gray-600 flex items-center">
                  <Building2 className="w-4 h-4 mr-1" />
                  {application.jobId.companyName}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {application.jobId.location}
                </p>
                <p className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {application.userId.fullName}
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {application.userId.email}
                </p>
                <p className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(application.appliedAt)}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center text-xs">
                <span className={`px-2 py-1 rounded-full ${getStatusColor(application.userId.status)}`}>
                  {application.userId.status}
                </span>
                <span className={`px-2 py-1 rounded-full ${getContractColor(application.jobId.contractType)}`}>
                  {application.jobId.contractType}
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
                {/* <button className="w-full py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                  <Trash2 className="inline w-4 h-4 mr-1" />
                  Delete
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal (optional display) */}
      {selectedApp && (
        <div className="fixed inset-0 dark:bg-gray-950 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Application Details</h2>
              <button onClick={() => setSelectedApp(null)} className="text-gray-500 hover:text-gray-800">
                ✖
              </button>
            </div>
            <p><strong>Position:</strong> {selectedApp.jobId.position}</p>
            <p><strong>Company:</strong> {selectedApp.jobId.companyName}</p>
            <p><strong>Applicant:</strong> {selectedApp.userId.fullName} ({selectedApp.userId.email})</p>
            <p><strong>Status:</strong> {selectedApp.userId.status}</p>
            <p><strong>Applied:</strong> {formatDate(selectedApp.appliedAt)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
