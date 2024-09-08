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
      uploadingImageFile: null as File | null,
      uploadingImageTitle: '' as string,
      uploadedImage: {} as IImage,
      updateImageFormIsOpened: false,
      updatingImageUrl: '' as string,
      updatingImage: {} as IImage,
      updatingImageTitle: '' as string,
      updatingImageFile: null as File | null,
      updatedImage: {} as IImage
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

    async postImage(this: any, formData: FormData): Promise<void> {
      try {
        this.uploadedImage = await this.imageService.post(formData);
        return this.uploadedImage;
      } catch (error) {
        console.error(error)
      }
    },

    async updateImage(this: any, id: number, formData: FormData): Promise<void> {
      try {
        this.updatedImage = await this.imageService.update(id, formData)
        return this.updatedImage;
      } catch (error) {
        console.error(error)
      }
    },

    async deleteImage(this: any, filename: string): Promise<void> {
      try {
        await this.imageService.delete(filename);
        const imageIndex = this.images.findIndex((element: IImage) => element.imageName == filename)
        this.images.splice(imageIndex, 1)
      } catch (error) {
        console.error(error)
      }
    },

    switchUploadForm() {
      this.uploadImageFormIsOpened = !this.uploadImageFormIsOpened
    },

    switchUpdateForm() {
      this.updateImageFormIsOpened = !this.updateImageFormIsOpened
    },

    handleFileUpload(event: Event): void {
      const target = event.target as HTMLInputElement
      if (target && target.files && target.files.length > 0) {
        this.uploadingImageFile = target.files[0];
        this.uploadingImageUrl = URL.createObjectURL(this.uploadingImageFile);
      } else {
        alert("File input event is undefined")
      }
    },

    handleFileUpdate(event: Event): void {
      const target = event.target as HTMLInputElement
      if (target && target.files && target.files.length > 0) {
        this.updatingImageFile = target.files[0];
        this.updatingImageUrl = URL.createObjectURL(this.updatingImageFile);
      } else {
        alert("File input event is undefined")
      }
    },

    addImageToArray(image: IImage): void  {
      this.images.push(image)
    },

    resetImagesForm(): void {
      this.uploadingImageUrl = "/images/placeholder-image.svg"
      this.uploadingImageTitle = ''
    },

    deleteImageFromArray(id: number): number {
      const foundIndex = this.images.findIndex((image: IImage) => image.id == id)
      console.log(foundIndex)
      this.images.splice(foundIndex, 1)
      return foundIndex
    },

    addImageToArrayInPlace(index: number, image: IImage): void {
      this.images.splice(index, 0, image)
    },

    findUpdatingProduct(id: number): void {
      this.updatingImage = this.images.find((element: IImage) => element.id == id)!
      this.updatingImageUrl = this.imageURL + `/${this.updatingImage.imageName}`
      this.updatingImageTitle = this.updatingImage.imageTitle
    },
  },
});
