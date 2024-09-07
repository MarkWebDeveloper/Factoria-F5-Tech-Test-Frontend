import axios, { type AxiosRequestConfig } from "axios";
import type { IImage } from "./IImage";

export default class ImageService {

    private imagesURL: string = import.meta.env.VITE_API_ENDPOINT_IMAGES

    async get(): Promise<IImage> {

        let config: AxiosRequestConfig = {
            withCredentials: true
        }

        try {
            const response = await axios.get(this.imagesURL + `/getCurrentUserImages`, config)
            const status = response
            console.log(status);
            console.log(response.data)
            return response.data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async post(formData: FormData): Promise<IImage> {

        let config: AxiosRequestConfig = {
            withCredentials: true
        }

        try {
            const response = await axios.post(this.imagesURL + "/uploadImage", formData, config)
            const status = response.status
            console.log(status);
            return response.data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async delete(filename: string): Promise<void> {

        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        }
        
        try {
            const response = await axios.delete(`${this.imagesURL}/${filename}`, config)
            const status = response.status
            console.log(status);
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

}