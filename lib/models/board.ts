import mongoose, { Schema, Document } from "mongoose";

export interface IBoard extends Document {
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  columns: mongoose.Types.ObjectId[];
}

const boardSchema = new Schema<IBoard>({
  name: { type: String, required: true },
  userId: { type: String, required: true, index: true },
  columns: [{ type: Schema.Types.ObjectId, ref: "Column", required: true }],
}, {
  timestamps: true
});

export const Board = mongoose.models.Board || mongoose.model<IBoard>("Board", boardSchema);