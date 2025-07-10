import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getSingleJob, updateJob } from "../../redux/features/job/job.slice";
import { toast } from "sonner";
import type { TJobPosting } from "../../types/job.type";

const UpdateJob = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { singleJob, loading } = useAppSelector((state) => state.jobs);

  const [formData, setFormData] = useState<TJobPosting>({
    companyName: "",
    position: "",
    contractType: "full-time",
    location: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getSingleJob({ id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleJob) {
      setFormData({
        companyName: singleJob.companyName,
        position: singleJob.position,
        contractType: singleJob.contractType,
        location: singleJob.location,
      });
    }
  }, [singleJob]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      const result = await dispatch(updateJob({ id, data: formData })).unwrap();
      if (result?.success) {
        toast.success("Job updated successfully!");
        navigate("/dashboard/jobList");
      }
    } catch (err) {
      toast.error("Failed to update job.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Job</h2>

      {loading && <p>Loading job...</p>}

      {!loading && (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contract Type
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contractType"
                  value="full-time"
                  checked={formData.contractType === "full-time"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="ml-2">Full-time</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contractType"
                  value="part-time"
                  checked={formData.contractType === "part-time"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="ml-2">Part-time</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Update Job
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateJob;
