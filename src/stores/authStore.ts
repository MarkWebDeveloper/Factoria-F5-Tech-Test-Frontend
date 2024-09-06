import AuthService from "@/core/auth/AuthService";
import type { ILoginDTO } from "@/core/auth/ILoginDTO";
import { defineStore } from "pinia";
import { useImagesStore } from "./imagesStore";

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            username: "" as string,
            role: "" as string,
            isAuthorized: false as boolean,
            authService: new AuthService,
            loginFormIsOpened: false as boolean,
            imagesStore: useImagesStore()
          };
    },
  
    actions: {
      async login(loginDTO: ILoginDTO) {
        try {
            const response = await this.authService.login(loginDTO)
            console.log(response)
            this.role = response.roles
            this.username = response.username
            this.isAuthorized = true
            this.switchLoginForm()
            this.imagesStore.getImages()
        } catch (error) {
            console.error(error)
        }
      },
      switchLoginForm() {
        this.loginFormIsOpened = !this.loginFormIsOpened
      },
    },
  });