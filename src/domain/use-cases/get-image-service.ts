import {ImageModel} from "@/domain/models/image";

export const GET_IMAGES_SERVICE = "GET_IMAGES_SERVICE";

export interface IGetImagesService {
    getUsersService: () => Promise<ImageModel[]>
}

