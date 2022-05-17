import {ImageModel} from "@/domain/models/image";

export const GET_IMAGE_REPOSITORY = "GET_IMAGE_REPOSITORY";

export interface IGetImageRepository {
    getUsersRepository: () => Promise<ImageModel[]>
}