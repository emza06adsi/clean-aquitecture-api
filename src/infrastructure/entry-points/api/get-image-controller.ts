import { Mapping, Get, Post, Adapter, Body } from "@tsclean/core";
import { ImageModel, AddImageParams } from "@/domain/models/image";
import { GET_IMAGES_SERVICE, IGetImagesService } from "@/domain/use-cases/get-image-service";

@Mapping('api/v1/get-images')
export class GetImageController {

    constructor(
        @Adapter(GET_IMAGES_SERVICE) private readonly addImageService: IGetImagesService
    ) {
    }

    @Get()
    async getWelcome(): Promise<ImageModel[]> {
        return await this.addImageService.getUsersService();
    }
}
