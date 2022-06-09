import { ImageModel, UrlModel, ImageType } from "@/domain/models/image";
import { model, Schema } from "mongoose";

const schema = new Schema<ImageModel>({
  id: { type: String },
  name: { type: String, required: true },
  type: { type: String, enum: ImageType },
  url: new Schema<UrlModel>({
    id: { type: String },
    src: { type: String },
  }),
  price: { type: Number },
  description: { type: String },
});

export const ImageModelSchema = model<ImageModel>("images", schema);
