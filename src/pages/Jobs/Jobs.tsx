import  { useEffect } from "react";
import {  useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { fetchJobs } from "../../redux/features/job/job.slice";
import { useAppDispatch } from "../../redux/hook";

const Jobs = () => {
  const dispatch = useAppDispatch();
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );
  
  useEffect(() => {
      dispatch(fetchJobs());
    }, [dispatch]);
    
    console.log("jobs", jobs?.data?.length);
    // length
  return <div>Jobs page {jobs?.data?.length}</div>;
};

export default Jobs;
