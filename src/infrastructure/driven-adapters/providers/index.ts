import {ADD_IMAGE_REPOSITORY} from "@/domain/models/gateways/add-image-repository";
import {ADD_IMAGE_SERVICE} from "@/domain/use-cases/add-image-service";

import {AddImageServiceImpl} from "@/domain/use-cases/impl/add-image-service-impl";
import {ImageMongooseRepositoryAdapter} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/image-mongoose-repository-adapter";

export const adapters = [
    {
        useClass: ImageMongooseRepositoryAdapter,
        provide: ADD_IMAGE_REPOSITORY
    }
]

export const services = [
    {
        useClass: AddImageServiceImpl,
        provide: ADD_IMAGE_SERVICE
    }
]
// export const adapters = [];
        
// export const services = [];