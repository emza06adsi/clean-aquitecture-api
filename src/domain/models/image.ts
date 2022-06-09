export enum ImageType {
  ANIME = "ANIME",
  ACCESS = "ACCESS",
  
}

export type UrlModel = {
  id: string;
  src: string;
};

export type ImageModel = {
  id: string | number;
  name: string;
  url: UrlModel;
  type: ImageType;
  price: number;
  description: string;
};

export type AddImageParams = Omit<ImageModel, "id">;
