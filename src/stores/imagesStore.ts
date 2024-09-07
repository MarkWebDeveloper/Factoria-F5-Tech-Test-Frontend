import type { IImage } from "@/core/images/IImage";
import ImageService from "@/core/images/ImageService";
import { defineStore } from "pinia";

export const useImagesStore = defineStore("imagesStore", {
  state: () => {
    return {
      images: [] as IImage[],
      isLoaded: false as boolean,
      imageService: new ImageService(),
      imageURL: import.meta.env.VITE_APP_API_IMGS as string,
      uploadImageFormIsOpened: false as boolean,
      uploadingImageUrl: "/images/placeholder-image.svg" as string,
      uploadingImage: null as File | null,
      uploadedImage: {} as IImage,
    };
  },

  actions: {
    async getImages(this: any): Promise<IImage[]> {
      if (this.isLoaded == true) {
        this.isLoaded = false;
      }
      this.images = await this.imageService.get();
      this.isLoaded = true;
      return this.images;
    },

    async postImage(this: any, formData: FormData): Promise<IImage> {
      try {
        this.uploadedImage = await this.imageService.post(formData);
        return this.uploadedImage;
      } catch (error) {
        console.error(error)
      }
      return this.uploadedImage
    },

    switchUploadForm() {
      this.uploadImageFormIsOpened = !this.uploadImageFormIsOpened;
    },

    handleFileUpload(event: Event): void {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        this.uploadingImage = target.files[0];
        this.transformIntoUrl(this.uploadingImage);
      } else {
        alert("File input event is undefined");
      }
    },

    transformIntoUrl(file: File): void {
      this.uploadingImageUrl = URL.createObjectURL(file);
    },

    addImageToArray(image: IImage): void  {
      this.images.push(image)
    },
  },
});
