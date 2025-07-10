export type TJobPosting = {
  _id?: string;
  companyName: string;
  position: string;
  contractType: "full-time" | "part-time";
  location: string;
  createdAt?: string;
  updatedAt?: string;
};
