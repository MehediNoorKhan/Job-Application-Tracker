import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
  company: string;
  position: string;
  location?: string;
  status: string;
  columnId: mongoose.Types.ObjectId;
  boardId: mongoose.Types.ObjectId;
  userId: string;
  order: number;
  notes?: string;
  salary?: string;
  link?: string;
  jobUrl?: string;
  appliedDate?: Date;
  tags?: string[];
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  
}

const jobApplicationSchema = new Schema<IJobApplication>({
  company: { type: String, required: true },
  boardId: { type: String, ref: "Board", required: true, index: true },
  order: { type: Number, required: true, default: 0 },
  jobApplications: [{ type: Schema.Types.ObjectId, ref: "JobApplication", required: true }],
  
}, {
  timestamps: true
});

export default mongoose.models.JobApplication || mongoose.model<IJobApplication>("JobApplication", jobApplicationSchema);