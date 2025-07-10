
export type TApply = {
  jobId: string;
  userId: string;

};

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  needsPasswordChange: boolean;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IJob {
  _id: string;
  companyName: string;
  position: string;
  contractType: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IJobApplication {
  _id: string;
  userId: IUser;
  jobId: IJob;
  appliedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



