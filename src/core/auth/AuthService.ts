import axios, { type AxiosRequestConfig } from "axios";
import type { ILoginDTO } from "./ILoginDTO";
import type { ILoginResponseDTO } from "./ILoginResponseDTO";

export default class LoginService {

    private loginURL: string = import.meta.env.VITE_API_ENDPOINT_LOGIN
    private logoutURL: string = import.meta.env.VITE_API_ENDPOINT_LOGOUT

    async login(loginDTO: ILoginDTO): Promise<ILoginResponseDTO> {

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
            throw new Error('Error with login operation: ' + error)
        }
    }

    async logout(): Promise<void> {
        let config: AxiosRequestConfig = {
            withCredentials: true
        }

        try {
            const response = await axios.post("http://localhost:8080/api/v1/logout", {}, config);
            console.log(response.status);
        } catch (error) {
            throw new Error('Error with logout operation: ' + error);
        }
    }
}