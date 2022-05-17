import {ADD_IMAGE_REPOSITORY} from "@/domain/models/gateways/add-image-repository";
import {GET_IMAGE_REPOSITORY} from "@/domain/models/gateways/get-image-repository";
import {ADD_IMAGE_SERVICE} from "@/domain/use-cases/add-image-service";
import {GET_IMAGES_SERVICE} from "@/domain/use-cases/get-image-service";

import {AddImageServiceImpl} from "@/domain/use-cases/impl/add-image-service-impl";
import {GetImagesServiceImpl} from "@/domain/use-cases/impl/get-image-service-imptl";
import {ImageMongooseRepositoryAdapter} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/image-mongoose-repository-adapter";

export const adapters = [
    {
        useClass: ImageMongooseRepositoryAdapter,
        provide: ADD_IMAGE_REPOSITORY
    },
    {
        useClass: ImageMongooseRepositoryAdapter,
        provide: GET_IMAGE_REPOSITORY
    }
]

export const services = [
    {
        useClass: AddImageServiceImpl,
        provide: ADD_IMAGE_SERVICE
    },
    {
        useClass: GetImagesServiceImpl,
        provide: GET_IMAGES_SERVICE
    }

]
// export const adapters = [];
        
// export const services = [];