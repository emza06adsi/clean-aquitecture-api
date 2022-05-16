import { ImageModel, AddImageParams } from "@/domain/models/image";

export const ADD_IMAGE_REPOSITORY = "ADD_IMAGE_REPOSITORY"

export interface IAddImageRepository {
    addImageRepository: (data: AddImageParams) => Promise<ImageModel>
}
