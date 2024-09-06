import type { IImage } from "@/core/auth/IImage";
import ImageService from "@/core/auth/ImageService";
import { defineStore } from "pinia";

export const useImagesStore = defineStore("imagesStore", {
    state: () => {
        return {
            images: [] as IImage[],
            isLoaded: false as boolean,
            imageService: new ImageService
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
    },
  });