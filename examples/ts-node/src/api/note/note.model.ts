import mongoose, { Document } from "mongoose";

export interface NoteDocument extends Document {
  content: string;
  important: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      upperCase: true,
    },
    important: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.model<NoteDocument>("Note", NoteSchema);

export default Note;
