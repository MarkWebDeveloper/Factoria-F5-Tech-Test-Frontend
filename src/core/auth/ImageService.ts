import axios, { type AxiosRequestConfig } from "axios";
import type { IImage } from "./IImage";

export default class ImageService {

    private imagesURL: string = import.meta.env.VITE_API_ENDPOINT_IMAGES

    async get(): Promise<IImage> {

        let config: AxiosRequestConfig = {
            withCredentials: true
        }

        try {
            const response = await axios.get(this.imagesURL, config)
            const status = response
            console.log(status);
            console.log(response.data)
            return response.data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }
}