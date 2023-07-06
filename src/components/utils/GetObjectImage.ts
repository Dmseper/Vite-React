import encodeToBase64 from "./ImgToBase64";
import {ChangeEvent} from "react";

export const UploadImageSettings = {
  maxSize: 5242880, //5mb
  maxSizeInfoMessage: "Разрешается загрузить изображение в формате JPG или PNG до 5MB",
}

export interface ImageInterface {
  imageInBase64: string
  imageLink: string
  imageHasSize: boolean
}

export const getObjectImage = async (event: ChangeEvent<HTMLInputElement>): Promise<ImageInterface> => {
  const image = {} as ImageInterface
  image.imageInBase64 = await encodeToBase64((event.target as HTMLInputElement).files![0]);
  // image.imageLink = ((event.target as HTMLInputElement).files);
  // image.imageLink = URL.createObjectURL((event.target as HTMLInputElement).files![0]);
  // if (image.imageLink) (event.target as HTMLInputElement).files![0].size > UploadImageSettings.maxSize ? image.imageHasSize = true : image.imageHasSize = false
  return image
}
export default getObjectImage
