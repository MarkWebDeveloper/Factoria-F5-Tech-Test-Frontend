import AuthService from "@/core/auth/AuthService";
import type { ILoginDTO } from "@/core/auth/ILoginDTO";
import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", {
    state: () => {
        return {
            username: "" as string,
            role: "" as string,
            isAuthorized: false as boolean,
            authService: new AuthService
          };
    },
  
    actions: {
      async login(loginDTO: ILoginDTO) {
        try {
            const response = await this.authService.login(loginDTO)
            console.log(response)
            this.role = response.roles[0]
            this.username = response.username
            this.isAuthorized = true
        } catch (error) {
            console.error(error)
        }
      }
    },
  });