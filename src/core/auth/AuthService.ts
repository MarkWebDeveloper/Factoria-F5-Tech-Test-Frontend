import axios, { type AxiosRequestConfig } from "axios";
import type { ILoginDTO } from "./ILoginDTO";
import type { ILoginResponseDTO } from "./ILoginResponseDTO";
import type { IRegisterDTO } from "./IRegisterDTO";

export default class LoginService {

    private loginURL: string = import.meta.env.VITE_API_ENDPOINT_LOGIN
    private logoutURL: string = import.meta.env.VITE_API_ENDPOINT_LOGOUT
    private registerURL: string = import.meta.env.VITE_API_ENDPOINT_REGISTER

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
            alert("The username or password is incorrect.")
            throw new Error('Error with login operation: ' + error)
        }
    }

    async register(registerDTO: IRegisterDTO): Promise<void> {

        try {
            const response = await axios.post(this.registerURL, registerDTO)
            const status = response
            console.log(status);
            console.log(response.data)
            alert ("The register has been successfull. You can now log in into your new account.")
            return response.data      
        } catch (error) {
            throw new Error('Error with register operation: ' + error)
        }
    }

    async logout(): Promise<void> {
        let config: AxiosRequestConfig = {
            withCredentials: true
        }

        try {
            const response = await axios.post(this.logoutURL, {}, config);
            console.log(response.status);
        } catch (error) {
            throw new Error('Error with logout operation: ' + error);
        }
    }
}