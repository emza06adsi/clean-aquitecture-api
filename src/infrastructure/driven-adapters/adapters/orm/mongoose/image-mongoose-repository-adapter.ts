import { ImageModel, AddImageParams } from "@/domain/models/image";
import { IAddImageRepository } from "@/domain/models/gateways/add-image-repository";
import { ImageModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/image";

export class ImageMongooseRepositoryAdapter implements IAddImageRepository {

    async addImageRepository(data: AddImageParams): Promise<ImageModel> {
        return await ImageModelSchema.create(data);
    }

    async getUsersRepository(): Promise<ImageModel[]> {
        return ImageModelSchema.find();
    }
    
}
