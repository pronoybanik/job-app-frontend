import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { fetchJobs } from "../../redux/features/auth/auth.slice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );
  
  useEffect(() => {
      dispatch(fetchJobs());
    }, [dispatch]);
    
    console.log("jobs", jobs?.data?.length);
    // length
  return <div>Jobs page {jobs?.data?.lengthF}</div>;
};

export default Jobs;
