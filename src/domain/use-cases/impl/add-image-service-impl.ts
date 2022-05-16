import { Service, Adapter } from "@tsclean/core";
import { IAddImageService } from "@/domain/use-cases/add-image-service";
import { ImageModel } from "@/domain/models/image";
import { AddImageParams } from "@/domain/models/image";
import { ADD_IMAGE_REPOSITORY, IAddImageRepository } from "@/domain/models/gateways/add-image-repository";

@Service()
export class AddImageServiceImpl implements IAddImageService {
    constructor(
        @Adapter(ADD_IMAGE_REPOSITORY) private readonly addImageRepository: IAddImageRepository
    ) {

    }
    async addImageService(data: AddImageParams): Promise<ImageModel> {
        return await this.addImageRepository.addImageRepository(data);
    }
}