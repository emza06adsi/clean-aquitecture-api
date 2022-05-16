export type UrlModel = {
    id: string;
    src: string;
}

export type ImageModel = {
    id: string | number;
    name: string;
    url: UrlModel;
}

export type AddImageParams = Omit<ImageModel, 'id'>
