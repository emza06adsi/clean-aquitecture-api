export enum ImageType {
    ANIME = "ANIME"
}

export type UrlModel = {
    id: string;
    src: string;
}

export type ImageModel = {
    id: string | number;
    name: string;
    url: UrlModel;
    type: ImageType
}

export type AddImageParams = Omit<ImageModel, 'id'>
