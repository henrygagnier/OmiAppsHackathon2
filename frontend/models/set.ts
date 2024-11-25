import { Schema, models } from "mongoose";
import mongoose from "mongoose";

const setSchema = new Schema(
  {
    cards: {
      type: Schema.Types.Mixed,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Set = models.Set || mongoose.model("Set", setSchema);