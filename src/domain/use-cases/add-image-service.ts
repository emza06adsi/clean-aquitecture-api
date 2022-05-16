import { ImageModel, AddImageParams } from "@/domain/models/image";

export const ADD_IMAGE_SERVICE = "ADD_IMAGE_SERVICE"

export interface IAddImageService {
    addImageService: (data: AddImageParams) => Promise<ImageModel>
}
