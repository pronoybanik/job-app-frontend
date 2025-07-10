import React from "react";

interface Job {
  id: string;
  company: string;
  position: string;
  contractType: "Full-time" | "Part-time";
  location: string;
}

const JobList = () => {
  const [jobs, setJobs] = React.useState<Job[]>([
    {
      id: "1",
      company: "TechCorp",
      position: "Frontend Developer",
      contractType: "Full-time",
      location: "San Francisco, CA",
    },
    {
      id: "2",
      company: "DesignStudio",
      position: "UX Designer",
      contractType: "Part-time",
      location: "Remote",
    },
    {
      id: "3",
      company: "DataSystems",
      position: "Data Scientist",
      contractType: "Full-time",
      location: "New York, NY",
    },
  ]);

  const handleDelete = (id: string) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEdit = (id: string) => {
    // In a real app, this would open a modal or navigate to edit page
    console.log("Editing job with id:", id);
    alert(`Edit job with id: ${id}`);
  };

  return (
    <section className="p-4">
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Company
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contract Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {job.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      job.contractType === "Full-time"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {job.contractType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(job.id)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default JobList;
