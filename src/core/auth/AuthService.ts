import axios, { type AxiosRequestConfig } from "axios";
import type { ILoginDTO } from "./ILoginDTO";
import type { IResponseDTO } from "./IResponseDTO";

export default class LoginService {

    private loginURL: string = import.meta.env.VITE_API_ENDPOINT_LOGIN

    async login(loginDTO: ILoginDTO): Promise<IResponseDTO> {

        let config: AxiosRequestConfig = {
            auth: {
                username: loginDTO.username,
                password: loginDTO.password
              },
            withCredentials: true
        }

        try {
            const response = await axios.post(this.loginURL, loginDTO, config)
            const status = response
            console.log(status);
            console.log(response.data)
            return response.data            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }
}