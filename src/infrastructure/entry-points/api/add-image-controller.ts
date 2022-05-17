import { Mapping, Get, Post, Adapter, Body } from "@tsclean/core";
import { ImageModel, AddImageParams } from "@/domain/models/image";
import { ADD_IMAGE_SERVICE, IAddImageService } from "@/domain/use-cases/add-image-service";

@Mapping('api/v1/add-image')
export class AddImageController {


    constructor(
        @Adapter(ADD_IMAGE_SERVICE) private readonly addImageService: IAddImageService
    ) {
    }


    @Post()
    async addImageController(@Body() data: AddImageParams): Promise<ImageModel> {
        return await this.addImageService.addImageService(data);
    }
}
