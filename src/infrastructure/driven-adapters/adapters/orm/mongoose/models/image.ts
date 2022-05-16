import { ImageModel, UrlModel } from '@/domain/models/image';
import { model, Schema } from "mongoose";

const schema = new Schema<ImageModel>({
    id: { type: String },
    name: { type: String, required: true },
    url: new Schema<UrlModel>({
        id: { type: String },
        src: { type: String },
    })
});

export const ImageModelSchema = model<ImageModel>('images', schema);