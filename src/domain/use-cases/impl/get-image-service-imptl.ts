import { IGetImagesService } from "@/domain/use-cases/get-image-service";
import { ImageModel } from "@/domain/models/image";
import { GET_IMAGE_REPOSITORY, IGetImageRepository } from "@/domain/models/gateways/get-image-repository";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class GetImagesServiceImpl implements IGetImagesService {
    constructor(
        @Adapter(GET_IMAGE_REPOSITORY) private readonly getUsersRepository: IGetImageRepository
    ) {
    }

    async getUsersService(): Promise<ImageModel[]> {
        return await this.getUsersRepository.getUsersRepository();
    }
}